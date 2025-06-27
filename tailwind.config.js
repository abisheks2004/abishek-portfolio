/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Includes all React files
  ],
  theme: {
    extend: {
   animation: {
    fadeIn: "fadeIn 2s ease-in-out forwards",
    flicker: "flicker 3s linear infinite",
    binaryRain: "binaryRain 20s linear infinite",
   },
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 0.1 },
    },
    flicker: {
      "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: 1 },
      "20%, 22%, 24%, 55%": { opacity: 0.4 },
    },
    binaryRain: {
      "0%": { transform: "translateY(-100%)" },
      "100%": { transform: "translateY(100%)" },
    },
  },
}
  },
  plugins: [],
}
