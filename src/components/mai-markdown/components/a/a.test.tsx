'use strict';
/* eslint-disable @typescript-eslint/no-require-imports */
import { afterEach, describe, it, expect, spyOn } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';

import {
  a as A,
} from './a';

import {
  useAnchor,
} from './internal';

describe('a', () => {
  const originalUseAnchor = useAnchor;

  afterEach(() => {
    cleanup();
    spyOn(require('./internal'), 'useAnchor').mockImplementation(originalUseAnchor);
  });

  it('renders MaiLink when cardLinkProps is not present', () => {
    render(<A href='/test' children='Test Link' data-testid='Test Link'/>);
    const link = screen.getByTestId('Test Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveAttribute('data-link-style', 'text');
  });

  it('renders CardLink when cardLinkProps is present', () => {
    // Mock useAnchor to return cardLinkProps
    spyOn(require('./internal'), 'useAnchor').mockImplementation(() => ({
      cardLinkProps: { href: '/card', image: 'image-link', title: 'Card Link', isLoading: false, isError: false },
      children: 'Card Link',
      href: '/card',
    }));
    
    render(<A href="/card" children='Card Link' data-testid='Card Link'/>);
    const link = screen.getByTestId('Card Link');
    const textTitle = link.querySelector('[data-slot="text-title"]');
    const textLink  = link.querySelector<HTMLElement>('[data-slot="text-link"]');
    const image     = link.querySelector<HTMLImageElement>('img[data-slot="image"]');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/card');
    expect(link).toHaveAttribute('data-link-style', 'card-link');
    expect(textTitle?.textContent).toBe('Card Link');
    expect(textLink?.textContent).toBe('/card');
    expect(image?.src).toBe('image-link');
  });

  it('renders CardLink with ogpFetcher failed', () => {
    // Mock useAnchor to return cardLinkProps
    spyOn(require('./internal'), 'useAnchor').mockImplementation(() => ({
      cardLinkProps: { href: undefined, image: undefined, title: undefined, isLoading: false, isError: true },
      children: 'Card Link',
      href: '/card',
    }));
    
    render(<A href="/card" children='Card Link' data-testid='Card Link'/>);
    const link = screen.getByTestId('Card Link') as HTMLAnchorElement;
    const textTitle = link.querySelector('[data-slot="text-title"]');
    const textLink  = link.querySelector<HTMLElement>('[data-slot="text-link"]');
    const image     = link.querySelector<HTMLImageElement>('img[data-slot="image"]');

    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('/card');
    expect(link).toHaveAttribute('data-link-style', 'card-link');
    expect(textTitle?.textContent).toBe('/card');
    expect(textLink?.textContent).toBeUndefined();
    expect(image?.src).toBeUndefined();
  });
});
