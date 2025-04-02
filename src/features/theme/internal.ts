'use strict';

import { MaiUI } from "@/types/mai-ui";

const _KEY = 'mai-ui-theme-v2';
const _DEFAULT: MaiUI.ThemeState = {
  isDark: isPreferThemeDark(),
  isSystem: true
};

/** @internal */
export const store = {
  get: (): MaiUI.ThemeState => {
    if (typeof window === 'undefined') return _DEFAULT;

    const stored = window.localStorage.getItem(_KEY);
    if (stored === null) return _DEFAULT;

    const theme = JSON.parse(stored) as MaiUI.ThemeState;    
    return theme;
  },
  set: (theme: MaiUI.ThemeState | null) => {
    if (typeof window === 'undefined') return;

    if (theme) {
      window.localStorage.setItem(_KEY, JSON.stringify(theme));
    } else {
      window.localStorage.removeItem(_KEY);
    }
  }
};

/** @internal */
export function isPreferThemeDark () {
  if (typeof window === 'undefined') return false;

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return isDark;
};
