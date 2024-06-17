'use strict';
const maiui = require('./dist/libs/mai-ui/mai-ui.js').maiui;
const maiColors = require('./dist/configs/mai-colors/mai-colors.js').maiColors;

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
  },
  plugins: [
    maiui()
  ],
}
