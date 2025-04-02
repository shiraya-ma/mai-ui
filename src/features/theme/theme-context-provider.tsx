'use client';
import React, { type PropsWithChildren } from 'react';
import { ThemeContext, useThemeContextProvider } from './internal';

/** @internal */
const ThemeContextProvider: React.FC<ThemeContextProvider.Props> = (props) => {
  const { children, context } = useThemeContextProvider(props);
  
  return (
    <ThemeContext.Provider value={context}>
      { children }
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.displayName = 'ThemeContextProvider';

namespace ThemeContextProvider {
  export type Props = PropsWithChildren<{
    disabledTheme?: boolean;
  }>;
};

export {
  ThemeContextProvider
};
