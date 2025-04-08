'use client';
import { afterEach,  beforeEach, describe, expect, it, mock } from 'bun:test';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiLink } from './mai-link';

describe('MaiLink Component', () => {  
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders correctly with internal link', () => {
    render(<MaiLink href="/">Home</MaiLink>);
    const linkElement = screen.getByText('Home');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
    expect(linkElement).not.toHaveAttribute('data-is-external', 'true');
  });

  it('renders correctly with external link', () => {
    render(<MaiLink href="https://www.google.com" isExternal>Google</MaiLink>);
    const linkElement = screen.getByText('Google');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://www.google.com');
    expect(linkElement).toHaveAttribute('data-is-external', 'true');
  });

  it('applies custom className', () => {
    render(<MaiLink href="/" className="custom-class">Home</MaiLink>);
    const linkElement = screen.getByText('Home');
    expect(linkElement).toHaveClass('custom-class');
  });

  it('handles click events', () => {
    const handlePress = mock();
    render(<MaiLink href="/" onPress={handlePress}>Home</MaiLink>);
    const linkElement = screen.getByText('Home');
    fireEvent.click(linkElement);
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it('renders with additional props', () => {
    render(<MaiLink href="/" aria-label="Home Link">Home</MaiLink>);
    const linkElement = screen.getByText('Home');
    expect(linkElement).toHaveAttribute('aria-label', 'Home Link');
  });
});
