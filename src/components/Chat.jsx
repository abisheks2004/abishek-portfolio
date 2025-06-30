import React, { useState } from "react";
import ChatBubbleLeft from "./ChatBubbleLeft";
import ChatBubbleRight from "./ChatBubbleRight";
import useChatbot from "./Chatbot";

export default function Chat({
  setIntroDone,
  refs: { homeRef, aboutRef, skillsRef, projectsRef, contactRef },
}) {
  const [userMessage, setUserMessage] = useState("");
  const [botMessage, setBotMessage] = useState(
    "Hey I'm Abishek 😎 Ask about my portfolio!"
  );

  const { detectIntent, isThanglish, respond } = useChatbot({
    userMessage,
    setBotMessage,
    scrollToSection: (refName) => {
      setIntroDone(true);

      const refMap = {
        home: homeRef,
        about: aboutRef,
        skills: skillsRef,
        projects: projectsRef,
        contact: contactRef,
      };

      setTimeout(() => {
        refMap[refName]?.current?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    },
  });

  const handleSend = () => {
    if (userMessage.trim() === "") return;

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
