/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./js/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          "x-light": "#BDBDBD",
          light: "#4f4f4f",
          dark: "#333333",
        },
        gold: {
          DEFAULT: "#fdd05b",
        },
      },
    },
    fontFamily: {
      sans: ['"Space mono"', "sans-serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
