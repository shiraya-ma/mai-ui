'use strict';
import { describe, it, expect, jest } from 'bun:test';
import { renderHook } from '@testing-library/react';
import { type PropsWithChildren } from 'react';

import {
  OGPFetcherContext,
  useOGPFetcherProvider,
} from './internal';

describe('useOGPFetcherProvider', () => {
  const withoutContextWrapper = ({children}: PropsWithChildren) => (<>{children}</>);

  it('should provide undefined without context', () => {
    const result = renderHook(() => useOGPFetcherProvider({ children: undefined }), {wrapper: withoutContextWrapper}).result.current;

    expect(result.fetcher).toBeUndefined();
  });

  it('should provide undefined with context', () => {
    const wrapper = ({children}: PropsWithChildren) => (<OGPFetcherContext.Provider value={undefined} children={children} />);
    const result = renderHook(() => useOGPFetcherProvider({}), {wrapper}).result.current;
    expect(result.fetcher).toBeUndefined();
  });

  it('should provide fetcher from context', () => {
    const fetcher = jest.fn();
    const wrapper = ({children}: PropsWithChildren) => (<OGPFetcherContext.Provider value={fetcher} children={children} />);
    const result = renderHook(() => useOGPFetcherProvider({}), {wrapper}).result.current;
    expect(result.fetcher).toBe(fetcher);
  });

  it('should provide fetcher from props when context is undefined', () => {
    const fetcher = jest.fn();
    const wrapper = ({children}: PropsWithChildren) => (<OGPFetcherContext.Provider value={undefined} children={children} />); // Explicitly undefined context
    const result = renderHook(() => useOGPFetcherProvider({fetcher}), {wrapper}).result.current;
    expect(result.fetcher).toBe(fetcher);
  });

  it('should prioritize fetcher from props over context', () => {
    const contextFetcher = jest.fn();
    const userFetcher = jest.fn();
    const wrapper = ({children}: PropsWithChildren) => (<OGPFetcherContext.Provider value={contextFetcher} children={children} />); // Context is provided
    const result = renderHook(() => useOGPFetcherProvider({fetcher: userFetcher}), {wrapper}).result.current;
    expect(result.fetcher).not.toBe(contextFetcher);
    expect(result.fetcher).toBe(userFetcher);
  });
});
