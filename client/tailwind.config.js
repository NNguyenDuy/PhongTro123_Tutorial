/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1100': "1100px",
      },
      maxWidth: {
        '1100': "1100px",
      },
      colors: {
        bgColor: "#F5F5F5",
        blueColor: "#1266dd",
        redColor: "#f73859",
        yellowColor: "#febb02",
        greenColor: "#16c784",
      },
      flex: {
        '3': '3 3 0%'
      }
    },
  },
  plugins: [],
}