'use strict';
import type { Config } from 'tailwindcss';
import type { HeroUIPluginConfig } from '@heroui/theme';

import {
  _generateContent,
  _generatePlugins,
  _generateTheme,
} from './_internal';

/** 
 * Function to configuration tailwindcss
 * 
 * Pre-installed settings for HeroUI and MaiUI
 * 
 * @example
 * 'use strict'
 * const { maiUIConfig } = require('@shiraya-ma/mai-ui/setup');
 * 
 * module.exports = maiUIConfig();
 * 
 * @example
 * 'use strict';
 * const { maiui, maiUIConfig } = require('@shiraya-ma/mai-ui');
 * 
 * module.exports = maiUIConfig({
 *    // tailwindcss configs...
 * }, {
 *    // HeroUI configs...
 *    layout: {},
 *    themes: {
 *      yourTheme: {}
 *    }
 * });
*/
export function maiUIConfig (userConfig?: Partial<Config>, heroUIPluginConfig?: HeroUIPluginConfig): Config {
  const {
    content:  userContent,
    darkMode: userDarkMode,
    theme:    userTheme,
    plugins:  userPlugin,
    ...userConfigProps
  } = userConfig 
  || {
    content:  undefined,
    darkMode: undefined,
    theme:    undefined,
    plugins:  []
  };

  const content = _generateContent(userContent || []);
  const darkMode = userDarkMode || ['class'];
  const theme = _generateTheme(userTheme);
  const plugins = _generatePlugins(userPlugin);
  
  const _config: Config = {
    content,
    darkMode,
    theme,
    plugins: _generatePlugins(plugins, heroUIPluginConfig),
    ...userConfigProps
  };

  return _config;
};
