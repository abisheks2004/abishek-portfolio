import React, { useState } from "react";
import ChatBubbleLeft from "./ChatBubbleLeft";
import ChatBubbleRight from "./ChatBubbleRight";
import useChatbot from "./Chatbot";

export default function Chat({
  setIntroDone,
  refs: {
    homeRef,
    aboutRef,
    skillsRef,
    projectsRef,
    achievementsRef,
    certificatesRef,
    contactRef
  },
}) {
  const [userMessage, setUserMessage] = useState("");
  const [botMessage, setBotMessage] = useState(
    "Hey I'm Abishek 😎 Ask about my portfolio!"
  );

  const { detectIntent, isThanglish, respond } = useChatbot({
    userMessage,
    setBotMessage,
    goToSection: (refName) => {
      sessionStorage.setItem("requestedSection", refName);
      sessionStorage.setItem("exitedChat", "true");
      setIntroDone(true);
    },
  });

  const handleSend = () => {
    if (!userMessage.trim()) return;
    const intent = detectIntent(userMessage);
    respond(intent, isThanglish(userMessage));
    setUserMessage("");
  };

  return (
    <div className="w-full max-w-screen-md mx-auto px-2 sm:px-4 md:px-8 lg:px-10 py-4 space-y-4">
      <ChatBubbleLeft message={botMessage} />
      <ChatBubbleRight
        message={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        onSend={handleSend}
      />
    </div>
  );
}
