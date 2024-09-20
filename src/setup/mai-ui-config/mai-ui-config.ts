'use strict';
import type { Config } from 'tailwindcss';

import { generateContent } from './generate-content';
import { generateTheme } from './generate-theme';
import { generatePlugins } from './generate-plugins';
import { NextUIPluginConfig } from '@nextui-org/react';

/** 
 * tailwind用の設定関数
 * 
 * NextUI、MaiUIに関する設定は組み込み済み
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
 *      content: [],
 * }, {
 *      layout: {},
 *      themes: {
 *          yourTheme: {}
 *      }
 *  });
*/
export function maiUIConfig (userConfig?: Config, nextUIPluginConfig?: NextUIPluginConfig): Config {
    const { content, darkMode, theme, plugins, ..._userConfig } = userConfig? userConfig: { content: [], darkMode: undefined, theme: undefined, plugins: undefined };
    
    const _config: Config = {
        content: generateContent(content),
        darkMode: darkMode? darkMode: ['class'],
        theme: generateTheme(theme),
        plugins: generatePlugins(plugins, nextUIPluginConfig),
        ..._userConfig
    };

    return _config;
};
