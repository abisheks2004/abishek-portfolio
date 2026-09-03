export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a]">
@@ -17,29 +15,29 @@

      <div className="absolute inset-0 text-green-400 font-mono opacity-10 p-4 sm:p-5 md:p-6 lg:p-10 whitespace-pre-line select-none pointer-events-none animate-flicker leading-4 sm:leading-5 md:leading-6 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]">
        <code>
          {`> import React from 'react';
> const abi = new Developer("Abishek");
> abi.skills = ["React", "Tailwind", "Vite", "Framer Motion"];
> abi.location = "Tamil Nadu, India";
> abi.say("Welcome");
> System.log("Portfolio background initiated...")`}
        </code>
      </div>

      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="w-full h-full flex flex-wrap animate-binaryRain">
          {Array(80)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="text-green-600 font-mono opacity-5 leading-4 whitespace-pre-wrap p-0.5 sm:p-1 text-[8px] sm:text-[10px] md:text-[12px]"
              >
                {Array(50).fill("0101").join("\n")}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
