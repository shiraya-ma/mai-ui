'use client';
import { createContext } from 'react';

import type { Theme, ThemeUpdater } from './theme-types';
import { storedTheme } from './stored-theme';

export const ThemeContext = createContext<Theme>(storedTheme.get());

export const ThemeUpdaterContext = createContext<ThemeUpdater>((theme) => { console.debug('Called initial themeUpdater.') });

export type ThemeContextProps = {
    theme: Theme;
    updateTheme?: (theme: Theme) => void;
};
