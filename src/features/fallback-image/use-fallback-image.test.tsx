'use strict';
import { describe, it, expect } from 'bun:test';
import { renderHook } from '@testing-library/react';
import { type PropsWithChildren } from 'react';

import { FallbackImageProvider } from './fallback-image-provider';
import { useFallbackImage } from './use-fallback-image';

describe('useFallbackImage', () => {
  const withoutContextWrapper = ({children}: PropsWithChildren) => (<>{children}</>);

  it('should return undefined when no context is provided', () => {
    const { result } = renderHook(() => useFallbackImage(), {
      wrapper: withoutContextWrapper,
    });
    expect(result.current).toBeUndefined();
  });

  it('should return the provided image url if it is valid', () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <FallbackImageProvider fallbackImageProps={{src: 'https://example.com/image.png'}} children={children}/>
    );
    const { result } = renderHook(() => useFallbackImage(), { wrapper });
    expect(result.current?.src).toBe('https://example.com/image.png');
  });
});
