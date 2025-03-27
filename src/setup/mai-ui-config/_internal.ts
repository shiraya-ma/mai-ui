'use strict';
import type { ContentConfig, CustomThemeConfig, PluginsConfig } from 'tailwindcss/types/config';
import type { HeroUIPluginConfig } from '@heroui/theme';
import Mai from '@shiraya-ma/mai-colors';

import { maiFonts } from '../../core/mai-fonts';
import { maiui } from '../mai-ui-plugin';

/**
 * @internal
 */
export function _generateContent (userContent: ContentConfig): ContentConfig {
  return [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,scss,sass}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shiraya-ma/mai-ui/**/*.{js,ts,jsx,tsx}",
    ...(userContent as string[])
  ];
};

/**
 * @internal
 */
export function _generateExtend (userExtend: Partial<CustomThemeConfig> = {}): Partial<CustomThemeConfig> {
  const { colors: userColors, fontFamily: userFontFamilies, ..._userExtend } = userExtend;

  const colors = { ...Mai.colors, ...userColors };
  const fontFamily = { ...maiFonts, ...userFontFamilies };

  const extend: Partial<CustomThemeConfig> = {
    colors,
    fontFamily,
    ..._userExtend
  };

  return extend;
};

/**
 * @internal
 */
export function _generatePlugins (userPlugin: Partial<PluginsConfig> = [], heroUIPluginConfig?: HeroUIPluginConfig): Partial<PluginsConfig> {
  return [
    maiui(heroUIPluginConfig),
    ...userPlugin
  ];
};

/**
 * @internal
 */
export function _generateTheme (userTheme: Partial<CustomThemeConfig> = {}): Partial<CustomThemeConfig> {
  const { userExtend, ..._userTheme } = userTheme;

  const theme: Partial<CustomThemeConfig> = {
    extend: _generateExtend(userExtend),
    ..._userTheme
  };
  
  return theme;
};
