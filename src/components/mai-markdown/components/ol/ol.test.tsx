'use strict';
import { afterEach, beforeEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

import {
  ol as Ol,
} from './ol';

describe('Ol', () => {
  beforeEach(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders an <ol> element', () => {
    render(<Ol />);
    const ol = screen.getByRole('list');
    expect(ol.tagName).toBe('OL');
  });

  it('applies default class names', () => {
    render(<Ol />);
    const ol = screen.getByRole('list');
    expect(ol).toHaveClass(
      'pl-4',
      'list-inside',
      'list-decimal',
      '[&_ol]:list-[upper-roman]',
      '[&_ol_ol]:list-[lower-roman]',
      '[&_ol_ol_ol]:list-[upper-alpha]',
      '[&_ol_ol_ol_ol]:list-[lower-alpha]'
    );
  });

  it('forwards additional props to the <ol> element', () => {
    render(<Ol data-testid="custom-ol" id="test-ol" />);
    const ol = screen.getByTestId('custom-ol');
    expect(ol).toHaveAttribute('id', 'test-ol');
  });

  it('renders children correctly', () => {
    render(
      <Ol>
        <li>Item 1</li>
        <li>Item 2</li>
      </Ol>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('ignores the node prop if provided', () => {
    // @ts-expect-error: node prop is not part of OlHTMLAttributes
    render(<Ol node="should be ignored"><li>Item</li></Ol>);
    expect(screen.getByText('Item')).toBeInTheDocument();
  });
});
