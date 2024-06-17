'use strict';

/** 
 * tailwind用のカラーセット
 * 
 * @example
 * 'use strict'
 * const maiui = require('@shiraya-ma/mai-ui').maiui;
 * const maiColors = require('@shiraya-ma/mai-ui').maiColor;
 * 
 * module.exports = {
 *  content: [],
 *  theme: {
 *      extend: {
 *          colors: maiColors
 *      }
 *  }
 *  plugins: [maiui()]
 * };
*/
export const maiColors = {
    chocolate: {
        50:  "#fce6e4",
        100: "#e1c4c5",
        200: "#c3a0a2",
        300: "#a67b7d",
        400: "#916063",
        500: "#7c454a",
        600: "#6f3d42",
        700: "#5f3238",
        800: "#4f272f",
        900: "#3e1a23",
    },
    mint: {
        50:  "#ddefed",
        100: "#aad8d2",
        200: "#73bfb5",
        300: "#3aa698",
        400: "#009383",
        500: "#0a3933",
        600: "#007563",
        700: "#006655",
        800: "#005647",
        900: "#003b2c",
    }
};

export default maiColors;
