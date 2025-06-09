'use client';
import React from 'react';

import {
  OGPFetcherContext,
  useOGPFetcherProvider,
  type OGPFetcherProviderProps,
} from './internal';

/**
 * OGPFetcherProvider
 * 
 * Provide ogp fetcher as context

 * @param props 
 * @returns 
 */
const OGPFetcherProvider: React.FC<OGPFetcherProvider.Props> = (props) => {
  const { children, fetcher } = useOGPFetcherProvider(props);

  return (
    <OGPFetcherContext.Provider
      children={children}
      value={fetcher}
    />
  );
};

namespace OGPFetcherProvider {
  export type Props = OGPFetcherProviderProps;
};

export {
  OGPFetcherProvider,
};
