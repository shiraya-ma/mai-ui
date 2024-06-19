'use strict';
import { nextui } from '@nextui-org/react';
import type { ColorScale, NextUIPluginConfig } from "@nextui-org/react";

import { maiColors } from "../";

/**
 * NextUIのテーマを拡張するプラグイン
 * 
 * @param config 
 * @returns 
 */
export function maiui (config?: NextUIPluginConfig | undefined) {
    const primary: ColorScale = {
        50: maiColors.mint[50],
        100: maiColors.mint[100],
        200: maiColors.mint[200],
        300: maiColors.mint[300],
        400: maiColors.mint[400],
        500: maiColors.mint[500],
        600: maiColors.mint[600],
        700: maiColors.mint[700],
        800: maiColors.mint[800],
        900: maiColors.mint[900],
        DEFAULT: maiColors.mint[200],
        foreground: '#fff'
    };

    const secondary: ColorScale = {
        50: maiColors.chocolate[50],
        100: maiColors.chocolate[100],
        200: maiColors.chocolate[200],
        300: maiColors.chocolate[300],
        400: maiColors.chocolate[400],
        500: maiColors.chocolate[500],
        600: maiColors.chocolate[600],
        700: maiColors.chocolate[700],
        800: maiColors.chocolate[800],
        900: maiColors.chocolate[900],
        DEFAULT: maiColors.chocolate[400],
        foreground: '#fff'
    };

    const success: ColorScale = {
        50: maiColors.cider[50],
        100: maiColors.cider[100],
        200: maiColors.cider[200],
        300: maiColors.cider[300],
        400: maiColors.cider[400],
        500: maiColors.cider[500],
        600: maiColors.cider[600],
        700: maiColors.cider[700],
        800: maiColors.cider[800],
        900: maiColors.cider[900],
        DEFAULT: maiColors.cider[200],
        foreground: '#fff'
    };

    const danger: ColorScale = {
        50: maiColors.strawberry[50],
        100: maiColors.strawberry[100],
        200: maiColors.strawberry[200],
        300: maiColors.strawberry[300],
        400: maiColors.strawberry[400],
        500: maiColors.strawberry[500],
        600: maiColors.strawberry[600],
        700: maiColors.strawberry[700],
        800: maiColors.strawberry[800],
        900: maiColors.strawberry[900],
        DEFAULT: maiColors.strawberry[300],
        foreground: '#fff'
    };

    const warning: ColorScale = {
        50: maiColors.citrus[50],
        100: maiColors.citrus[100],
        200: maiColors.citrus[200],
        300: maiColors.citrus[300],
        400: maiColors.citrus[400],
        500: maiColors.citrus[500],
        600: maiColors.citrus[600],
        700: maiColors.citrus[700],
        800: maiColors.citrus[800],
        900: maiColors.citrus[900],
        DEFAULT: maiColors.citrus[300],
        foreground: '#000'
    };
    
    const maiConfig: NextUIPluginConfig = {
        themes: {
            dark: {
                colors: {
                    primary,
                    secondary,
                    success,
                    danger,
                    warning
                }
            },
            light: {
                colors: {
                    primary,
                    secondary,
                    success,
                    danger,
                    warning
                }
            }
        }
    };

    const _config: NextUIPluginConfig = Object.assign(maiConfig, config ?? {});

    return nextui(_config)
};

export default maiui;
