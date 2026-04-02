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
        navy: {
          DEFAULT: "#022135",
          light: "#0a3a5c",
          dark: "#011525",
        },
        cream: {
          DEFAULT: "#ebdece",
          light: "#f5efe8",
          dark: "#d4c4ad",
        },
        accent: {
          DEFAULT: "#c24040",
          light: "#d45a5a",
          dark: "#a33333",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
