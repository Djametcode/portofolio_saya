/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        montserat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        person: "url('/bg.png')",
      },
    },
  },
};
