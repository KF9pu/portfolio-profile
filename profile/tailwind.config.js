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
      animation: {
        clipShrink: "clipShrink 1s ease-in-out forwards",
        clipShrink1: "clipShrink1 1s ease-in-out forwards",
        clipShrink2: "clipShrink2 1.5s ease-in-out forwards",
        clipShrink3: "clipShrink3 1.6s ease-in-out forwards",
        clipShrink4: "clipShrink4 1.1s ease-in-out forwards",
      },
      keyframes: {
        clipShrink: {
          "0%": { clipPath: "circle(0% at 100% 0)" },
          "100%": { clipPath: "circle(105% at 100% 0)" },
        },
        clipShrink1: {
          "0%": { clipPath: "circle(120% at 0 0)" },
          "100%": { clipPath: "circle(0% at 0 0)" },
        },
        clipShrink2: {
          "0%": { clipPath: "circle(120% at 100% 0)" },
          "100%": { clipPath: "circle(0% at 100% 0)" },
        },
        clipShrink3: {
          "0%": { clipPath: "circle(120% at 0 100%)" },
          "100%": { clipPath: "circle(0% at 0 100%)" },
        },
        clipShrink4: {
          "0%": { clipPath: "circle(120% at 100% 100%)" },
          "100%": { clipPath: "circle(0% at 100% 100%)" },
        },
      },
    },
  },
  plugins: [],
};
