// useThemeContext
'use client';
import { useCallback, useEffect, useReducer } from "react";

import {
    storedTheme,
    type Theme,
} from "./";

import { log } from "../../libs";

export function useThemeContext () {
    const [ theme, setTheme ] = useReducer<(state: Theme, theme: Theme) => Theme>((_, theme) => theme, storedTheme.get());

    const updateTheme = useCallback((theme: Theme) => {
        storedTheme.set(theme);

        setTheme(theme);
    }, [ setTheme ]);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        document.documentElement.classList.toggle('dark', theme.isDark);

        log.debug(`Updated theme.\n\tdark : ${ theme.isDark }\n\tsystem: ${ theme.isSystem }`);
    }, [ theme ]);

    return {
        theme,
        updateTheme
    };
};
