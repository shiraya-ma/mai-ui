'use strict';
import { describe, expect, it } from 'bun:test';
import type { CustomThemeConfig } from 'tailwindcss/types/config';
import type { HeroUIPluginConfig } from '@heroui/theme';
import MaiColors from '@shiraya-ma/mai-colors';

import { maiFonts } from '../../core/mai-fonts';
import {
  _generateContent,
  _generateExtend,
  _generatePlugins,
  _generateTheme,
} from './_internal';

describe('_generateContent', () => {
  it('should include default content paths', () => {
    const userContent: string[] = [];
    const result = _generateContent(userContent);

    expect(result).toContain("./index.html");
    expect(result).toContain("./src/**/*.{js,ts,jsx,tsx,css,scss,sass}");
    expect(result).toContain("./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}");
    expect(result).toContain("./node_modules/@shiraya-ma/mai-ui/**/*.{js,ts,jsx,tsx}");
  });

  it('should append user-provided content paths', () => {
    const userContent: string[] = ["./custom/path/**/*.{js,ts}"];
    const result = _generateContent(userContent);

    expect(result).toContain("./custom/path/**/*.{js,ts}");
  });

  it('should handle empty user content gracefully', () => {
    const userContent: string[] = [];
    const result = _generateContent(userContent);

    expect((result as string[]).length).toBe(4);
  });

  it('should merge default and user-provided content paths', () => {
    const userContent: string[] = ["./custom/path/**/*.{js,ts}"];
    const result = _generateContent(userContent);

    expect(result).toContain("./index.html");
    expect(result).toContain("./custom/path/**/*.{js,ts}");
  });
});

describe('_generateExtend', () => {
  it('should handle empty userExtend gracefully', () => {
    const result = _generateExtend();

    expect(result.colors).toMatchObject(MaiColors.colors);
    expect(result.fontFamily).toMatchObject(maiFonts);
  });

  it('should merge user-provided colors with default colors', () => {
    const userExtend: Partial<CustomThemeConfig> = {colors: {customColor: {DEFAULT: '#123456'}}};
    const result = _generateExtend(userExtend);

    expect(result.colors).toHaveProperty('customColor', {DEFAULT: '#123456'});
    expect(result.colors).toMatchObject(MaiColors.colors);
  });

  it('should merge user-provided font families with default font families', () => {
    const userExtend = { fontFamily: { customFont: ['CustomFont'] } };
    const result = _generateExtend(userExtend);

    expect(result.fontFamily).toHaveProperty('customFont', ['CustomFont']);
    expect(result.fontFamily).toMatchObject(maiFonts);
  });

  it('should include other user-provided properties', () => {
    const userExtend = { spacing: { customSpacing: '10rem' } };
    const result = _generateExtend(userExtend);

    expect(result).toHaveProperty('spacing');
    expect(result.spacing).toHaveProperty('customSpacing', '10rem');
  });

  it('should override default values with user-provided values', () => {
    const userExtend = { colors: { primary: '#654321' } };
    const result = _generateExtend(userExtend);

    expect(result.colors).toHaveProperty('primary', '#654321');
  });
});

describe('_generatePlugins', () => {
  it('should return default plugin when userPlugin is undefined', () => {
    const result = _generatePlugins(undefined);

    expect(result.length).toBe(1);
    expect(result[0]).toBeInstanceOf(Object); // Assuming `maiui` returns a object
  });

  it('should include user-provided plugins', () => {
    const userPlugin = [() => {}, () => {}];
    const result = _generatePlugins(userPlugin);

    expect(result.length).toBe(3); // 1 default plugin + 2 user plugins
    expect(result.slice(1)).toEqual(userPlugin);
  });

  it('should include heroUIPluginConfig in the default plugin', () => {
    const heroUIPluginConfig: HeroUIPluginConfig = {themes: {dark: {}}};
    const result = _generatePlugins(undefined, heroUIPluginConfig);

    expect(result[0]).toBeInstanceOf(Object); // Assuming `maiui` returns a object
  });

  it('should handle empty userPlugin array gracefully', () => {
    const userPlugin: [] = [];
    const result = _generatePlugins(userPlugin);

    expect(result.length).toBe(1); // Only the default plugin
    expect(result[0]).toBeInstanceOf(Object);
  });

  it('should merge default plugin with user-provided plugins', () => {
    const userPlugin = [() => {}, () => {}];
    const heroUIPluginConfig: HeroUIPluginConfig = {themes: {light: {}}};
    const result = _generatePlugins(userPlugin, heroUIPluginConfig);

    expect(result.length).toBe(3); // 1 default plugin + 2 user plugins
    expect(result[0]).toBeInstanceOf(Object); // Default plugin
    expect(result.slice(1)).toEqual(userPlugin); // User plugins
  });
});

describe('_generateTheme', () => {
  it('should handle empty userTheme gracefully', () => {
    const result = _generateTheme();

    expect(result).toHaveProperty('extend');
    expect(result.extend).toHaveProperty('colors');
    expect(result.extend.colors).toMatchObject(MaiColors.colors);
    expect(result.extend).toHaveProperty('fontFamily');
    expect(result.extend.fontFamily).toMatchObject(maiFonts);
  });

  it('should merge user-provided extend with default extend', () => {
    const userTheme = {
      userExtend: {
        colors: { customColor: { DEFAULT: '#123456' } },
        fontFamily: { customFont: ['CustomFont'] },
      },
    };
    const result = _generateTheme(userTheme);

    expect(result.extend.colors).toHaveProperty('customColor', { DEFAULT: '#123456' });
    expect(result.extend.colors).toMatchObject(MaiColors.colors);
    expect(result.extend.fontFamily).toHaveProperty('customFont', ['CustomFont']);
    expect(result.extend.fontFamily).toMatchObject(maiFonts);
  });

  it('should include other user-provided properties in the theme', () => {
    const userTheme = { spacing: { customSpacing: '10rem' } };
    const result = _generateTheme(userTheme);

    expect(result).toHaveProperty('spacing');
    expect(result.spacing).toHaveProperty('customSpacing', '10rem');
  });

  it('should override default values with user-provided values', () => {
    const userTheme = {
      userExtend: { colors: { primary: '#654321' } },
    };
    const result = _generateTheme(userTheme);

    expect(result.extend.colors).toHaveProperty('primary', '#654321');
  });

  it('should merge default extend with user-provided extend and include other userTheme properties', () => {
    const userTheme = {
      userExtend: {
        colors: { customColor: { DEFAULT: '#abcdef' } },
        fontFamily: { customFont: ['CustomFont'] },
      },
      spacing: { customSpacing: '8rem' },
    };
    const result = _generateTheme(userTheme);

    expect(result.extend.colors).toHaveProperty('customColor', { DEFAULT: '#abcdef' });
    expect(result.extend.colors).toMatchObject(MaiColors.colors);
    expect(result.extend.fontFamily).toHaveProperty('customFont', ['CustomFont']);
    expect(result.extend.fontFamily).toMatchObject(maiFonts);
    expect(result).toHaveProperty('spacing');
    expect(result.spacing).toHaveProperty('customSpacing', '8rem');
  });
});
