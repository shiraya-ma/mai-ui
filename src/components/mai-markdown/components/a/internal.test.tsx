'use strict';
/* eslint-disable @typescript-eslint/no-require-imports */
import { afterEach, describe, it, expect, jest, spyOn } from 'bun:test';
import { renderHook, waitFor } from '@testing-library/react';

import { useOGPFetcher, type OGPProps } from '@/features/ogp-fetcher';
import {
  useAnchor,
  useCardLinkProps,
  useOGP,
} from './internal';

describe('useAnchor', () => {
  const originalUseOGPFetcher = useOGPFetcher;

  afterEach(() => {
    spyOn(require('@/features/ogp-fetcher'), 'useOGPFetcher').mockImplementation(originalUseOGPFetcher);
  });

  it('should return correct values from useAnchor when isOnlyChild is true and ogpFetcher returns ogp', async () => {
    const url = 'https://example.com?q=should return correct values from useAnchor when isOnlyChild is true and ogpFetcher returns ogp';
    // Mock useOGPFetcher to provide a mock fetcher
    const mockOgp = {
      url,
      data: {
        title: 'Test Title',
        og: { image: 'og-image.png', title: 'OG Title' },
      },
    };
    const mockFetcher = jest.fn().mockResolvedValue(mockOgp);

    // Mock useOGPFetcher to return our mock fetcher
    spyOn(require('@/features/ogp-fetcher'), 'useOGPFetcher').mockImplementation(() => ({ogpFetcher: mockFetcher}));

    const props = {
      href: url,
      children: 'Example',
      'data-is-only-child': 'true',
    };

    // Use renderHook to test the hook
    const { result } = renderHook(() => useAnchor(props));

    await waitFor(() => {
      expect(result.current.cardLinkProps).toBeDefined();
    });

    expect(result.current.href).toBe(url);
    expect(result.current.children).toBe('Example');
    expect(result.current.cardLinkProps).toStrictEqual({
      image: 'og-image.png',
      href: url,
      title: 'Test Title',
      isLoading: false,
      isError  : false,
    });
  });

  it('should return empty cardLinkProps if isOnlyChild is false', () => {
    const url = 'https://example.com?q=should return empty cardLinkProps if isOnlyChild is false';
    // Mock useOGPFetcher to provide a mock fetcher
    const mockFetcher = jest.fn();

    spyOn(require('@/features/ogp-fetcher'), 'useOGPFetcher').mockImplementation(() => ({ogpFetcher: mockFetcher}));

    const props = {
      href: url,
      children: 'Example',
      'data-is-only-child': 'false',
    };

    const { result } = renderHook(() => useAnchor(props));

    expect(result.current.cardLinkProps).toBeUndefined();
    expect(result.current.href).toBe(url);
    expect(result.current.children).toBe('Example');
  });

  it('should handle missing ogpFetcher gracefully', async () => {
    const url = 'https://example?q=should handle missing ogpFetcher gracefully';
    // Mock useOGPFetcher to return undefined fetcher
    spyOn(require('@/features/ogp-fetcher'), 'useOGPFetcher').mockImplementation(() => ({ogpFetcher: undefined}));

    const props = {
      href: url,
      children: 'Example',
      'data-is-only-child': 'true',
    };

    const { result } = renderHook(() => useAnchor(props));

    await waitFor(() => {
      expect(result.current.cardLinkProps).toBeDefined();
      expect(result.current.cardLinkProps?.isLoading).toBe(false);
    });

    expect(result.current.cardLinkProps).toStrictEqual({
      image: undefined,
      href: undefined,
      title: undefined,
      isLoading: false,
      isError  : false,
    })
    expect(result.current.href).toBe(url);
    expect(result.current.children).toBe('Example');
  });

  it('should handle ogpFetcher reject', async () => {
    const url = 'https://example?q=should handle ogpFetcher reject';
    const fetcher = jest.fn().mockRejectedValue(new Error('fail'));
    // Mock useOGPFetcher to return undefined fetcher
    spyOn(require('@/features/ogp-fetcher'), 'useOGPFetcher').mockImplementation(() => ({ogpFetcher: fetcher}));

    const props = {
      href: url,
      children: 'Example',
      'data-is-only-child': 'true',
    };

    const { result } = renderHook(() => useAnchor(props));

    await waitFor(() => {
      expect(result.current.cardLinkProps).toBeDefined();
      expect(result.current.cardLinkProps?.isLoading).toBe(false);
    });

    expect(result.current.cardLinkProps).toStrictEqual({
      image: undefined,
      href: undefined,
      title: undefined,
      isLoading: false,
      isError  : true,
    })
    expect(result.current.href).toBe(url);
    expect(result.current.children).toBe('Example');
  });
});

