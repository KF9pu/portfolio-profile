/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: "#000",
      white: "#eee",
      grayscale: { 1: "#f7fafc", 2: "#edf2f7", 3: "#e2e8f0", 4: "#cbd5e0", 5: "#a0aec0", 6: "#718096", 7: "#4a5568" },
      default: {
        primary: "#212529",
        secondary: "#495057",
        tertiary: "#ADB5BD",
        quaternary: "#DEE2E6",
        quinary: "#F8F9FA",
      },
      "light-red": {
        primary: "#E01E37",
        secondary: "#DA1E37",
        tertiary: "#C71F37",
        quaternary: "#BD1F36",
        quinary: "#B21E35",
      },
      "light-blue": {
        primary: "#ADD7F6",
        secondary: "#87BFFF",
        tertiary: "#3F8EFC",
        quaternary: "#2667FF",
        quinary: "#3B28CC",
      },
      "light-green": {
        primary: "#DDDF00",
        secondary: "#D4D700",
        tertiary: "#BFD200",
        quaternary: "#AACC00",
        quinary: "#80B918",
      },
      "light-pink": {
        primary: "#FFF0F3",
        secondary: "#FFB3C1",
        tertiary: "#FF8FA3",
        quaternary: "#FF758F",
        quinary: "#FF4D6D",
      },

      "dark-red": {
        primary: "#A71E34",
        secondary: "#A11D33",
        tertiary: "#85182A",
        quaternary: "#6E1423",
        quinary: "#641220",
      },
      "dark-green": {
        primary: "#CFE1B9",
        secondary: "#B5C99A",
        tertiary: "#97A97C",
        quaternary: "#87986A",
        quinary: "#718355",
      },

      "dark-blue": {
        primary: "#0466C8",
        secondary: "#0353A4",
        tertiary: "#023E7d",
        quaternary: "#002855",
        quinary: "#011845",
      },
      "dark-pupple": {
        primary: "#E0B1CB",
        secondary: "#BE96C4",
        tertiary: "#9F86C0",
        quaternary: "#5E548E",
        quinary: "#231942",
      },
      "dark-gold": {
        primary: "#9D8A34",
        secondary: "#958332",
        tertiary: "#8E7B2F",
        quaternary: "#7A6729",
        quinary: "#6B5824",
      },
    },
    keyframes: {
      open: {
        "0%": {
          height: "0",
        },
        "100%": {
          height: "300px",
        },
      },
      fadeIn: {
        "0%": {
          display: "none",
        },
        "50%": {
          display: "none",
        },
        "100%": {
          display: "block",
        },
      },
    },
    animation: {
      open: "open 0.3s ease-out forwards",
      fadeIn: "fadeIn 1s ease-out forwards",
    },
  },
  plugins: [],
};
