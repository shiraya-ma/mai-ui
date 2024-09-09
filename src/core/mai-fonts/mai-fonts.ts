'use strict';

/** 
 * tailwind用の基本フォントセット
 * 
 * @example
 * 'use strict'
 * const { maiFonts, maiui } = require('@shiraya-ma/mai-ui');
 * 
 * module.exports = {
 *  content: [],
 *  theme: {
 *      fontFamily: {
 *          ...maiFonts
 *      }
 *  }
 *  plugins: [maiui()]
 * };
*/
export const maiFonts = {
    code: [ 'JetBrains Mono', 'monospace' ],
    heading: [ 'Sawarabi Gothic', 'sans-serif' ],
    main: [ 'Sawarabi Mincho', 'serif' ],
};