describe('useCardLinkProps', () => {
  it('should return empty object if isCardLink is false', () => {
    const ogp: OGPProps | undefined = undefined;
    const isLoading = false;
    const isError   = false;
    const isCardLink = false;
    const result = useCardLinkProps({ogp, isLoading, isError, isCardLink});
    expect(result).toStrictEqual({});
  });

  it('should return cardLinkProps with correct values from ogp.og', () => {
    const ogp: OGPProps = {
      url: 'https://example.com',
      data: {
        title: 'Test Title',
        og: { image: 'og-image.png', title: 'OG Title' },
        twitter: { image: 'tw-image.png', title: 'TW Title' },
        fb: { image: 'fb-image.png', title: 'FB Title' },
      },
    };
    const isLoading = true;
    const isError   = false;
    const isCardLink = true;
    const result = useCardLinkProps({ogp, isLoading, isError, isCardLink});
    expect(result).toStrictEqual({
      cardLinkProps: {
        image: 'og-image.png',
        href: 'https://example.com',
        title: 'Test Title',
        isLoading: true,
        isError  : false,
      },
    });
  });

  it('should fallback to twitter image and title if og image and title are missing', () => {
    const ogp: OGPProps = {
      url: 'https://example.com',
      data: {
        twitter: { image: 'tw-image.png', title: 'TW Title' },
        fb: { image: 'fb-image.png', title: 'FB Title' },
      },
    };
    const isLoading = false;
    const isError   = false;
    const isCardLink = true;
    const result = useCardLinkProps({ogp, isLoading, isError, isCardLink});
    expect(result).toStrictEqual({
      cardLinkProps: {
        image: 'tw-image.png',
        href: 'https://example.com',
        title: 'TW Title',
        isLoading: false,
        isError  : false
      },
    });
  });

  it('should fallback to fb image and title if og and twitter are missing', () => {
    const ogp: OGPProps = {
      url: 'https://example.com',
      data: {
        fb: { image: 'fb-image.png', title: 'FB Title' },
      },
    };
    const isLoading = false;
    const isError   = false;
    const isCardLink = true;
    const result = useCardLinkProps({ogp, isLoading, isError, isCardLink});
    expect(result).toStrictEqual({
      cardLinkProps: {
        image: 'fb-image.png',
        href: 'https://example.com',
        title: 'FB Title',
        isLoading: false,
        isError  : false,
      },
    });
  });

  it('should return undefined image and title if no data present', () => {
    const ogp: OGPProps = {
      url: 'https://example.com',
      data: {},
    };
    const isLoading = false;
    const isError   = false;
    const isCardLink = true;
    const result = useCardLinkProps({ogp, isLoading, isError, isCardLink});
    expect(result).toStrictEqual({
      cardLinkProps: {
        image: undefined,
        href: 'https://example.com',
        title: undefined,
        isLoading: false,
        isError  : false,
      },
    });
  });

  it('should return undefined href if ogp is undefined', () => {
    const ogp: OGPProps | undefined = undefined;
    const isLoading = false;
    const isError   = true;
    const isCardLink = true;
    const result = useCardLinkProps({ogp, isLoading, isError, isCardLink});
    expect(result).toEqual({
      cardLinkProps: {
        image: undefined,
        href: undefined,
        title: undefined,
        isLoading: false,
        isError  : true,
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
    expect(result.current.isError).toBe(false);
  });

  it('should not fetch if isOnlyChild is false', () => {
    const fetcher = jest.fn();
    const { result } = renderHook(() => useOGP({ href: 'https://www.google.com/search?q=should not fetch if isOnlyChild is false', isOnlyChild: false, fetcher }));
    expect(result.current.ogp).toBeUndefined();
    expect(fetcher).not.toHaveBeenCalled();
    expect(result.current.isError).toBe(false);
  });

  it('should not fetch if fetcher is undefined', () => {
    const { result } = renderHook(() => useOGP({ href: 'https://www.google.com/search?q=should not fetch if fetcher is undefined', isOnlyChild: true, fetcher: undefined }));
    expect(result.current.ogp).toBeUndefined();
    expect(result.current.isError).toBe(false);
  });

  it('should call fetcher if isOnlyChild is true and fetcher is defined', async () => {
    const href = 'https://www.google.com/search?q=should call fetcher if isOnlyChild is true and fetcher is defined'
    const ogpData = { url: href, data: { title: 'Example' } };
    const fetcher = jest.fn().mockResolvedValue(ogpData);
    const { result } = renderHook(() =>
      useOGP({ href, isOnlyChild: true, fetcher })
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    }, { timeout: 1000 });

    expect(fetcher).toHaveBeenCalledWith(href);
    expect(result.current.ogp).toStrictEqual(ogpData);
    expect(result.current.isError).toBe(false);
  });

  it('should return undefined ogp if fetcher rejects', async () => {
    const fetcher = jest.fn().mockRejectedValue(new Error('fail'));
    const { result } = renderHook(() =>
      useOGP({ href: 'https://www.google.com/search?q=should return undefined ogp if fetcher rejects', isOnlyChild: true, fetcher })
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    }, { timeout: 1000 });
    
    expect(result.current.ogp).toBeUndefined();
    expect(result.current.isError).toBe(true);
  });
});
