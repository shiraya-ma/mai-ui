'use client';

import type { MaiUI } from "../../types/mai-ui";

export function getPreferTheme (): MaiUI.Theme {
    if (typeof window === 'undefined') {
        return 'light';
    }

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return isDark? 'dark': 'light';
};
