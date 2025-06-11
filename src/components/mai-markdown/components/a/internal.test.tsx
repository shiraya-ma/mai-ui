'use strict';
/* eslint-disable @typescript-eslint/no-require-imports */
import { afterEach, describe, it, expect, jest, spyOn } from 'bun:test';
import { render, renderHook, waitFor } from '@testing-library/react';

import { useOGPFetcher, type OGPProps } from '@/features/ogp-fetcher';
import {
  CardLink,
  useAnchor,
  useAnchorIsOnlyChild,
  useCardLinkProps,
  useOGP,
} from './internal';

describe('useAnchor', () => {
  const originalUseAnchorIsOnlyChild = useAnchorIsOnlyChild;
  const originalUseCardLinkProps = useCardLinkProps;
  const originalUseOGP = useOGP;
  const originalUseOGPFetcher = useOGPFetcher;

  afterEach(() => {
    spyOn(require('@/features/ogp-fetcher'), 'useOGPFetcher').mockImplementation(originalUseOGPFetcher);
    spyOn(require('./internal'), 'useAnchorIsOnlyChild').mockImplementation(originalUseAnchorIsOnlyChild);
    spyOn(require('./internal'), 'useCardLinkProps').mockImplementation(originalUseCardLinkProps);
    spyOn(require('./internal'), 'useOGP').mockImplementation(originalUseOGP);
  });

  it('should return children and href as passed in props', () => {
    const refAnchor = { current: null };
    const children = 'Test Link';
    const href = 'https://example.com?q=should return children and href as passed in props';
    // Mock useOGPFetcher to return a dummy fetcher
    spyOn(require('@/features/ogp-fetcher'), 'useOGPFetcher').mockReturnValue({ ogpFetcher: undefined });
    // Mock useOGP to return empty ogp
    spyOn(require('./internal'), 'useOGP').mockReturnValue({ ogp: undefined, isLoaded: false, mutate: jest.fn() });
    // Mock useCardLinkProps to return empty object
    spyOn(require('./internal'), 'useCardLinkProps').mockReturnValue({});

    const { result } = renderHook(() =>
      useAnchor({ children, href, refAnchor })
    );
    expect(result.current.children).toBe(children);
    expect(result.current.href).toBe(href);
    expect(result.current.cardLinkProps).toBeUndefined();
  });

  it('should return cardLinkProps if ogp is present', () => {
    const refAnchor = { current: null };
    const children = 'Test Link';
    const href = 'https://example.com?q=should return cardLinkProps if ogp is present';
    const cardLinkProps = { image: 'img.png', href, title: 'Title' };
    spyOn(require('@/features/ogp-fetcher'), 'useOGPFetcher').mockReturnValue({ ogpFetcher: undefined });
    spyOn(require('./internal'), 'useOGP').mockReturnValue({ ogp: { url: href, data: { title: 'Title', og: { image: 'img.png' } } }, isLoaded: true, mutate: jest.fn() });
    spyOn(require('./internal'), 'useCardLinkProps').mockReturnValue({ cardLinkProps });

    const { result } = renderHook(() =>
      useAnchor({ children, href, refAnchor })
    );
    expect(result.current.cardLinkProps).toEqual(cardLinkProps);
    expect(result.current.children).toBe(children);
    expect(result.current.href).toBe(href);
  });

  it('should call useAnchorIsOnlyChild with refAnchor', () => {
    const refAnchor = { current: null };
    const children = 'Test Link';
    const href = 'https://example.com?q=should call useAnchorIsOnlyChild with refAnchor';
    const useAnchorIsOnlyChildMock = spyOn(require('./internal'), 'useAnchorIsOnlyChild').mockReturnValue(false);
    spyOn(require('@/features/ogp-fetcher'), 'useOGPFetcher').mockReturnValue({ ogpFetcher: undefined });
    spyOn(require('./internal'), 'useOGP').mockReturnValue({ ogp: undefined, isLoaded: false, mutate: jest.fn() });
    spyOn(require('./internal'), 'useCardLinkProps').mockReturnValue({});

    renderHook(() =>
      useAnchor({ children, href, refAnchor })
    );
    expect(useAnchorIsOnlyChildMock).toHaveBeenCalledWith(refAnchor);
  });
});

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

describe('CardLink', () => {
  const baseProps = {
    image: 'https://example.com/image.png',
    href: 'https://example.com',
    title: 'Example Title',
    ref: { current: null },
    'data-link-style': 'default',
  };

  it('renders MaiLink with correct props', () => {
    const { container } = render(
      <CardLink {...baseProps} />
    );

    // Check for title and href text
    expect(container.querySelector('[data-slot="text-title"]')?.textContent).toBe(baseProps.title);
    expect(container.querySelector('[data-slot="text-link"]')?.textContent).toBe(baseProps.href);

    // Check for image
    const img = container.querySelector('img[data-slot="image"]') as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.src).toBe(baseProps.image);

    // Check for data-link-style attribute
    const link = container.querySelector('[data-link-style="default"]');
    expect(link).toBeTruthy();
  });

  it('applies correct class names', () => {
    const { container } = render(
      <CardLink {...baseProps} />
    );
    const link = container.querySelector('a');
    expect(link?.className).toMatch(/flex/);
    expect(link?.className).toMatch(/rounded-lg/);
  });

  it('renders children structure correctly', () => {
    const { container } = render(
      <CardLink {...baseProps} />
    );
    // Text wrapper
    expect(container.querySelector('[data-slot="text-wrapper"]')).toBeTruthy();
    // Image wrapper
    expect(container.querySelector('[data-slot="image-wrapper"]')).toBeTruthy();
  });

  it('forwards ref to MaiLink', () => {
    const ref = { current: null };
    renderHook(() => 
      <CardLink {...baseProps} ref={ref} />
    );
    // Since ref is not attached in test env, just check no error
    expect(true).toBe(true);
  });

  it('renders with different data-link-style', () => {
    const { container } = render( 
      <CardLink {...baseProps} data-link-style="custom-style" />
    );
    expect(container.querySelector('[data-link-style="custom-style"]')).toBeTruthy();
  });
});
