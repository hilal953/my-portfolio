import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f5f2eb",
        primary: "#1a1a1a",
        secondary: "#6b6b6b",
        divider: "#e0dcd4",
        "dark-bg": "#0a0a0a",
        "dark-surface": "#121212",
        "dark-border": "#ffffff1a",
      },
    },
  },
  plugins: [],
};

export default config;
