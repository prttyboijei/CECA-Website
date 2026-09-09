import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        usl: {
          DEFAULT: "#0033A0",
          dark: "#00256E",
          light: "#EAF0FB",
        },
      },
    },
  },
  plugins: [],
};

export default config;