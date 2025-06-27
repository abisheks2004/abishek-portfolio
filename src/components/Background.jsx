import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a]">
      {/* 🧾 Grid Overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 animate-fadeIn"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* 💻 Dev Terminal Style Code */}
      <div className="absolute inset-0 text-green-400 font-mono opacity-10 p-4 sm:p-5 md:p-6 lg:p-10 whitespace-pre-line select-none pointer-events-none animate-flicker leading-4 sm:leading-5 md:leading-6 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]">
        <code>
          {`> import React from 'react';
> const abi = "Web Developer";
> abi.skills = ["React", "Tailwind", "Vite", "Framer Motion"];
> abi.location = "Tamil Nadu, India";
> abi.say("Vanakkam");
> System: Portfolio background initiated...
`}
        </code>
      </div>

      {/* 🌧️ Matrix-style Binary Rain */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="w-full h-full flex flex-wrap animate-binaryRain">
          {Array(80)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="text-green-600 font-mono opacity-5 leading-4 whitespace-pre-wrap p-0.5 sm:p-1 text-[8px] sm:text-[10px] md:text-[12px]"
              >
                {Array(40).fill("01").join("\n")}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
