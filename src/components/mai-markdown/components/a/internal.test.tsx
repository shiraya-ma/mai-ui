'use strict';
import { describe, it, expect, jest } from 'bun:test';
import { renderHook, waitFor } from '@testing-library/react';

import { type OGPProps } from '@/features/ogp-fetcher';
import {
  useAnchorIsOnlyChild,
  useCardLinkProps,
  useOGP,
} from './internal';

describe('useAnchorIsOnlyChild', () => {
  it('should return false when refAnchor.current is null', () => {
    const ref = { current: null };
    const { result } = renderHook(() => useAnchorIsOnlyChild(ref));
    expect(result.current).toBe(false);
  });

  it('should return true if anchor is the only child of its parent', () => {
    const parent = document.createElement('div');
    const anchor = document.createElement('a');
    parent.appendChild(anchor);
    const ref = { current: anchor };
    document.body.appendChild(parent);

    const { result } = renderHook(() => useAnchorIsOnlyChild(ref));
    expect(result.current).toBe(true);

    document.body.removeChild(parent);
  });

  it('should return false if anchor has siblings', () => {
    const parent = document.createElement('div');
    const anchor = document.createElement('a');
    const sibling = document.createElement('span');
    parent.appendChild(anchor);
    parent.appendChild(sibling);
    const ref = { current: anchor };
    document.body.appendChild(parent);

    const { result } = renderHook(() => useAnchorIsOnlyChild(ref));
    expect(result.current).toBe(false);

    document.body.removeChild(parent);
  });

  it('should return false if anchor is not the first child', () => {
    const parent = document.createElement('div');
    const sibling = document.createElement('span');
    const anchor = document.createElement('a');
    parent.appendChild(sibling);
    parent.appendChild(anchor);
    const ref = { current: anchor };
    document.body.appendChild(parent);

    const { result } = renderHook(() => useAnchorIsOnlyChild(ref));
    expect(result.current).toBe(false);

    document.body.removeChild(parent);
  });
});

describe('useCardLinkProps', () => {
  it('should return empty object if ogp is undefined', () => {
    const result = useCardLinkProps(undefined);
    expect(result).toEqual({});
  });

  it('should return empty object if ogp.data is missing', () => {
    const ogp = { url: 'https://example.com', data: undefined };
    const result = useCardLinkProps(ogp as OGPProps);
    expect(result).toEqual({});
  });

  it('should return empty object if image is missing', () => {
    const ogp = {
      url: 'https://example.com',
      data: {
        title: 'Title',
        og: {},
        twitter: {},
        fb: {},
      },
    };
    const result = useCardLinkProps(ogp as OGPProps);
    expect(result).toEqual({});
  });

  it('should return empty object if title is missing', () => {
    const ogp = {
      url: 'https://example.com',
      data: {
        og: { image: 'img.png' },
        twitter: {},
        fb: {},
      },
    };
    const result = useCardLinkProps(ogp as OGPProps);
    expect(result).toEqual({});
  });

  it('should use og.image and data.title if present', () => {
    const ogp = {
      url: 'https://example.com',
      data: {
        title: 'Main Title',
        og: { image: 'og-image.png', title: 'OG Title' },
        twitter: { image: 'twitter-image.png', title: 'Twitter Title' },
        fb: { image: 'fb-image.png', title: 'FB Title' },
      },
    };
    const result = useCardLinkProps(ogp as OGPProps);
    expect(result).toEqual({
      cardLinkProps: {
        image: 'og-image.png',
        href: 'https://example.com',
        title: 'Main Title',
      },
    });
  });

  it('should fallback to twitter.image and twitter.title', () => {
    const ogp = {
      url: 'https://example.com',
      data: {
        twitter: { image: 'twitter-image.png', title: 'Twitter Title' },
      },
    };
    const result = useCardLinkProps(ogp as OGPProps);
    expect(result).toEqual({
      cardLinkProps: {
        image: 'twitter-image.png',
        href: 'https://example.com',
        title: 'Twitter Title',
      },
    });
  });

  it('should fallback to fb.image and fb.title', () => {
    const ogp = {
      url: 'https://example.com',
      data: {
        fb: { image: 'fb-image.png', title: 'FB Title' },
      },
    };
    const result = useCardLinkProps(ogp as OGPProps);
    expect(result).toEqual({
      cardLinkProps: {
        image: 'fb-image.png',
        href: 'https://example.com',
        title: 'FB Title',
      },
    });
  });

  it('should fallback to og.title if data.title is missing', () => {
    const ogp = {
      url: 'https://example.com',
      data: {
        og: { image: 'og-image.png', title: 'OG Title' },
      },
    };
    const result = useCardLinkProps(ogp as OGPProps);
    expect(result).toEqual({
      cardLinkProps: {
        image: 'og-image.png',
        href: 'https://example.com',
        title: 'OG Title',
      },
    });
  });
});

describe('useOGP', () => {
  it('should not fetch if href is undefined', () => {
    const fetcher = jest.fn();
    const { result } = renderHook(() => useOGP({ href: undefined, isOnlyChild: true, fetcher }));
    expect(result.current.ogp).toBeUndefined();
    expect(fetcher).not.toHaveBeenCalled();
  });

  it('should not fetch if isOnlyChild is false', () => {
    const fetcher = jest.fn();
    const { result } = renderHook(() => useOGP({ href: 'https://www.google.com/search?q=should not fetch if isOnlyChild is false', isOnlyChild: false, fetcher }));
    expect(result.current.ogp).toBeUndefined();
    expect(fetcher).not.toHaveBeenCalled();
  });

  it('should not fetch if fetcher is undefined', () => {
    const { result } = renderHook(() => useOGP({ href: 'https://www.google.com/search?q=should not fetch if fetcher is undefined', isOnlyChild: true, fetcher: undefined }));
    expect(result.current.ogp).toBeUndefined();
  });

  it('should call fetcher if isOnlyChild is true and fetcher is defined', async () => {
    const href = 'https://www.google.com/search?q=should call fetcher if isOnlyChild is true and fetcher is defined'
    const ogpData = { url: href, data: { title: 'Example' } };
    const fetcher = jest.fn().mockResolvedValue(ogpData);
    const { result } = renderHook(() =>
      useOGP({ href, isOnlyChild: true, fetcher })
    );

    await waitFor(() => {
      expect(result.current.isLoaded).toBe(true);
    }, { timeout: 1000 });

    expect(fetcher).toHaveBeenCalledWith(href);
    expect(result.current.ogp).toStrictEqual(ogpData);
  });

  it('should return undefined ogp if fetcher rejects', async () => {
    const fetcher = jest.fn().mockRejectedValue(new Error('fail'));
    const { result } = renderHook(() =>
      useOGP({ href: 'https://www.google.com/search?q=should return undefined ogp if fetcher rejects', isOnlyChild: true, fetcher })
    );

    await waitFor(() => {
      expect(result.current.isLoaded).toBe(true);
    }, { timeout: 1000 });
    
    expect(result.current.ogp).toBeUndefined();
  });
});
