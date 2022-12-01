/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
      colors: {
        blackbg: "#282C33",
        graybg: "#ABB2BF",
        greenbg: "#98C379",
      },
    },
  },
  plugins: [],
};
