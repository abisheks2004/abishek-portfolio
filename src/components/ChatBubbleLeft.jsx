export default function ChatBubbleLeft({ message }) {
  return (
    <div className="absolute bottom-[280px] sm:bottom-[300px] md:bottom-[320px] left-2 sm:left-6 md:left-[120px] lg:left-[300px] z-10 w-[calc(100%-1rem)] sm:w-[min(70vw,520px)] md:w-[min(55vw,620px)] lg:w-[min(48vw,700px)] max-w-[92%] text-sm sm:text-base md:text-lg font-sans">
      <div className="bg-gradient-to-br from-white to-gray-200 text-black px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-4 rounded-2xl shadow-xl relative min-h-[44px] transition-all duration-300 break-words whitespace-pre-wrap leading-relaxed max-h-[28vh] overflow-y-auto">
        <span>{message || "..."}</span>
        <div
          className="absolute -left-2 bottom-2 w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-white border-b-[1px] border-b-transparent"
        />
      </div>
    </div>
  );
}
