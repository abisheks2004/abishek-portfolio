import React from "react";
import { Send } from "lucide-react";

export default function ChatBubbleRight({ message, onChange, onSend, loading }) {
  return (
    <div className="absolute bottom-[260px] sm:bottom-[280px] md:bottom-[300px] right-2 sm:right-4 md:right-[100px] lg:right-[250px] z-10 w-[85%] xs:w-[90%] sm:w-auto max-w-[40%] sm:max-w-[300px] text-xs sm:text-sm font-sans">
      <div className="bg-rose-400 text-black px-3 py-2 sm:px-4 sm:py-3 rounded-2xl shadow-xl relative">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={onChange}
            placeholder="Type your message..."
            className="flex-1 bg-white bg-opacity-50 px-2 sm:px-3 py-1.5 rounded-xl outline-none text-xs sm:text-sm min-w-[60px]"
            disabled={loading}
          />
          <button
            onClick={onSend}
            disabled={loading}
            className="p-1.5 rounded-full hover:bg-rose-500 disabled:opacity-50 transition-all"
          >
            <Send size={18} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
