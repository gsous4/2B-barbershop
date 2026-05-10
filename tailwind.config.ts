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
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C96A",
          dark: "#9A7A30",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          100: "#111111",
          200: "#1A1A1A",
          300: "#222222",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-barlow)", "sans-serif"],
        mono: ["var(--font-bebas)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-up": "slideUp 0.8s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
