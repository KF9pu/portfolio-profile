/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
        quinary: "var(--color-quinary)",
      },
    },
    keyframes: {
      open: {
        "0%": {
          height: "0",
        },
        "100%": {
          height: "500px",
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
          display: "flex",
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
