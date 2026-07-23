/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1F2E22",
          light: "#2E4230",
          dark: "#141E17",
        },
        cream: "#F7F5EF",
        sand: "#EFEAE0",
        clay: "#8C7A63",
      },
      fontFamily: {
        serif: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
      },
    },
  },
  plugins: [],
};
