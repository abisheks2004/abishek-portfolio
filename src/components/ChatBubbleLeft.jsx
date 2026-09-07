export default function ChatBubbleLeft({ message }) {
  return (
    <div className="absolute top-20 sm:top-auto sm:bottom-[210px] md:bottom-[260px] lg:bottom-[300px] left-3 sm:left-6 md:left-[90px] lg:left-[200px] z-20 w-[92%] sm:w-auto max-w-[92%] sm:max-w-[340px] md:max-w-[400px] text-xs sm:text-sm font-sans transition-all duration-300">
      <div className="bg-white/95 backdrop-blur-md text-gray-900 border border-white/60 px-4 py-3 rounded-2xl shadow-2xl relative min-h-[44px] transition-all duration-300 break-words">
        <p className="leading-relaxed font-medium max-h-[30vh] sm:max-h-[220px] overflow-y-auto pr-1">
          {message || "..."}
        </p>

        {/* Speech tail for tablet / desktop */}
        <div className="hidden sm:block absolute -bottom-2.5 left-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-white/95" />
      </div>
    </div>
  );
}
