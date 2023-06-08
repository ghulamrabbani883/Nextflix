/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsxdd}",
  ],
  theme: {
    extend: {
      colors: {
        test: "#404040",
      },
    },
  },
  plugins: [],
};
