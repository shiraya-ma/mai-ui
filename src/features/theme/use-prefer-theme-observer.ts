// usePreferThemeObserver
'use client';
import { useEffect, useRef } from "react";

import { useTheme } from './use-theme';

export function usePreferThemeObserver () {
    const { theme, updateTheme } = useTheme();

    const refPreferThemeObserver = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const div = refPreferThemeObserver.current;

        if (typeof window === 'undefined' || !theme.isSystem || div === null) {
            return;
        }

        console.debug('Start observe prefer theme.');

        const observer = new IntersectionObserver(() => {            
            const isDark = window.getComputedStyle(div).display === 'block';

            if (theme.isDark === isDark) {
                return;
            }

            console.debug('Switched prefer theme to', isDark? 'dark': 'light');

            updateTheme({
                isDark,
                isSystem: true
            });
        });

        observer.observe(div);

        return () => {
            console.debug('Disconnect PreferThemeObserver.');

            observer.disconnect();
        }
    }, [ theme, updateTheme ]);

    return {
        refPreferThemeObserver
    };
};
