'use strict';

import { isPreferThemedark } from "./is-prefer-theme-dark";
import type { Theme } from "./theme-types";

const KEY = 'mai-ui-theme-v2';

const DEFAULT: Theme = {
    isDark: isPreferThemedark(),
    isSystem: true
};

export const storedTheme = {
    get: (): Theme => {
        if (typeof window === 'undefined') {
            return DEFAULT;
        }

        const stored = window.localStorage.getItem(KEY);

        if (stored === null) {
            return DEFAULT;
        }

        const theme = JSON.parse(stored) as Theme;
        
        return theme;
    },
    set: (theme: Theme | null) => {
        if (typeof window === 'undefined') {
            return;
        }

        if (theme) {
            window.localStorage.setItem(KEY, JSON.stringify(theme));
        }
    }
};
