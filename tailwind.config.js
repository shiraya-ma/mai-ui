'use strict';
const { maiUIConfig } = require('./src/setup');

export default maiUIConfig({
  content: []
}, {
  themes: {
    dark: {
      colors: {
        // background: '#1F2937'
      }
    },
    light: {
      colors: {
        // background: '#fff'
      }
    }
  }
});
