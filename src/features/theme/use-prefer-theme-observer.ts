// usePreferThemeObserver
'use client';
import { useEffect, useRef } from "react";

import { log } from '../../libs';

import { useTheme } from './use-theme';

export function usePreferThemeObserver () {
    const { theme, updateTheme } = useTheme();

    const refPreferThemeObserver = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const div = refPreferThemeObserver.current;

        if (typeof window === 'undefined' || !theme.isSystem || div === null) {
            return;
        }

        log.debug('Start observe prefer theme.');

        const observer = new IntersectionObserver(() => {            
            const isDark = window.getComputedStyle(div).display === 'block';

            if (theme.isDark === isDark) {
                return;
            }

            log.debug('Switched prefer theme to', isDark? 'dark': 'light');

            updateTheme({
                isDark,
                isSystem: true
            });
        });

        observer.observe(div);

        return () => {
            log.debug('Disconnect PreferThemeObserver.');

            observer.disconnect();
        }
    }, [ theme, updateTheme ]);

    return {
        refPreferThemeObserver
    };
};
