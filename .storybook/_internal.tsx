'use strict';
/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, useEffect, useState } from 'react';
import { DocsContainer } from '@storybook/addon-docs';
import { themes, type ThemeVars } from '@storybook/theming';
import type { DocsContainerProps } from '@storybook/addon-docs';

/** @internal */
export const CustomDocsContainer = (props: DocsContainerProps) => {
  const { theme, ...userProps } = useCustomDocsContainer(props);

  return <DocsContainer {...userProps} theme={theme} />;
};

/** @internal */
export function configQuery () {
  const mediaQuery = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  const onChangeQuery = (mediaQueryChangeHandler: (ev: MediaQueryListEvent) => void) => {
    if (!mediaQuery) return { removeEventListener: () => {} };

    mediaQuery.addEventListener('change', mediaQueryChangeHandler);

    return {
      removeEventListener: () => {
        mediaQuery.removeEventListener('change', mediaQueryChangeHandler);
      }
    };
  };

  return {
    mediaQuery,
    onChangeQuery,
  };
};

/** @internal */
export function initThemeState (mediaQuery: MediaQueryList | null): ThemeVars {
  if (!mediaQuery) return themes.light;

  return mediaQuery.matches ? themes.dark : themes.light;
};

/** @internal */
export function useCustomDocsContainer<T extends DocsContainerProps> (props: PropsWithChildren<T>) {
  const {
    ...userProps
  } = props;

  const { mediaQuery, onChangeQuery } = configQuery();

  const [theme, setTheme] = useState(initThemeState(mediaQuery));
  
  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? themes.dark : themes.light);
    };

    const { removeEventListener} = onChangeQuery(handler);
    return () => removeEventListener();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    ...userProps,
    theme,
  };
};
