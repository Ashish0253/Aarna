/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#190e67",
        secondary: "#1ebaba",
      },
      fontFamily: {
        body: "'Nunito Sans', sans-serif",
        temp: ["Nunito"],
      },
    },
  },
  plugins: [],
};
