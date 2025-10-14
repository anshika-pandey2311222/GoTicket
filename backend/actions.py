from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

class ActionCheckBusAvailability(Action):
    def name(self) -> Text:
        return "action_check_bus_availability"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        source = tracker.get_slot("source")
        destination = tracker.get_slot("destination")
        date = tracker.get_slot("date")

        # Example dummy data (replace with DB/API)
        buses = ["GoBus 101", "TravelX 202", "SuperExpress 303"]

        dispatcher.utter_message(text=f"Available buses from {source} to {destination} on {date}: {', '.join(buses)}")

        return []
