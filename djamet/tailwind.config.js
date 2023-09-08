/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yss: ["Ysabeau SC", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        concert: ["Concert One", "cursive"],
        candal: ["Candal", "sans-serif"],
      },
      backgroundImage: {
        person: "url('/bg.png')",
      },
    },
  },
};
