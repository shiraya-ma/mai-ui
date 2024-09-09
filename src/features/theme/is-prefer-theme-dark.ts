'use client';

export function isPreferThemedark (): boolean {
    if (typeof window === 'undefined') {
        return false;
    }

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return isDark;
};
