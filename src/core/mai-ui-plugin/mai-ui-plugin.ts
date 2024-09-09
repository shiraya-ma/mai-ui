'use strict';
import { merge } from 'lodash';
import type { RecursiveKeyValuePair } from 'tailwindcss/types/config';
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
        ...(getColors(maiColors.mint, 300)),
        foreground: '#fff'
    };

    const secondary: ColorScale = {
        ...(getColors(maiColors.chocolate, 400)),
        foreground: '#fff'
    };

    const success: ColorScale = {
        ...(getColors(maiColors.cider, 300)),
        foreground: '#fff'
    };

    const danger: ColorScale = {
        ...(getColors(maiColors.strawberry, 300)),
        foreground: '#fff'
    };

    const warning: ColorScale = {
        ...(getColors(maiColors.citrus, 400)),
        foreground: '#000'
    };

    const colors = {
        primary,
        secondary,
        success,
        danger,
        warning
    }
    
    const maiConfig: NextUIPluginConfig = {
        themes: {
            dark: {
                colors: {
                    ...colors,
                    background: '#1F2937'
                }
            },
            light: {
                colors: {
                    ...colors,
                    background: '#fff'
                }
            }
        }
    };

    const _config = config? merge(maiConfig, config): maiConfig;

    return nextui(_config)
};