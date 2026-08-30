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
        background: "#F9F7F4",
        surface: "#FFFFFF",
        primary: "#111111",
        muted: "#666666",
        subtle: "#999999",
        borderline: "#E5E1DB",
        accentSoft: "#EAE6DF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
      },
      animation: {
        "drift-slow": "drift 14s ease-in-out infinite alternate",
        "drift-reverse": "driftReverse 18s ease-in-out infinite alternate",
        "pulse-subtle": "pulseSubtle 2.5s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(30px, 20px) scale(1.08)" },
        },
        driftReverse: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(-25px, -15px) scale(1.05)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "0.8", transform: "scaleY(1.15)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
