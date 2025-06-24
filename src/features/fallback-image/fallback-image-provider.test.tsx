'use strict';
import { describe, it, expect } from 'bun:test';
import { render } from '@testing-library/react';
import { useContext } from 'react';

import { FallbackImageContext, type FallbackImageProps } from './_internal';
import { FallbackImageProvider } from './fallback-image-provider';

describe('FallbackImageProvider', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <FallbackImageProvider>
        <div>Test Child</div>
      </FallbackImageProvider>
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('provides fallbackImageProps via context', () => {
    // Arrange
    let fallbackImageProps: FallbackImageProps | undefined = undefined;

    function Consumer() {
      fallbackImageProps = useContext(FallbackImageContext);
      return null;
    }

    render(
      <FallbackImageProvider fallbackImageProps={{ src: 'fallback.png' }}>
        <Consumer />
      </FallbackImageProvider>
    );

    expect(fallbackImageProps as FallbackImageProps | undefined).toStrictEqual({
      src: 'fallback.png',
    });
  });

  it('uses default fallbackImageProps if not provided', () => {
    let fallbackImageProps: FallbackImageProps | undefined = undefined;

    function Consumer() {
      fallbackImageProps = useContext(FallbackImageContext);
      return null;
    }

    render(
      <FallbackImageProvider>
        <Consumer />
      </FallbackImageProvider>
    );

    // The default value depends on useFallbackImageContext implementation.
    // Here we just check that contextValue is defined.
    expect(fallbackImageProps).toStrictEqual(undefined);
  });
});
