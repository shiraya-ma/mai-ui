'use strict';
import type { CustomThemeConfig } from 'tailwindcss/types/config';

import { maiColors, maiFonts } from '../../core';

export function generateTheme (userTheme: ThemeConfig | undefined): ThemeConfig {
    if (userTheme === undefined) {
        return {
            extend: {
                colors: {
                  ...maiColors
                },
                fontFamily: {
                  ...maiFonts
                }
            }
        };
    }

    const { extend, ..._userTheme } = userTheme;

    const theme: ThemeConfig = {
        extend: generateExtend(extend),
        ..._userTheme
    };
    
    return theme;
};

function generateExtend (userExtend: Partial<CustomThemeConfig> | undefined): Partial<CustomThemeConfig> {
    if (userExtend === undefined) {
        return {
            colors: maiColors,
            fontFamil: maiFonts
        };
    }

    const { colors, fontFamily, ..._userExtend } = userExtend;

    const _colors = colors? {
        ...maiColors,
        ...colors
    }: maiColors;

    const _fontFamily = fontFamily? {
        ...maiFonts,
        ...fontFamily
    }: maiFonts;

    const extend: Partial<CustomThemeConfig> = {
        colors: _colors,
        fontFamily: _fontFamily,
        ..._userExtend
    };

    return extend;
};

type ThemeConfig =  Partial<CustomThemeConfig & {
    extend: Partial<CustomThemeConfig>;
}>;
