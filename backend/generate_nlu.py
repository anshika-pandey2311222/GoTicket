import yaml
import random
import os

# ---------------- CONFIG ----------------
domain_file = r"C:\Users\Hp\GoTicket\backend\domain.yml"
stories_output = r"C:\Users\Hp\GoTicket\data\stories_generated.yml"
rules_output = r"C:\Users\Hp\GoTicket\data\rules_generated.yml"
num_stories_per_intent = 10
# ----------------------------------------

# Load domain.yml
with open(domain_file, "r", encoding="utf-8") as f:
    domain = yaml.safe_load(f)

intents = domain.get("intents", [])
responses = domain.get("responses", {})

if not intents:
    print("⚠️ No intents found in domain.yml!")
    exit()

# Random sample responses for diversity
def sample_response(intent_name):
    key = f"utter_{intent_name}"
    if key in responses:
        return random.choice(responses[key])["text"]
    else:
        return "Sure, let me check that for you."

# ---------------- STORIES ----------------
stories = [{"version": "3.1", "stories": []}]

for intent in intents:
    for i in range(num_stories_per_intent):
        stories[0]["stories"].append({
            "story": f"{intent}_story_{i+1}",
            "steps": [
                {"intent": intent},
                {"action": f"utter_{intent}"}
            ]
        })

# Save stories
os.makedirs(os.path.dirname(stories_output), exist_ok=True)
with open(stories_output, "w", encoding="utf-8") as f:
    yaml.dump(stories, f, allow_unicode=True, sort_keys=False)
print(f"✅ Generated stories: {stories_output}")

# ---------------- RULES ----------------
rules = [{"version": "3.1", "rules": []}]
for intent in intents:
    rules[0]["rules"].append({
        "rule": f"Respond to {intent}",
        "steps": [
            {"intent": intent},
            {"action": f"utter_{intent}"}
        ]
    })

# Save rules
os.makedirs(os.path.dirname(rules_output), exist_ok=True)
with open(rules_output, "w", encoding="utf-8") as f:
    yaml.dump(rules, f, allow_unicode=True, sort_keys=False)
print(f"✅ Generated rules: {rules_output}")
