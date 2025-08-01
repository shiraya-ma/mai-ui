'use strict';
import { afterEach, describe, it, expect } from 'bun:test';
import { cleanup, render } from '@testing-library/react';

import { CardLink } from './card-link';

describe('CardLink', () => {  
  afterEach(() => {
    cleanup();
  });

  it('renders with title, href, and image', () => {
    const { getByText, getByAltText } = render(
      <CardLink
        title="Test Title"
        href="https://example.com"
        image="https://example.com/image.png"
        isLoading={false}
        isError={false}
      />
    );
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('https://example.com')).toBeInTheDocument();
    expect(getByAltText('Test Title')).toHaveAttribute('src', 'https://example.com/image.png');
  });

  it('shows href as title when isError is true', () => {
    const { getByText } = render(
      <CardLink
        title={undefined}
        href="https://error.com"
        isError={true}
        isLoading={false}
      />
    );
    expect(getByText('https://error.com')).toBeInTheDocument();
  });

  it('shows skeletons when loading', () => {
    render(
      <CardLink
        title="Loading Title"
        href="https://loading.com"
        isLoading={true}
        isError={false}
      />
    );
    // Skeletons use data-loading attribute
    expect(document.querySelectorAll('[data-loading="true"]').length).toBeGreaterThan(0);
  });

  it('renders fallback text when title and href are missing', () => {
    const { getByText } = render(
      <CardLink isLoading={true} isError={false} data-href='loading'/>
    );
    expect(getByText('loading')).toBeInTheDocument();
  });

  it('passes anchor props to MaiLink', () => {
    const { getByRole } = render(
      <CardLink
        title="Anchor Test"
        href="https://anchor.com"
        target="_blank"
        rel="noopener"
        isLoading={false}
        isError={false}
      />
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', 'https://anchor.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener');
  });
});
