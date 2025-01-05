import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#335CFF",
          red: "#EA5555",
          dark: "#0E121B",
        },
        secondary: {
          "dark-gray": "#2B2C37",
          "light-gray": "#CACFD8",
          gray: "#828FA3",
        },
        tetiary: {
          "white-space": "#F3F5F8",
          "light-red": "#FF9898",
          "semi-dark": "#525866",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
