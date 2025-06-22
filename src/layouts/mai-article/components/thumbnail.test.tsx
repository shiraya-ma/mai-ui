'use strict';
import { afterEach, describe, expect, it } from 'bun:test';
import { render, screen, cleanup } from "@testing-library/react";

import {
  MaiArticleThumbnail,
} from './thumbnail';

describe('MaiArticleThumbnail', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders with default alt text when alt is not provided', () => {
    render(<MaiArticleThumbnail src="test.jpg" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'thumbnail');
  });

  it('renders with provided alt text', () => {
    render(<MaiArticleThumbnail src="test.jpg" alt="Custom Alt" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Custom Alt');
  });

  it('applies custom className', () => {
    render(<MaiArticleThumbnail src="test.jpg" className="custom-class" />);
    const img = screen.getByRole('img');
    expect(img).toHaveClass('custom-class');
  });

  it('sets width and height attributes to 1200 and 630', () => {
    render(<MaiArticleThumbnail src="test.jpg" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('width', '1200');
    expect(img).toHaveAttribute('height', '630');
  });

  it('passes additional props to the Image component', () => {
    render(<MaiArticleThumbnail src="test.jpg" data-testid="thumbnail-img" />);
    const img = screen.getByTestId('thumbnail-img');
    expect(img).toBeInTheDocument();
  });

  it('sets data-slot attribute to thumbnail', () => {
    render(<MaiArticleThumbnail src="test.jpg" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('data-slot', 'thumbnail');
  });
});
