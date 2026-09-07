import { useState } from "react";
import ChatBubbleLeft from "./ChatBubbleLeft";
import ChatBubbleRight from "./ChatBubbleRight";
import useChatbot from "./Chatbot";

export default function Chat({ setIntroDone }) {
  const [userMessage, setUserMessage] = useState("");
  const [botMessage, setBotMessage] = useState(
    "Hey! I'm Abishek's AI assistant 🤖 Ask me anything about his portfolio."
  );
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const { respond } = useChatbot({
    setBotMessage,
    setLoading,
    goToSection: (refName) => {
      sessionStorage.setItem("requestedSection", refName);
      sessionStorage.setItem("exitedChat", "true");
      setIntroDone(true);
    },
  });

  const handleSend = async (customText) => {
    const text = (typeof customText === "string" ? customText : userMessage).trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setUserMessage("");
    await respond(nextMessages);
  };

const suggestions = [
  "Tell me about yourself",
  "Show me your skills",
  "Show me your projects",
];

  return (
    <>
      <ChatBubbleLeft
        message={loading ? "Thinking... 🤖" : botMessage}
      />

      {/* Suggested Quick Prompt Chips */}
      <div className="absolute top-[165px] sm:top-auto sm:bottom-[280px] md:bottom-[330px] lg:bottom-[370px] right-3 sm:right-6 md:right-[80px] lg:right-[180px] z-20 flex flex-wrap justify-end gap-1.5 max-w-[92%] sm:max-w-[340px] md:max-w-[400px]">
        {suggestions.map((prompt) => (
          <button
            key={prompt}
            onClick={() => handleSend(prompt)}
            disabled={loading}
            className="text-[10px] sm:text-xs bg-gray-900/80 hover:bg-yellow-400 hover:text-black text-gray-200 border border-yellow-400/30 px-2.5 py-1 rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer disabled:opacity-40"
          >
            {prompt}
          </button>
        ))}
      </div>

      <ChatBubbleRight
        message={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        onSend={() => handleSend()}
        loading={loading}
      />
    </>
  );
}
