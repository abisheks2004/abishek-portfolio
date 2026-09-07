import { useEffect, useRef } from "react";

const CODE_LINES = [
  "> import React from 'react';",
  '> const abi = new Developer("Abishek");',
  '> abi.skills = ["React", "Tailwind", "Vite", "Node.js", "AI"];',
  '> abi.location = "Tamil Nadu, India";',
  '> abi.say("Welcome");',
  '> System.log("Portfolio background initiated...")',
];

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 14;
    let columns = Math.max(1, Math.floor(width / fontSize));
    // Stagger drops randomly across screen height so numbers are continuously raining with zero empty gaps
    let drops = Array(columns)
      .fill(0)
      .map(() => Math.floor(Math.random() * (height / fontSize)));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.max(1, Math.floor(width / fontSize));
      drops = Array(columns)
        .fill(0)
        .map(() => Math.floor(Math.random() * (height / fontSize)));
    };

    window.addEventListener("resize", handleResize);

    const chars = ["0", "1"];
    let lastDraw = 0;
    const fpsInterval = 1000 / 24;

    const draw = (now) => {
      animationFrameId = requestAnimationFrame(draw);
      if (now - lastDraw < fpsInterval) return;
      lastDraw = now;

      // Soft fading trail
      ctx.fillStyle = "rgba(10, 10, 10, 0.12)";
      ctx.fillRect(0, 0, width, height);

      // Subtle emerald numbers
      ctx.fillStyle = "rgba(16, 185, 129, 0.15)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Seamless infinite loop without gaps
        if (y > height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 opacity-60"
    />
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a]">
      {/* Ambient glowing radial backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] md:w-[800px] h-[350px] sm:h-[600px] md:h-[800px] bg-emerald-950/10 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal background code snippet - each statement on its own line */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-8 md:top-8 md:left-12 max-w-[92%] sm:max-w-[550px] text-emerald-400/60 font-mono select-none pointer-events-none animate-flicker text-[10px] sm:text-[11px] md:text-[12px] space-y-1">
        {CODE_LINES.map((line, idx) => (
          <div key={idx} className="whitespace-pre">
            {line}
          </div>
        ))}
      </div>

      {/* Seamless infinite binary rain with zero gap */}
      <MatrixRain />
    </div>
  );
}
