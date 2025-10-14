import React, { useState, useEffect, useRef } from "react";

export default function ChatModal({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const chatEndRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    // Send to Rasa
    try {
      const res = await fetch("http://localhost:5005/webhooks/rest/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender: "user1", message: input }),
      });
      const data = await res.json();

      const botReplies = data.map((d) => ({ sender: "bot", text: d.text }));
      setMessages((prev) => [...prev, ...botReplies]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Server error. Try again." },
      ]);
    }
  };

  return (
    <div style={{ ...overlay, backgroundColor: darkMode ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.4)" }}>
      <div style={{ ...modal, backgroundColor: darkMode ? "#2e2e2e" : "#fff", color: darkMode ? "#fff" : "#000" }}>
        {/* Header */}
        <div style={header}>
          <span>Ask Tixie</span>
          <div>
            <button onClick={() => setDarkMode(!darkMode)} style={toggleBtn}>
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
            <button onClick={onClose} style={closeBtn}>✖</button>
          </div>
        </div>

        {/* Chat Area */}
        <div style={{ ...chatBox, backgroundColor: darkMode ? "#1e1e1e" : "#f9f9f9" }}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={m.sender === "user" ? userMsg : botMsg(darkMode)}
            >
              {m.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ ...inputArea, backgroundColor: darkMode ? "#2e2e2e" : "#fff" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            style={{
              ...inputStyle,
              backgroundColor: darkMode ? "#444" : "#eee",
              color: darkMode ? "#fff" : "#000",
            }}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} style={sendBtn}>Send</button>
        </div>
      </div>
    </div>
  );
}

// Styles
const overlay = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modal = {
  width: "500px",
  height: "650px",
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
  overflow: "hidden",
};

const header = {
  padding: "12px 16px",
  fontWeight: "bold",
  fontSize: "18px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #ccc",
};

const toggleBtn = {
  marginRight: "10px",
  padding: "4px 8px",
  cursor: "pointer",
  borderRadius: "6px",
  border: "none",
};

const closeBtn = {
  cursor: "pointer",
  border: "none",
  background: "transparent",
  fontSize: "16px",
};

const chatBox = {
  flex: 1,
  padding: "15px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const inputArea = {
  display: "flex",
  padding: "10px",
  borderTop: "1px solid #ccc",
};

const inputStyle = {
  flex: 1,
  padding: "10px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
};

const sendBtn = {
  padding: "10px 16px",
  marginLeft: "8px",
  borderRadius: "10px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const userMsg = {
  alignSelf: "flex-end",
  backgroundColor: "#DCF8C6",
  padding: "8px 12px",
  borderRadius: "15px",
  maxWidth: "80%",
  wordWrap: "break-word",
};

const botMsg = (darkMode) => ({
  alignSelf: "flex-start",
  backgroundColor: darkMode ? "#3a3a3a" : "#ECECEC",
  padding: "8px 12px",
  borderRadius: "15px",
  maxWidth: "80%",
  wordWrap: "break-word",
});
