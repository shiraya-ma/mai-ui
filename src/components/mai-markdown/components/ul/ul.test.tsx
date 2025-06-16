'use strict';
import { afterEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';

import {
  ul as Ul,
} from './ul';

describe('Ul', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders an <ol> element', () => {
    render(<Ul />);
    const ol = screen.getByRole('list');
    expect(ol.tagName).toBe('UL');
  });

  it('applies default class names', () => {
    render(<Ul />);
    const ol = screen.getByRole('list');
    expect(ol).toHaveClass(
      'pl-4 list-inside list-disc',
      '[&_ul]:list-[circle]',
      '[&_ul_ul]:list-[square]',
    );
  });

  it('forwards additional props to the <ol> element', () => {
    render(<Ul data-testid="custom-ol" id="test-ol" />);
    const ol = screen.getByTestId('custom-ol');
    expect(ol).toHaveAttribute('id', 'test-ol');
  });

  it('renders children correctly', () => {
    render(
      <Ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </Ul>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('ignores the node prop if provided', () => {
    // @ts-expect-error: node prop is not part of UlHTMLAttributes
    render(<Ul node="should be ignored"><li>Item</li></Ul>);
    expect(screen.getByText('Item')).toBeInTheDocument();
  });
});
