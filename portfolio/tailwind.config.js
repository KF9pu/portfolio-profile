/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
      "theme-default": {
        primary: "rgba(27, 28, 29, 1)",
        secondary: "rgba(215, 215, 215, 1)",
        tertiary: "rgba(255, 255, 255, 1)",
        quaternary: "rgba(213, 213, 213, 1)",
        quinary: "rgba(255, 87, 51, 1)",
      },
      "theme-light-red": {
        primary: "rgba(255, 112, 112, 1)",
        secondary: "rgba(255, 226, 226, 1)",
        tertiary: "rgba(255, 182, 182, 1)",
        quaternary: "rgba(255, 214, 214, 1)",
        quinary: "rgba(255, 139, 139, 1)",
      },
      "theme-light-blue": {
        primary: "rgba(120, 188, 255, 1)",
        secondary: "rgba(214, 228, 255, 1)",
        tertiary: "rgba(255, 182, 182, 1)",
        quaternary: "rgba(255, 214, 214, 1)",
        quinary: "rgba(255, 139, 139, 1)",
      },
      "theme-light-green": {
        primary: "rgba(102, 204, 102, 1)",
        secondary: "rgba(204, 255, 204, 1)",
        tertiary: "rgba(255, 204, 153, 1)",
        quaternary: "rgba(229, 255, 229, 1)",
        quinary: "rgba(76, 153, 76, 1)",
      },
      "theme-light-pink": {
        primary: "rgba(255, 153, 204, 1)",
        secondary: "rgba(255, 204, 229, 1)",
        tertiary: "rgba(255, 204, 229, 1)",
        quaternary: "rgba(255, 229, 240, 1)",
        quinary: "rgba(255, 102, 178, 1)",
      },

      "theme-dark-red": {
        primary: "rgba(153, 0, 0, 1)",
        secondary: "rgba(255, 51, 51, 1)",
        tertiary: "rgba(204, 0, 0, 1)",
        quaternary: "rgba(255, 102, 102, 1)",
        quinary: "rgba(102, 0, 0, 1)",
      },
      "theme-dark-green": {
        primary: "rgba(51, 102, 0, 1)",
        secondary: "rgba(128, 179, 89, 1)",
        tertiary: "rgba(0, 51, 0, 1)",
        quaternary: "rgba(153, 204, 102, 1)",
        quinary: "rgba(0, 25, 0, 1)",
      },

      "theme-dark-blue": {
        primary: "rgba(0, 0, 102, 1)",
        secondary: "rgba(51, 51, 153, 1)",
        tertiary: "rgba(0, 0, 51, 1)",
        quaternary: "rgba(102, 102, 204, 1)",
        quinary: "rgba(0, 0, 25, 1)",
      },
      "theme-dark-pupple": {
        primary: "rgba(102, 0, 102, 1)",
        secondary: "rgba(153, 51, 153,1)",
        tertiary: "rgba(51, 0, 51, 1)",
        quaternary: "rgba(204, 102, 204, 1)",
        quinary: "rgba(25, 0, 25, 1)",
      },
      "theme-dark-gold": {
        primary: "rgba(153, 102, 0, 1)",
        secondary: "rgba(204, 153, 51, 1)",
        tertiary: "rgba(102, 68, 0, 1)",
        quaternary: "rgba(255, 204, 102, 1)",
        quinary: "rgba(51, 34, 0, 1)",
      },
    },
  },
  plugins: [],
};
