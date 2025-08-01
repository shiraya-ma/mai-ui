'use strict';
import { describe, it, expect } from 'bun:test';
import { renderHook, waitFor } from '@testing-library/react';
import { type PropsWithChildren} from 'react';

import { FallbackImageProvider } from '@/features/fallback-image';
import {
  useImg,
  ImageProps,
} from './_internal';

describe('useImg', () => {
  it('should return default src and alt when no fallback is needed', () => {
    const props: ImageProps = { src: 'test.jpg', alt: 'test image' };
    const { result } = renderHook(() => useImg(props), {
      wrapper: FallbackImageProvider,
    });
    expect(result.current.src).toBe('test.jpg');
    expect(result.current.alt).toBe('test image');
    expect(result.current.handleError).toBeInstanceOf(Function);
  });

  it('should update src to fallback on error', async () => {
    const props = { src: 'broken.jpg', alt: 'broken image' };
    const { result } = renderHook(() => useImg(props), {
      wrapper: ({children}: PropsWithChildren) => (
        <FallbackImageProvider children={children} fallbackImageProps={{ src: 'fallback.jpg' }}/>
      ),
    });
    expect(result.current.fallbackSize).toBeUndefined();
    // Simulate error
    result.current.handleError();
    await waitFor(() => {
      expect(result.current.fallbackSize).not.toBeUndefined();
    });
  });

  it('should keep alt unchanged on error', async () => {
    const props = { src: 'broken.jpg', alt: 'broken image' };
    const { result } = renderHook(() => useImg(props), {
      wrapper: FallbackImageProvider,
    });
    result.current.handleError();
    await waitFor(() => {
      expect(result.current.alt).toBe('broken image');
    });
  });
});
