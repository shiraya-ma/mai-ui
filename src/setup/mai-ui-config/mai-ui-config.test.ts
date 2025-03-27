'use strict';
import { describe, expect, it } from 'bun:test';
import type { Config } from 'tailwindcss';
import type { HeroUIPluginConfig } from '@heroui/theme';

import { maiUIConfig } from './mai-ui-config';

describe('maiUIConfig', () => {
  it('should return default configuration when no arguments are provided', () => {
    const config = maiUIConfig();
    expect(config).toHaveProperty('content');
    expect(config).toHaveProperty('darkMode', ['class']);
    expect(config).toHaveProperty('theme');
    expect(config).toHaveProperty('plugins');
  });

  it('should merge userConfig with default configuration', () => {
    const userConfig: Partial<Config> = {
      content: ['./src/**/*.{html,ts}'],
      darkMode: 'media',
    };
    const config = maiUIConfig(userConfig);
    expect(config.content).toContain('./src/**/*.{html,ts}');
    expect(config.darkMode).toBe('media');
  });

  it('should handle heroUIPluginConfig correctly', () => {
    const heroUIPluginConfig: HeroUIPluginConfig = {
      layout: { radius: { large: '100%' } },
      themes: { customTheme: { colors: { primary: '#123456' } } },
    };
    const config = maiUIConfig({}, heroUIPluginConfig);
    expect(config.plugins).toBeDefined();
    expect(config.plugins!.length).toBeGreaterThan(0);
  });

  it('should generate theme correctly when userTheme is provided', () => {
    const userConfig: Partial<Config> = {
      theme: { extend: { colors: { customColor: '#abcdef' } } },
    };
    const config = maiUIConfig(userConfig);
    expect(config.theme!.extend!.colors).toHaveProperty('customColor', '#abcdef');
  });

  it('should not override unspecified properties in userConfig', () => {
    const userConfig: Partial<Config> = { darkMode: 'media' };
    const config = maiUIConfig(userConfig);
    expect(config.darkMode).toBe('media');
    expect(config.theme).toBeDefined();
    expect(config.plugins).toBeDefined();
  });
});