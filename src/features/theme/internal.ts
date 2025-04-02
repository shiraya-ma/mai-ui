'use strict';
import { createContext, useEffect, useState } from "react";

import { MaiUI } from "@/types/mai-ui";

import type { PreferThemeObserver } from "./prefer-theme-observer";
import type { ThemeContextProvider } from "./theme-context-provider";
import { useTheme } from "./use-theme";

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
export const ThemeContext = createContext<MaiUI.ThemeContextProps | undefined>(undefined);

/** @internal */
export function isPreferThemeDark () {
  if (typeof window === 'undefined') return false;

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return isDark;
};

/** @internal */
export function usePreferThemeObserver (props: PreferThemeObserver.Props) {
  const { disabledTheme } = props;
  const { theme, updateThemeBySystem } = useTheme();

  useEffect(() => {
    if (typeof window === 'undefined' || disabledTheme || !theme.isSystem) {
      return () => {
        if (window.maiUI) {
          window.maiUI.togglePreferThemeDark = () => {};
        } else {
          window.maiUI = {
            togglePreferThemeDark: () => {},
          }
        }
      };
    };

    const observer = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChangePreferTheme = (ev: MediaQueryListEvent) => {
      const isDark = ev.matches;
      if (theme.isDark === isDark) return;

      console.debug('Switched prefer theme to', isDark? 'dark': 'light');

      updateThemeBySystem(isDark);
    };

    observer.addEventListener('change', handleChangePreferTheme);

    const togglePreferThemeDark = (isDark?: boolean) => {
      const mediaQueryListEvent = new MediaQueryListEvent('change', {
        media: '(prefers-color-scheme: dark)',
        matches: isDark
      });

      handleChangePreferTheme(mediaQueryListEvent);
    };    

    if (window.maiUI) {
      window.maiUI.togglePreferThemeDark = togglePreferThemeDark;
    } else {
      window.maiUI = {
        togglePreferThemeDark,
      }
    }

    return () => {
      window.maiUI!.togglePreferThemeDark = () => {};
      observer.removeEventListener('change', handleChangePreferTheme);
    };
  }, [ disabledTheme, theme, updateThemeBySystem ]);

  return {
    theme
  };
};

/** @internal */
export function useThemeContextProvider (props: ThemeContextProvider.Props) {
  const { disabledTheme, ..._props } = props;
  const [ theme, setTheme ] = useState<MaiUI.ThemeState>(store.get());

  const updateTheme = (theme: MaiUI.ThemeState) => {
    if (disabledTheme) return;
    setTheme(theme);
    store.set(theme);
  };
  const updateThemeBySystem = (isDark: boolean) => updateTheme({isDark, isSystem: true});
  const updateThemeByUser = (isDark: boolean) => updateTheme({isDark, isSystem: false});

  const context: MaiUI.ThemeContextProps = {
    theme,
    updateTheme,
    updateThemeBySystem,
    updateThemeByUser
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    document.documentElement.classList.toggle('dark', theme.isDark);
    document.documentElement.setAttribute('data-theme', theme.isDark? 'dark': 'light');

    console.debug(`Updated theme.\n\tdark : ${theme.isDark}\n\tsystem: ${theme.isSystem}`);
  }, [theme]);

  return {
    context,
    ..._props
  };
};
