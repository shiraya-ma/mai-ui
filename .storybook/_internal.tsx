'use strict';
import { PropsWithChildren, useEffect, useState } from 'react';
import { themes } from '@storybook/theming';
import type { DocsContainerProps } from '@storybook/addon-docs';

/** @internal */
export function configQuery () {
  const mediaQuery = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  const onChangeQuery = (mediaQueryChangeHandler: (ev: MediaQueryListEvent) => void) => {
    if (!mediaQuery) return;

    mediaQuery.addEventListener('change', mediaQueryChangeHandler);
  };

  return {
    mediaQuery,
    onChangeQuery,
  };
};

/** @internal */
export function useCustomDocsContainer<T extends DocsContainerProps> (props: PropsWithChildren<T>) {
  const {
    ...userProps
  } = props;

  const { mediaQuery, onChangeQuery } = configQuery();

  const [theme, setTheme] = useState(
    mediaQuery?.matches ? themes.dark : themes.light
  );
  
  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? themes.dark : themes.light);
    };
    onChangeQuery(handler);
    return () => onChangeQuery(handler);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    ...userProps,
    theme,
  };
};
