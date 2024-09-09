'use strict';

export type Theme = {
    isDark: boolean;
    isSystem: boolean;
};

export type ThemeUpdater = (theme: Theme) => void;
