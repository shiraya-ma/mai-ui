'use client';
import React from 'react';
import { HeroUIProvider, type HeroUIProviderProps } from '@heroui/system';

import { PreferThemeObserver, ThemeContextProvider } from '@/features/theme';

/**
 * Provider component that supplies context such as themes in MaiUI.
 * 
 * When optimizing routing with ReactRouterDOM or Next.js,  
 * pass a navigation function as a prop.  
 * (Called when MaiLink is clicked)
 * 
 * @example
 * import React, { PropsWithChildren } from 'react';
 * import { useNavigate } from 'react-router-dom';
 * import { MaiUIProvider } from '@shiraya-ma/mai-ui';
 * 
 * export const App: React.FC<PropsWithChildren> = (props) => {
 *    const { children } = props;
 * 
 *    const navigate = useNavigate();
 * 
 *    return (
 *      <MaiUIProvider navigate={ navigate }>
 *        { children }
 *      </MaiUIProvider>
 *    );
 * };
 * 
 * @param props 
 * @returns 
 */
const MaiUIProvider: React.FC<MaiUIProvider.Props> = (props) => {
  const { children, disabledTheme, navigate, ...heroUIProviderProps } = props;
  
  return (
    <ThemeContextProvider disabledTheme={disabledTheme}>
      <HeroUIProvider
        navigate={navigate}
        {...heroUIProviderProps}
      >
        {children}

        {!disabledTheme && (<PreferThemeObserver />)}
      </HeroUIProvider>
    </ThemeContextProvider>
  );
};

MaiUIProvider.displayName = 'MaiUIProvider';

namespace MaiUIProvider {
  export type Props = HeroUIProviderProps & {
    disabledTheme?: boolean;
  }
};

export {
  MaiUIProvider
};
