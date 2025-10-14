import React, { useState } from "react";
import ChatModal from "./ChatModal";
import chatbotImage from "./chatbot-girl.png"; // make sure this path is correct

export default function ChatbotLauncher() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div>
      {/* Floating "Ask Tixie" label */}
      <div style={floatingLabel}>
        Ask Tixie
      </div>

      {/* Chatbot image */}
      <img
        src={chatbotImage}
        alt="chatbot"
        style={chatbotStyle}
        onClick={() => setChatOpen(true)}
      />

      {chatOpen && <ChatModal onClose={() => setChatOpen(false)} />}
    </div>
  );
}

const chatbotStyle = {
  width: "120px", // bigger size, like a 20 rupee coin
  cursor: "pointer",
  position: "fixed",
  bottom: "20px",
  right: "20px",
  borderRadius: "50%", // makes it round like a coin
  boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
};

const floatingLabel = {
  position: "fixed",
  bottom: "150px", // above the image
  right: "20px",
  backgroundColor: "#ffde59",
  padding: "6px 12px",
  borderRadius: "20px",
  fontWeight: "bold",
  color: "#000",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
  cursor: "pointer",
  zIndex: 1001,
};
