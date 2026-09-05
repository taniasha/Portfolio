import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030305",
        surface: "#0c0c10",
        surfaceCard: "#111117",
        borderline: "rgba(255, 255, 255, 0.08)",
        borderHover: "rgba(168, 85, 247, 0.5)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
      },
      animation: {
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "rotate-slow": "spin 20s linear infinite",
        "float": "float 5s ease-in-out infinite",
        "shine": "shine 3s ease-in-out infinite",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      boxShadow: {
        glow: "0 0 25px rgba(168, 85, 247, 0.35)",
        "glow-lg": "0 0 40px rgba(236, 72, 153, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
