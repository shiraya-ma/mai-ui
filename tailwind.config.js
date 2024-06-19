'use strict';
const { maiui } = require('./dist/configs/mai-ui/mai-ui.js');
const { maiColors } = require('./dist/configs/mai-colors/mai-colors.js');

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
