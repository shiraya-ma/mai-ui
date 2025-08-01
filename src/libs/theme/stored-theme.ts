'use client';
import { type MaiUI } from "../../types/mai-ui";

const KEY = 'theme';

export const storedTheme = {
    clear: () => {
        if (typeof window === 'undefined') {
            return;
        }

        localStorage.removeItem(KEY);
    },
    get: (): MaiUI.Theme | null => {
        if (typeof window === 'undefined') {
            return null;
        }

        const storedTheme = localStorage.getItem(KEY);

        if (!storedTheme) {
            return null;
        }

        const theme = JSON.parse(storedTheme) as MaiUI.Theme;

        return theme;
    },
    set: (theme: MaiUI.Theme | null) => {
        if (typeof window === 'undefined') {
            return;
        }

        if (!theme) {
            localStorage.removeItem(KEY);

            return;
        }

        const stringifiedTheme  = JSON.stringify(theme);

        localStorage.setItem(KEY, stringifiedTheme);
    }
};
