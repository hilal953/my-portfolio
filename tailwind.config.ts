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
      animation: {
        "text-gradient": "text-gradient 8s linear infinite",
        "pulse-slow": "pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "text-gradient": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.02", transform: "scale(1)" },
          "50%": { opacity: "0.05", transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
