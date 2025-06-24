'use client';
import React from 'react';
import { HeroUIProvider, type HeroUIProviderProps } from '@heroui/system';

import { type MaiHeadingsStyleContextProps, MaiHeadingsStyleProvider } from '@/components';
import { type FallbackImageProps, FallbackImageProvider } from '@/features/fallback-image';
import { type OGPFetcherFunction ,OGPFetcherProvider } from '@/features/ogp-fetcher';
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
  const {
    children,
    disabledTheme,
    fallbackImage,
    headingStyle,
    navigate,
    ogpFetcher,
    ...heroUIProviderProps
  } = props;
  
  return (
    <FallbackImageProvider fallbackImageProps={fallbackImage}>
      <OGPFetcherProvider fetcher={ogpFetcher}>
        <ThemeContextProvider disabledTheme={disabledTheme}>
          <HeroUIProvider navigate={navigate} {...heroUIProviderProps}>
            <MaiHeadingsStyleProvider context={headingStyle}>
              {children}
              
              {!disabledTheme && (<PreferThemeObserver />)}
            </MaiHeadingsStyleProvider>
          </HeroUIProvider>
        </ThemeContextProvider>
      </OGPFetcherProvider>
    </FallbackImageProvider>
  );
};

MaiUIProvider.displayName = 'MaiUIProvider';

namespace MaiUIProvider {
  /**
   * Props for the MaiUIProvider component.
   * 
   * Inherits all properties from {@link HeroUIProviderProps}.
   */
  export type Props = HeroUIProviderProps & Partial<{
    /**
     * If true, disables the theme functionality for the provider
     */
    disabledTheme: boolean;

    /**
     * Configuration for the fallback image to use when an image fails to load
     */
    fallbackImage: FallbackImageProps;

    /**
     * Custom styles or configuration for heading elements within the provider
     */
    headingStyle: MaiHeadingsStyleContextProps;

    /**
     * Function to fetch Open Graph Protocol (OGP) data for URLs
     */
    ogpFetcher: OGPFetcherFunction;
  }>;
};

export {
  MaiUIProvider
};
