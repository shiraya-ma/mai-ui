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
    cider: {
        50:  '#e2f1f5',
        100: '#b8dbe5',
        200: '#90c3d4',
        300: '#6aadc6',
        400: '#4b9ec1',
        500: '#2d90bc',
        600: '#2883a3',
        700: '#1e729d',
        800: '#16628a',
        900: '#00446c',
    },
    citrus: {
        50:  '#fdf2e4',
        100: '#fbdebc',
        200: '#f9c892',
        300: '#f6b36b',
        400: '#f4a353',
        500: '#f29441',
        600: '#ed893e',
        700: '#e67b3a',
        800: '#de6d36',
        900: '#d3562f',
    },
    mint: {
        50:  "#ddefed",
        100: "#aad8d2",
        200: "#73bfb5",
        300: "#3aa698",
        400: "#009383",
        500: "#00816f",
        600: "#007563",
        700: "#006655",
        800: "#005647",
        900: "#003b2c",
    },
    strawberry: {
        50:  '#fbeaee',
        100: '#f7cad3',
        200: '#e3949d',
        300: '#d66b77',
        400: '#e04759',
        500: '#e52f42',
        600: '#d62640',
        700: '#c41c39',
        800: '#b81232',
        900: '#a90026',
    },
};

export default maiColors;
