'use strict';
const { maiColors, maiFonts, maiui } = require('./dist/configs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: maiColors
    },
    fontFamily: maiFonts
  },
  plugins: [
    maiui()
  ],
}
