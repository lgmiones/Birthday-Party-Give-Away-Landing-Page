import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Repointed to mirror the real bolderadventurepark.com system: warm
        // near-black sections, a punchy orange-red CTA, and an amber accent
        // for small tags/labels — no more pastel pink/lavender/blue.
        cream: "#FBFAF8",
        brand: {
          50: "#FFF1EC",
          100: "#FFE0D3",
          200: "#FFC0A6",
          300: "#FF9970",
          400: "#FF6B3D",
          500: "#FF4B1F",
          600: "#E63C12",
          700: "#BE300E",
        },
        gold: {
          300: "#FFD27A",
          500: "#F2A81D",
        },
        night: {
          DEFAULT: "#131315",
          800: "#1C1C1F",
          900: "#0F0F11",
          950: "#08080A",
        },
        cta: {
          DEFAULT: "#FF4B1F",
          hover: "#E63C12",
          light: "#FFE0D3",
        },
        ink: {
          DEFAULT: "#16161A",
          light: "#55555C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(10, 10, 12, 0.18)",
        card: "0 8px 24px -8px rgba(10, 10, 12, 0.14)",
        "card-hover": "0 16px 36px -12px rgba(10, 10, 12, 0.22)",
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
