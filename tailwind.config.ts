import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFCF6",
        "party-pink": {
          50: "#FFF3F7",
          100: "#FFE3ED",
          200: "#FFC7DB",
          300: "#FF9EC0",
          400: "#FF7AA8",
          500: "#F0568C",
        },
        "party-blue": {
          50: "#EFFAFF",
          100: "#DBF3FF",
          200: "#B7E7FF",
          300: "#8CD8FF",
          400: "#5CC4F5",
        },
        "party-lavender": {
          50: "#F6F2FF",
          100: "#EBE0FF",
          200: "#D8C6FF",
          300: "#BFA3FF",
          400: "#A683F5",
        },
        "party-yellow": {
          50: "#FFFBEB",
          100: "#FFF3C4",
          200: "#FFE68A",
          300: "#FFD65C",
        },
        "party-mint": {
          50: "#EFFFF8",
          100: "#D6FFEE",
          200: "#ADF5D9",
        },
        cta: {
          DEFAULT: "#FF5D6C",
          hover: "#F0404F",
          light: "#FFE3E5",
        },
        ink: {
          DEFAULT: "#3A2E45",
          light: "#6B5D77",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(58, 46, 69, 0.15)",
        card: "0 8px 24px -8px rgba(58, 46, 69, 0.12)",
        "card-hover": "0 16px 36px -12px rgba(58, 46, 69, 0.2)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(-3deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        wiggle: "wiggle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
