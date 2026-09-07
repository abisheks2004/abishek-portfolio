export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a]">
      {/* Ambient glowing radial backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] md:w-[800px] h-[350px] sm:h-[600px] md:h-[800px] bg-emerald-950/10 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal background code snippet */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-8 md:top-8 md:left-12 max-w-[90%] sm:max-w-[500px] text-emerald-400 font-mono select-none pointer-events-none animate-flicker leading-5 sm:leading-6 text-[10px] sm:text-[11px] md:text-[12px]">
        <code>
          {`> import React from 'react';
> const abi = new Developer("Abishek");
> abi.skills = ["React", "Tailwind", "Vite", "Node.js", "AI"];
> abi.location = "Tamil Nadu, India";
> abi.say("Welcome");
> System.log("Portfolio background initiated...")`}
        </code>
      </div>

      {/* Subtle background matrix rain */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 opacity-20 hidden sm:block">
        <div className="w-full h-full flex flex-wrap animate-binaryRain">
          {Array(40)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="text-emerald-600 font-mono text-[9px] md:text-[11px] opacity-15 leading-4 whitespace-pre-wrap p-1"
              >
                {Array(30).fill("0101").join("\n")}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
