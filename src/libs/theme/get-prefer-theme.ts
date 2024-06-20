'use strict';

import { MaiUI } from "@mai-ui/types/mai-ui";

export function getPreferTheme (): MaiUI.Theme {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return isDark? 'dark': 'light';
};
