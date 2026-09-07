import { Send } from "lucide-react";

export default function ChatBubbleRight({ message, onChange, onSend, loading }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!loading) onSend();
    }
  };

  return (
    <div className="absolute bottom-[140px] sm:bottom-[210px] md:bottom-[260px] lg:bottom-[300px] right-3 sm:right-6 md:right-[80px] lg:right-[180px] z-20 w-[92%] sm:w-auto max-w-[92%] sm:max-w-[340px] md:max-w-[400px] text-xs sm:text-sm font-sans transition-all duration-300">
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-2 sm:p-2.5 rounded-2xl shadow-2xl relative border border-rose-400/40 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Abishek's projects..."
            className="flex-1 bg-white/95 text-gray-900 placeholder:text-gray-400 px-3 py-2 rounded-xl outline-none text-xs sm:text-sm font-medium focus:ring-2 focus:ring-yellow-300 transition"
            disabled={loading}
          />
          <button
            onClick={onSend}
            disabled={loading || !message.trim()}
            className="p-2 rounded-xl bg-rose-600 hover:bg-rose-700 disabled:opacity-40 transition-all active:scale-95 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send size={16} className="text-white" />
          </button>
        </div>

        {/* Speech tail for tablet / desktop */}
        <div className="hidden sm:block absolute -bottom-2.5 right-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-rose-500" />
      </div>
    </div>
  );
}
