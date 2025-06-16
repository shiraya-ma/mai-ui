'use strict';
import { afterEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';

import {
  blockquote as Blockquote,
} from './block-quote';

describe('Blockquote', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders a blockquote element by default', () => {
    render(<Blockquote data-testid="test-quote">Test quote</Blockquote>);
    const blockquote = screen.getByTestId('test-quote');
    expect(blockquote.tagName.toLowerCase()).toBe('blockquote');
    expect(blockquote).toHaveClass('block');
    expect(blockquote).toHaveClass('pl-4');
    expect(blockquote).toHaveClass('border-l-4');
  });

  it('applies user className to blockquote', () => {
    render(<Blockquote className="custom-class" data-testid="test-quote">Content</Blockquote>);
    const blockquote = screen.getByTestId('test-quote');
    expect(blockquote).toHaveClass('custom-class');
  });

  it('renders Alert when data-alert-level is provided', () => {
    render(
      <Blockquote data-alert-level="warning" data-testid="test-quote">
        Alert quote
      </Blockquote>
    );
    // Alert component should render as a role="alert"
    const alert = screen.getByTestId('test-quote');
    expect(alert.closest('[role="alert"]')).not.toBeNull();
  });

  it('passes className to Alert when data-alert-level is provided', () => {
    render(
      <Blockquote data-alert-level="danger" className="alert-class" data-testid="test-quote">
        Danger alert
      </Blockquote>
    );
    const alert = screen.getByTestId('test-quote');
    expect(alert.className).toMatch(/alert-class/);
  });

  it('forwards other props to blockquote', () => {
    render(
      <Blockquote cite="https://example.com" title="A quote" data-testid="test-quote">
        Cited quote
      </Blockquote>
    );
    const blockquote = screen.getByTestId('test-quote');
    expect(blockquote).toHaveAttribute('cite', 'https://example.com');
    expect(blockquote).toHaveAttribute('title', 'A quote');
  });

  it('forwards other props to Alert', () => {
    render(
      <Blockquote data-alert-level="success" title="Success alert" data-testid="test-quote">
        Success!
      </Blockquote>
    );
    const alert = screen.getByTestId('test-quote');
    expect(alert).toHaveAttribute('title', 'Success alert');
  });
});