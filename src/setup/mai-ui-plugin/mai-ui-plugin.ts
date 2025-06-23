'use strict';
import deepMerge from "deepmerge";
import type { RecursiveKeyValuePair } from 'tailwindcss/types/config';
import { heroui, type ColorScale, type HeroUIPluginConfig } from '@heroui/theme';
import Mai from '@shiraya-ma/mai-colors';

/**
 * Plugin for extend HeroUI configuration
 * 
 * @param config HeroUIPluginConfig
 * @returns 
 */
export function maiui (config: HeroUIPluginConfig = {}) {
  const getColors = (color: RecursiveKeyValuePair, defaultScale: number) => {
    return {
      50: color[50] as string,
      100: color[100] as string,
      200: color[200] as string,
      300:  color[300] as string,
      400: color[400] as string,
      500: color[500] as string,
      600: color[600] as string,
      700: color[700] as string,
      800: color[800] as string,
      900: color[900] as string,
      DEFAULT: color[defaultScale] as string,
    };
  };

  const primary: ColorScale = {
    ...(getColors(Mai.colors.mint, 300)),
    foreground: '#fff'
  };

  const secondary: ColorScale = {
    ...(getColors(Mai.colors.chocolate, 400)),
    foreground: '#fff'
  };

  const success: ColorScale = {
    ...(getColors(Mai.colors.cider, 300)),
    foreground: '#fff'
  };

  const danger: ColorScale = {
    ...(getColors(Mai.colors.strawberry, 300)),
    foreground: '#fff'
  };

  const warning: ColorScale = {
    ...(getColors(Mai.colors.citrus, 400)),
    foreground: '#000'
  };

  const colors = {
    primary,
    secondary,
    success,
    danger,
    warning,
  }
  
  const maiConfig: HeroUIPluginConfig = {
    themes: {
      dark: {
        colors: {
          ...colors,
          background: '#1f2937',
          foreground: '#fff',
        }
      },
      light: {
        colors: {
          ...colors,
          background: '#fff',
          foreground: '#000',
        }
      }
    }
  };  

  const _config = deepMerge(maiConfig, config);

  return heroui(_config);
};