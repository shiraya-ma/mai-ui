'use strict';
import { describe, expect, it } from 'bun:test';
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import deepmerge from 'deepmerge';
import Color from 'color';
import Mai from '@shiraya-ma/mai-colors';

import { type HeroUIPluginConfig } from '@heroui/react'
import { maiui as maiuiPlugin } from './mai-ui-plugin';

describe('maiui', () => {
  const maiui = async (maiuiConfig: HeroUIPluginConfig, name: string) => {
    const darkConfig  = deepmerge<HeroUIPluginConfig>(maiuiConfig, { defaultTheme: 'dark' });
    const lightConfig = deepmerge<HeroUIPluginConfig>(maiuiConfig, { defaultTheme: 'light' });

    const processCSS = async (config: HeroUIPluginConfig, name: string) => {
      const inputCSS = [
        `/* ${name} */`,
        `@tailwind base;`,
        `@tailwind components;`,
        `@tailwind utilities;`,
      ].join('\n');

      const tailwindcssResult = tailwindcss({
        content: [`./src/**.{js,ts,jsx,tsx}`],
        plugins: [maiuiPlugin(config)],
      });
      const autoprefixerResult = autoprefixer();

      const postcssResult = postcss([tailwindcssResult, autoprefixerResult,]);
      const processer = await postcssResult.process(inputCSS, { from: undefined });
      const css = processer.css;
      return css;
    };

    const result = {
      darkCSS : await processCSS(darkConfig, `${name} dark`),
      lightCSS: await processCSS(lightConfig, `${name} light`),
    };

    return result;
  };

  const genRegExp = (color: string, hex: string) => {
    const [h, s, l] = Color(hex).hsl().round(2).array()

    return new RegExp(`--heroui-${color}: ${h} ${s}% ${l}%;`);
  };

  const themeRegs = {
    dark: /color-scheme: dark[^}]*\}/s,
    light: /color-scheme: light[^}]*\}/s,
  };

  it('should handle empty custom configuration', async () => {
    const { darkCSS, lightCSS } = await maiui({}, 'should handle empty custom configuration');
  
    // light theme
    const light = lightCSS.match(themeRegs.light)![0];
    expect(light).not.toBeUndefined();
    expect(light).toMatch(genRegExp('background', '#fff'));
    expect(light).toMatch(genRegExp('foreground', '#000'));

    expect(light).toMatch(genRegExp('primary-50',  Mai.colors.mint[50]));
    expect(light).toMatch(genRegExp('primary-100', Mai.colors.mint[100]));
    expect(light).toMatch(genRegExp('primary-200', Mai.colors.mint[200]));
    expect(light).toMatch(genRegExp('primary-300', Mai.colors.mint[300]));
    expect(light).toMatch(genRegExp('primary-400', Mai.colors.mint[400]));
    expect(light).toMatch(genRegExp('primary-500', Mai.colors.mint[500]));
    expect(light).toMatch(genRegExp('primary-600', Mai.colors.mint[600]));
    expect(light).toMatch(genRegExp('primary-700', Mai.colors.mint[700]));
    expect(light).toMatch(genRegExp('primary-800', Mai.colors.mint[800]));
    expect(light).toMatch(genRegExp('primary-900', Mai.colors.mint[900]));
    expect(light).toMatch(genRegExp('primary-foreground', '#fff'));
    expect(light).toMatch(genRegExp('primary', Mai.colors.mint[300]));

    expect(light).toMatch(genRegExp('secondary-50',  Mai.colors.chocolate[50]));
    expect(light).toMatch(genRegExp('secondary-100', Mai.colors.chocolate[100]));
    expect(light).toMatch(genRegExp('secondary-200', Mai.colors.chocolate[200]));
    expect(light).toMatch(genRegExp('secondary-300', Mai.colors.chocolate[300]));
    expect(light).toMatch(genRegExp('secondary-400', Mai.colors.chocolate[400]));
    expect(light).toMatch(genRegExp('secondary-500', Mai.colors.chocolate[500]));
    expect(light).toMatch(genRegExp('secondary-600', Mai.colors.chocolate[600]));
    expect(light).toMatch(genRegExp('secondary-700', Mai.colors.chocolate[700]));
    expect(light).toMatch(genRegExp('secondary-800', Mai.colors.chocolate[800]));
    expect(light).toMatch(genRegExp('secondary-900', Mai.colors.chocolate[900]));
    expect(light).toMatch(genRegExp('secondary-foreground', '#fff'));
    expect(light).toMatch(genRegExp('secondary', Mai.colors.chocolate[400]));

    expect(light).toMatch(genRegExp('success-50',  Mai.colors.cider[50]));
    expect(light).toMatch(genRegExp('success-100', Mai.colors.cider[100]));
    expect(light).toMatch(genRegExp('success-200', Mai.colors.cider[200]));
    expect(light).toMatch(genRegExp('success-300', Mai.colors.cider[300]));
    expect(light).toMatch(genRegExp('success-400', Mai.colors.cider[400]));
    expect(light).toMatch(genRegExp('success-500', Mai.colors.cider[500]));
    expect(light).toMatch(genRegExp('success-600', Mai.colors.cider[600]));
    expect(light).toMatch(genRegExp('success-700', Mai.colors.cider[700]));
    expect(light).toMatch(genRegExp('success-800', Mai.colors.cider[800]));
    expect(light).toMatch(genRegExp('success-900', Mai.colors.cider[900]));
    expect(light).toMatch(genRegExp('success-foreground', '#fff'));
    expect(light).toMatch(genRegExp('success', Mai.colors.cider[300]));

    expect(light).toMatch(genRegExp('danger-50',  Mai.colors.strawberry[50]));
    expect(light).toMatch(genRegExp('danger-100', Mai.colors.strawberry[100]));
    expect(light).toMatch(genRegExp('danger-200', Mai.colors.strawberry[200]));
    expect(light).toMatch(genRegExp('danger-300', Mai.colors.strawberry[300]));
    expect(light).toMatch(genRegExp('danger-400', Mai.colors.strawberry[400]));
    expect(light).toMatch(genRegExp('danger-500', Mai.colors.strawberry[500]));
    expect(light).toMatch(genRegExp('danger-600', Mai.colors.strawberry[600]));
    expect(light).toMatch(genRegExp('danger-700', Mai.colors.strawberry[700]));
    expect(light).toMatch(genRegExp('danger-800', Mai.colors.strawberry[800]));
    expect(light).toMatch(genRegExp('danger-900', Mai.colors.strawberry[900]));
    expect(light).toMatch(genRegExp('danger-foreground', '#fff'));
    expect(light).toMatch(genRegExp('danger', Mai.colors.strawberry[300]));

    expect(light).toMatch(genRegExp('warning-50',  Mai.colors.citrus[50]));
    expect(light).toMatch(genRegExp('warning-100', Mai.colors.citrus[100]));
    expect(light).toMatch(genRegExp('warning-200', Mai.colors.citrus[200]));
    expect(light).toMatch(genRegExp('warning-300', Mai.colors.citrus[300]));
    expect(light).toMatch(genRegExp('warning-400', Mai.colors.citrus[400]));
    expect(light).toMatch(genRegExp('warning-500', Mai.colors.citrus[500]));
    expect(light).toMatch(genRegExp('warning-600', Mai.colors.citrus[600]));
    expect(light).toMatch(genRegExp('warning-700', Mai.colors.citrus[700]));
    expect(light).toMatch(genRegExp('warning-800', Mai.colors.citrus[800]));
    expect(light).toMatch(genRegExp('warning-900', Mai.colors.citrus[900]));
    expect(light).toMatch(genRegExp('warning-foreground', '#000'));
    expect(light).toMatch(genRegExp('warning', Mai.colors.citrus[400]));

    // dark theme
    const dark = darkCSS.match(themeRegs.dark)![0];
    expect(dark).not.toBeUndefined();
    expect(dark).toMatch(genRegExp('background', '#1F2937'));
    expect(dark).toMatch(genRegExp('foreground', '#fff'));

    expect(dark).toMatch(genRegExp('primary-50',  Mai.colors.mint[50]));
    expect(dark).toMatch(genRegExp('primary-100', Mai.colors.mint[100]));
    expect(dark).toMatch(genRegExp('primary-200', Mai.colors.mint[200]));
    expect(dark).toMatch(genRegExp('primary-300', Mai.colors.mint[300]));
    expect(dark).toMatch(genRegExp('primary-400', Mai.colors.mint[400]));
    expect(dark).toMatch(genRegExp('primary-500', Mai.colors.mint[500]));
    expect(dark).toMatch(genRegExp('primary-600', Mai.colors.mint[600]));
    expect(dark).toMatch(genRegExp('primary-700', Mai.colors.mint[700]));
    expect(dark).toMatch(genRegExp('primary-800', Mai.colors.mint[800]));
    expect(dark).toMatch(genRegExp('primary-900', Mai.colors.mint[900]));
    expect(dark).toMatch(genRegExp('primary-foreground', '#fff'));
    expect(dark).toMatch(genRegExp('primary', Mai.colors.mint[300]));

    expect(dark).toMatch(genRegExp('secondary-50',  Mai.colors.chocolate[50]));
    expect(dark).toMatch(genRegExp('secondary-100', Mai.colors.chocolate[100]));
    expect(dark).toMatch(genRegExp('secondary-200', Mai.colors.chocolate[200]));
    expect(dark).toMatch(genRegExp('secondary-300', Mai.colors.chocolate[300]));
    expect(dark).toMatch(genRegExp('secondary-400', Mai.colors.chocolate[400]));
    expect(dark).toMatch(genRegExp('secondary-500', Mai.colors.chocolate[500]));
    expect(dark).toMatch(genRegExp('secondary-600', Mai.colors.chocolate[600]));
    expect(dark).toMatch(genRegExp('secondary-700', Mai.colors.chocolate[700]));
    expect(dark).toMatch(genRegExp('secondary-800', Mai.colors.chocolate[800]));
    expect(dark).toMatch(genRegExp('secondary-900', Mai.colors.chocolate[900]));
    expect(dark).toMatch(genRegExp('secondary-foreground', '#fff'));
    expect(dark).toMatch(genRegExp('secondary', Mai.colors.chocolate[400]));

    expect(dark).toMatch(genRegExp('success-50',  Mai.colors.cider[50]));
    expect(dark).toMatch(genRegExp('success-100', Mai.colors.cider[100]));
    expect(dark).toMatch(genRegExp('success-200', Mai.colors.cider[200]));
    expect(dark).toMatch(genRegExp('success-300', Mai.colors.cider[300]));
    expect(dark).toMatch(genRegExp('success-400', Mai.colors.cider[400]));
    expect(dark).toMatch(genRegExp('success-500', Mai.colors.cider[500]));
    expect(dark).toMatch(genRegExp('success-600', Mai.colors.cider[600]));
    expect(dark).toMatch(genRegExp('success-700', Mai.colors.cider[700]));
    expect(dark).toMatch(genRegExp('success-800', Mai.colors.cider[800]));
    expect(dark).toMatch(genRegExp('success-900', Mai.colors.cider[900]));
    expect(dark).toMatch(genRegExp('success-foreground', '#fff'));
    expect(dark).toMatch(genRegExp('success', Mai.colors.cider[300]));

    expect(dark).toMatch(genRegExp('danger-50',  Mai.colors.strawberry[50]));
    expect(dark).toMatch(genRegExp('danger-100', Mai.colors.strawberry[100]));
    expect(dark).toMatch(genRegExp('danger-200', Mai.colors.strawberry[200]));
    expect(dark).toMatch(genRegExp('danger-300', Mai.colors.strawberry[300]));
    expect(dark).toMatch(genRegExp('danger-400', Mai.colors.strawberry[400]));
    expect(dark).toMatch(genRegExp('danger-500', Mai.colors.strawberry[500]));
    expect(dark).toMatch(genRegExp('danger-600', Mai.colors.strawberry[600]));
    expect(dark).toMatch(genRegExp('danger-700', Mai.colors.strawberry[700]));
    expect(dark).toMatch(genRegExp('danger-800', Mai.colors.strawberry[800]));
    expect(dark).toMatch(genRegExp('danger-900', Mai.colors.strawberry[900]));
    expect(dark).toMatch(genRegExp('danger-foreground', '#fff'));
    expect(dark).toMatch(genRegExp('danger', Mai.colors.strawberry[300]));

    expect(dark).toMatch(genRegExp('warning-50',  Mai.colors.citrus[50]));
    expect(dark).toMatch(genRegExp('warning-100', Mai.colors.citrus[100]));
    expect(dark).toMatch(genRegExp('warning-200', Mai.colors.citrus[200]));
    expect(dark).toMatch(genRegExp('warning-300', Mai.colors.citrus[300]));
    expect(dark).toMatch(genRegExp('warning-400', Mai.colors.citrus[400]));
    expect(dark).toMatch(genRegExp('warning-500', Mai.colors.citrus[500]));
    expect(dark).toMatch(genRegExp('warning-600', Mai.colors.citrus[600]));
    expect(dark).toMatch(genRegExp('warning-700', Mai.colors.citrus[700]));
    expect(dark).toMatch(genRegExp('warning-800', Mai.colors.citrus[800]));
    expect(dark).toMatch(genRegExp('warning-900', Mai.colors.citrus[900]));
    expect(dark).toMatch(genRegExp('warning-foreground', '#000'));
    expect(dark).toMatch(genRegExp('warning', Mai.colors.citrus[400]));
  });

  it('should return a HeroUI configuration with default values when no config is provided', async () => {
    const {
      darkCSS,
      lightCSS
    } = await maiui({}, 'should return a HeroUI configuration with default values when no config is provided');

    // light theme
    const light = lightCSS.match(themeRegs.light)![0];
    expect(light).not.toBeUndefined();
    expect(light).toMatch(genRegExp('background', '#fff'));

    expect(light).toMatch(genRegExp('primary-50',  Mai.colors.mint[50]));
    expect(light).toMatch(genRegExp('primary-100', Mai.colors.mint[100]));
    expect(light).toMatch(genRegExp('primary-200', Mai.colors.mint[200]));
    expect(light).toMatch(genRegExp('primary-300', Mai.colors.mint[300]));
    expect(light).toMatch(genRegExp('primary-400', Mai.colors.mint[400]));
    expect(light).toMatch(genRegExp('primary-500', Mai.colors.mint[500]));
    expect(light).toMatch(genRegExp('primary-600', Mai.colors.mint[600]));
    expect(light).toMatch(genRegExp('primary-700', Mai.colors.mint[700]));
    expect(light).toMatch(genRegExp('primary-800', Mai.colors.mint[800]));
    expect(light).toMatch(genRegExp('primary-900', Mai.colors.mint[900]));
    expect(light).toMatch(genRegExp('primary-foreground', '#fff'));
    expect(light).toMatch(genRegExp('primary', Mai.colors.mint[300]));

    expect(light).toMatch(genRegExp('secondary-50',  Mai.colors.chocolate[50]));
    expect(light).toMatch(genRegExp('secondary-100', Mai.colors.chocolate[100]));
    expect(light).toMatch(genRegExp('secondary-200', Mai.colors.chocolate[200]));
    expect(light).toMatch(genRegExp('secondary-300', Mai.colors.chocolate[300]));
    expect(light).toMatch(genRegExp('secondary-400', Mai.colors.chocolate[400]));
    expect(light).toMatch(genRegExp('secondary-500', Mai.colors.chocolate[500]));
    expect(light).toMatch(genRegExp('secondary-600', Mai.colors.chocolate[600]));
    expect(light).toMatch(genRegExp('secondary-700', Mai.colors.chocolate[700]));
    expect(light).toMatch(genRegExp('secondary-800', Mai.colors.chocolate[800]));
    expect(light).toMatch(genRegExp('secondary-900', Mai.colors.chocolate[900]));
    expect(light).toMatch(genRegExp('secondary-foreground', '#fff'));
    expect(light).toMatch(genRegExp('secondary', Mai.colors.chocolate[400]));

    expect(light).toMatch(genRegExp('success-50',  Mai.colors.cider[50]));
    expect(light).toMatch(genRegExp('success-100', Mai.colors.cider[100]));
    expect(light).toMatch(genRegExp('success-200', Mai.colors.cider[200]));
    expect(light).toMatch(genRegExp('success-300', Mai.colors.cider[300]));
    expect(light).toMatch(genRegExp('success-400', Mai.colors.cider[400]));
    expect(light).toMatch(genRegExp('success-500', Mai.colors.cider[500]));
    expect(light).toMatch(genRegExp('success-600', Mai.colors.cider[600]));
    expect(light).toMatch(genRegExp('success-700', Mai.colors.cider[700]));
    expect(light).toMatch(genRegExp('success-800', Mai.colors.cider[800]));
    expect(light).toMatch(genRegExp('success-900', Mai.colors.cider[900]));
    expect(light).toMatch(genRegExp('success-foreground', '#fff'));
    expect(light).toMatch(genRegExp('success', Mai.colors.cider[300]));

    expect(light).toMatch(genRegExp('danger-50',  Mai.colors.strawberry[50]));
    expect(light).toMatch(genRegExp('danger-100', Mai.colors.strawberry[100]));
    expect(light).toMatch(genRegExp('danger-200', Mai.colors.strawberry[200]));
    expect(light).toMatch(genRegExp('danger-300', Mai.colors.strawberry[300]));
    expect(light).toMatch(genRegExp('danger-400', Mai.colors.strawberry[400]));
    expect(light).toMatch(genRegExp('danger-500', Mai.colors.strawberry[500]));
    expect(light).toMatch(genRegExp('danger-600', Mai.colors.strawberry[600]));
    expect(light).toMatch(genRegExp('danger-700', Mai.colors.strawberry[700]));
    expect(light).toMatch(genRegExp('danger-800', Mai.colors.strawberry[800]));
    expect(light).toMatch(genRegExp('danger-900', Mai.colors.strawberry[900]));
    expect(light).toMatch(genRegExp('danger-foreground', '#fff'));
    expect(light).toMatch(genRegExp('danger', Mai.colors.strawberry[300]));

    expect(light).toMatch(genRegExp('warning-50',  Mai.colors.citrus[50]));
    expect(light).toMatch(genRegExp('warning-100', Mai.colors.citrus[100]));
    expect(light).toMatch(genRegExp('warning-200', Mai.colors.citrus[200]));
    expect(light).toMatch(genRegExp('warning-300', Mai.colors.citrus[300]));
    expect(light).toMatch(genRegExp('warning-400', Mai.colors.citrus[400]));
    expect(light).toMatch(genRegExp('warning-500', Mai.colors.citrus[500]));
    expect(light).toMatch(genRegExp('warning-600', Mai.colors.citrus[600]));
    expect(light).toMatch(genRegExp('warning-700', Mai.colors.citrus[700]));
    expect(light).toMatch(genRegExp('warning-800', Mai.colors.citrus[800]));
    expect(light).toMatch(genRegExp('warning-900', Mai.colors.citrus[900]));
    expect(light).toMatch(genRegExp('warning-foreground', '#000'));
    expect(light).toMatch(genRegExp('warning', Mai.colors.citrus[400]));

    // dark theme
    const dark = darkCSS.match(themeRegs.dark)![0];
    expect(dark).not.toBeUndefined();
    expect(dark).toMatch(genRegExp('background', '#1F2937'));

    expect(dark).toMatch(genRegExp('primary-50',  Mai.colors.mint[50]));
    expect(dark).toMatch(genRegExp('primary-100', Mai.colors.mint[100]));
    expect(dark).toMatch(genRegExp('primary-200', Mai.colors.mint[200]));
    expect(dark).toMatch(genRegExp('primary-300', Mai.colors.mint[300]));
    expect(dark).toMatch(genRegExp('primary-400', Mai.colors.mint[400]));
    expect(dark).toMatch(genRegExp('primary-500', Mai.colors.mint[500]));
    expect(dark).toMatch(genRegExp('primary-600', Mai.colors.mint[600]));
    expect(dark).toMatch(genRegExp('primary-700', Mai.colors.mint[700]));
    expect(dark).toMatch(genRegExp('primary-800', Mai.colors.mint[800]));
    expect(dark).toMatch(genRegExp('primary-900', Mai.colors.mint[900]));
    expect(dark).toMatch(genRegExp('primary-foreground', '#fff'));
    expect(dark).toMatch(genRegExp('primary', Mai.colors.mint[300]));

    expect(dark).toMatch(genRegExp('secondary-50',  Mai.colors.chocolate[50]));
    expect(dark).toMatch(genRegExp('secondary-100', Mai.colors.chocolate[100]));
    expect(dark).toMatch(genRegExp('secondary-200', Mai.colors.chocolate[200]));
    expect(dark).toMatch(genRegExp('secondary-300', Mai.colors.chocolate[300]));
    expect(dark).toMatch(genRegExp('secondary-400', Mai.colors.chocolate[400]));
    expect(dark).toMatch(genRegExp('secondary-500', Mai.colors.chocolate[500]));
    expect(dark).toMatch(genRegExp('secondary-600', Mai.colors.chocolate[600]));
    expect(dark).toMatch(genRegExp('secondary-700', Mai.colors.chocolate[700]));
    expect(dark).toMatch(genRegExp('secondary-800', Mai.colors.chocolate[800]));
    expect(dark).toMatch(genRegExp('secondary-900', Mai.colors.chocolate[900]));
    expect(dark).toMatch(genRegExp('secondary-foreground', '#fff'));
    expect(dark).toMatch(genRegExp('secondary', Mai.colors.chocolate[400]));

    expect(dark).toMatch(genRegExp('success-50',  Mai.colors.cider[50]));
    expect(dark).toMatch(genRegExp('success-100', Mai.colors.cider[100]));
    expect(dark).toMatch(genRegExp('success-200', Mai.colors.cider[200]));
    expect(dark).toMatch(genRegExp('success-300', Mai.colors.cider[300]));
    expect(dark).toMatch(genRegExp('success-400', Mai.colors.cider[400]));
    expect(dark).toMatch(genRegExp('success-500', Mai.colors.cider[500]));
    expect(dark).toMatch(genRegExp('success-600', Mai.colors.cider[600]));
    expect(dark).toMatch(genRegExp('success-700', Mai.colors.cider[700]));
    expect(dark).toMatch(genRegExp('success-800', Mai.colors.cider[800]));
    expect(dark).toMatch(genRegExp('success-900', Mai.colors.cider[900]));
    expect(dark).toMatch(genRegExp('success-foreground', '#fff'));
    expect(dark).toMatch(genRegExp('success', Mai.colors.cider[300]));

    expect(dark).toMatch(genRegExp('danger-50',  Mai.colors.strawberry[50]));
    expect(dark).toMatch(genRegExp('danger-100', Mai.colors.strawberry[100]));
    expect(dark).toMatch(genRegExp('danger-200', Mai.colors.strawberry[200]));
    expect(dark).toMatch(genRegExp('danger-300', Mai.colors.strawberry[300]));
    expect(dark).toMatch(genRegExp('danger-400', Mai.colors.strawberry[400]));
    expect(dark).toMatch(genRegExp('danger-500', Mai.colors.strawberry[500]));
    expect(dark).toMatch(genRegExp('danger-600', Mai.colors.strawberry[600]));
    expect(dark).toMatch(genRegExp('danger-700', Mai.colors.strawberry[700]));
    expect(dark).toMatch(genRegExp('danger-800', Mai.colors.strawberry[800]));
    expect(dark).toMatch(genRegExp('danger-900', Mai.colors.strawberry[900]));
    expect(dark).toMatch(genRegExp('danger-foreground', '#fff'));
    expect(dark).toMatch(genRegExp('danger', Mai.colors.strawberry[300]));

    expect(dark).toMatch(genRegExp('warning-50',  Mai.colors.citrus[50]));
    expect(dark).toMatch(genRegExp('warning-100', Mai.colors.citrus[100]));
    expect(dark).toMatch(genRegExp('warning-200', Mai.colors.citrus[200]));
    expect(dark).toMatch(genRegExp('warning-300', Mai.colors.citrus[300]));
    expect(dark).toMatch(genRegExp('warning-400', Mai.colors.citrus[400]));
    expect(dark).toMatch(genRegExp('warning-500', Mai.colors.citrus[500]));
    expect(dark).toMatch(genRegExp('warning-600', Mai.colors.citrus[600]));
    expect(dark).toMatch(genRegExp('warning-700', Mai.colors.citrus[700]));
    expect(dark).toMatch(genRegExp('warning-800', Mai.colors.citrus[800]));
    expect(dark).toMatch(genRegExp('warning-900', Mai.colors.citrus[900]));
    expect(dark).toMatch(genRegExp('warning-foreground', '#000'));
    expect(dark).toMatch(genRegExp('warning', Mai.colors.citrus[400]));
  });

  it('should merge custom configuration with default values', async () => {
    const {
      darkCSS,
      lightCSS,
    } = await maiui({
      themes: {
        light: {
          colors: {
            primary: {
              50:  '#000',
              100: '#000',
              200: '#000',
              300: '#000',
              400: '#000',
              500: '#000',
              600: '#000',
              700: '#000',
              800: '#000',
              900: '#000',
              foreground: "#fff",
              DEFAULT: "#000",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              50:  '#fff',
              100: '#fff',
              200: '#fff',
              300: '#fff',
              400: '#fff',
              500: '#fff',
              600: '#fff',
              700: '#fff',
              800: '#fff',
              900: '#fff',
              foreground: "#000",
              DEFAULT: "#fff",
            },
          },
        },
      },
    }, 'should merge custom configuration with default values');

    // light theme
    const light = lightCSS.match(themeRegs.light)![0];
    expect(light).not.toBeUndefined();
    expect(light).toMatch(genRegExp('primary-50',  '#000'));
    expect(light).toMatch(genRegExp('primary-100', '#000'));
    expect(light).toMatch(genRegExp('primary-200', '#000'));
    expect(light).toMatch(genRegExp('primary-300', '#000'));
    expect(light).toMatch(genRegExp('primary-400', '#000'));
    expect(light).toMatch(genRegExp('primary-500', '#000'));
    expect(light).toMatch(genRegExp('primary-600', '#000'));
    expect(light).toMatch(genRegExp('primary-700', '#000'));
    expect(light).toMatch(genRegExp('primary-800', '#000'));
    expect(light).toMatch(genRegExp('primary-900', '#000'));
    expect(light).toMatch(genRegExp('primary',     '#000'));
    expect(light).toMatch(genRegExp('primary-foreground', '#fff'));

    // dark theme
    const dark = darkCSS.match(themeRegs.dark)![0];
    expect(dark).not.toBeUndefined();
    expect(dark).toMatch(genRegExp('primary-50',  '#fff'));
    expect(dark).toMatch(genRegExp('primary-100', '#fff'));
    expect(dark).toMatch(genRegExp('primary-200', '#fff'));
    expect(dark).toMatch(genRegExp('primary-300', '#fff'));
    expect(dark).toMatch(genRegExp('primary-400', '#fff'));
    expect(dark).toMatch(genRegExp('primary-500', '#fff'));
    expect(dark).toMatch(genRegExp('primary-600', '#fff'));
    expect(dark).toMatch(genRegExp('primary-700', '#fff'));
    expect(dark).toMatch(genRegExp('primary-800', '#fff'));
    expect(dark).toMatch(genRegExp('primary-900', '#fff'));
    expect(dark).toMatch(genRegExp('primary',     '#fff'));
    expect(dark).toMatch(genRegExp('primary-foreground', '#000'));
  });
});
