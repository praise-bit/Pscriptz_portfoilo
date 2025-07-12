/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ffaa",
        background: "#0f0f0f",
        text: "#f1f1f1",
      },
    },
  },
  plugins: [],
};
