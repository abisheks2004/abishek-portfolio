const CODE_LINES = [
  "> import React from 'react';",
  '> const abi = new Developer("Abishek");',
  '> abi.skills = ["React", "Tailwind", "Vite", "Node.js", "AI"];',
  '> abi.location = "Tamil Nadu, India";',
  '> abi.say("Welcome");',
  '> System.log("Portfolio background initiated...")',
];

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a]">
      {/* Original clean subtle grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Terminal background code snippet - clearly visible and separated after semicolon */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-8 md:top-8 md:left-12 max-w-[92%] sm:max-w-[550px] text-green-400 font-mono select-none pointer-events-none text-[11px] sm:text-xs md:text-sm leading-6 space-y-1 drop-shadow-[0_0_8px_rgba(74,222,128,0.25)]">
        {CODE_LINES.map((line, idx) => (
          <div key={idx} className="whitespace-pre">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
