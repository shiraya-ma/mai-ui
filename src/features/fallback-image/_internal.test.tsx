'use strict';
import { describe, it, expect } from 'bun:test';
import { renderHook } from '@testing-library/react';
import { type PropsWithChildren } from 'react';

import {
  FallbackImageContext,
  useFallbackImageContext,
} from './_internal';

describe('useFallbackImageContext', () => {
  it('should return undefined if no context is provided', () => {
    // Arrange & Act
    const { result } = renderHook(() => useFallbackImageContext({}));

    // Assert
    expect(result.current).toStrictEqual({
      children: undefined,
      fallbackImageProps: undefined,
    });
  });

  it('should return the context value if provided', () => {
    // Arrange
    const mockContextValue = { src: 'fallback.png', width: 100, height: 100 };

    // Act
    const wrapper = ({ children }: PropsWithChildren) => (
      <FallbackImageContext.Provider value={mockContextValue}>
        {children}
      </FallbackImageContext.Provider>
    );
    const { result } = renderHook(() => useFallbackImageContext({}), { wrapper });

    // Assert
    expect(result.current.fallbackImageProps).toStrictEqual(mockContextValue);
  });

  it('should return the override value', () => {
    // Arrange
    const mockContextValue = { src: 'fallback.png', width: 100, height: 100 };
    const overrideValue = { src: 'image.png', width: 300, height: 300 };
    const props = {
      fallbackImageProps: overrideValue,
      children: undefined,
    };

    // Act
    const wrapper = ({ children }: PropsWithChildren) => (
      <FallbackImageContext.Provider value={mockContextValue}>
        {children}
      </FallbackImageContext.Provider>
    );
    const { result } = renderHook(() => useFallbackImageContext(props), { wrapper });

    // Assert
    expect(result.current.fallbackImageProps).toEqual(overrideValue);
  });
});
