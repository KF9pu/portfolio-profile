/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      DNF: "DNFBit",
      DNFBladeBold: "DNFBladeBold",
      DNFBladeLight: "DNFBladeLight",
      DNFBladeMedium: "DNFBladeMedium",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
        quinary: "var(--color-quinary)",
      },
    },
  },
  plugins: [],
};
