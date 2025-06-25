'use strict';

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
