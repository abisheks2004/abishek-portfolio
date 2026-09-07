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
    { label: "About Me", query: "Tell me about yourself" },
    { label: "Skills", query: "Show me your skills" },
    { label: "Projects", query: "Show me your projects" },
  ];

  return (
    <>
      <ChatBubbleLeft
        message={loading ? "Thinking... 🤖" : botMessage}
      />

      {/* Suggested Quick Prompt Chips - in ONE single horizontal line */}
      <div className="absolute top-[160px] sm:top-auto sm:bottom-[280px] md:bottom-[330px] lg:bottom-[370px] right-3 sm:right-6 md:right-[80px] lg:right-[180px] z-20 flex flex-row flex-nowrap items-center justify-end gap-1.5 sm:gap-2">
        {suggestions.map(({ label, query }) => (
          <button
            key={label}
            onClick={() => handleSend(query)}
            disabled={loading}
            className="text-[11px] sm:text-xs font-medium whitespace-nowrap bg-gray-900/90 hover:bg-yellow-400 hover:text-black text-gray-200 border border-yellow-400/40 px-3 py-1 rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer disabled:opacity-40 shadow-md active:scale-95"
          >
            {label}
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
