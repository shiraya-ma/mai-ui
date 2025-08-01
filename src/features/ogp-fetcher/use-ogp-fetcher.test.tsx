'use strict';
import { describe, it, expect, jest } from 'bun:test';
import { renderHook } from '@testing-library/react';
import { type PropsWithChildren } from 'react';

import { useOGPFetcher } from './use-ogp-fetcher';
import { OGPFetcherProvider } from './ogp-fetcher-provider';

describe('useOGPFetcher', () => {
  const withoutContextWrapper = ({children}: PropsWithChildren) => (<>{children}</>);

  it('should return undefined without context', () => {
    const result = renderHook(() => useOGPFetcher(), {wrapper: withoutContextWrapper}).result.current;
    
    expect(result.ogpFetcher).toBeUndefined();
  });

  it('should return the fetcher from the provider context', async () => {
    const mockFetcher = jest.fn();
    const wrapper = ({children}: PropsWithChildren) => (<OGPFetcherProvider fetcher={mockFetcher} children={children}/>);
    const result = renderHook(() => useOGPFetcher(), {wrapper}).result.current;
    expect(result.ogpFetcher).toBe(mockFetcher);
  });
});
