import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          bright: "#D4AF37",
          deep: "#A58535",
          pale: "rgba(201,168,76,0.1)",
        },
        deepBlack: "#080808",
        luxuryWhite: "#FAFAFA",
        softIvory: "#F5F2EB",
        lightGray: "#EAEAEA",
        stone: "#33312E",
        taupe: { DEFAULT: "#59544D", light: "#8C857A" },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
        slow: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        reveal: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "fade-up": "fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
