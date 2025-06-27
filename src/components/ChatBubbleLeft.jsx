  import React from "react";

export default function ChatBubbleLeft({ message }) {
  return (
    <div className="absolute bottom-[280px] sm:bottom-[300px] md:bottom-[320px] left-2 sm:left-6 md:left-[120px] lg:left-[300px] z-10 w-[85%] xs:w-[90%] sm:w-auto max-w-[40%] sm:max-w-[300px] text-xs sm:text-sm font-sans">
      <div className="bg-gradient-to-br from-white to-gray-200 text-black px-3 py-2 sm:px-4 sm:py-3 rounded-2xl shadow-xl relative min-h-[40px] min-w-[100px] transition-all duration-300 break-words">
        <span>{message || "..."}</span>

        {/* Tail arrow */}
        <div
          className="absolute -left-2 bottom-2 w-0 h-0
          border-t-[8px] border-t-transparent
          border-r-[12px] border-r-white
          border-b-[1px] border-b-transparent"
        ></div>
      </div>
    </div>
  );
}
