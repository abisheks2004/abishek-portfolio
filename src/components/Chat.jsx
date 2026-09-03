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

  const handleSend = async () => {
    const text = userMessage.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setUserMessage("");
    await respond(nextMessages);
  };

  return (
    <div className="w-full max-w-screen-md mx-auto px-2 sm:px-4 md:px-8 lg:px-10 py-4 space-y-4">
      <ChatBubbleLeft
        message={loading ? "Thinking... 🤖" : botMessage}
      />
      <ChatBubbleRight
        message={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        onSend={handleSend}
        loading={loading}
      />
    </div>
  );
}
