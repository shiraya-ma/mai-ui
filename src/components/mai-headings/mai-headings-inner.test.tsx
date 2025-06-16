'use strict';
import { afterEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';

import { MaiHeadingsInner } from './mai-headings-inner';

describe('MaiHeadingsInner', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders children', () => {
    render(<MaiHeadingsInner>Test Heading</MaiHeadingsInner>);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('applies className to text span', () => {
    render(<MaiHeadingsInner className="custom-class">Heading</MaiHeadingsInner>);
    const span = screen.getByText('Heading').closest('span');
    expect(span).toHaveClass('custom-class');
  });

  it('applies classNames.text to text span', () => {
    render(
      <MaiHeadingsInner classNames={{ text: 'text-class' }}>
        Heading
      </MaiHeadingsInner>
    );
    const span = screen.getByText('Heading').closest('span');
    expect(span).toHaveClass('text-class');
  });

  it('renders startIcon and endIcon', () => {
    render(
      <MaiHeadingsInner startIcon={<span data-testid="start" />} endIcon={<span data-testid="end" />}>
        Heading
      </MaiHeadingsInner>
    );
    expect(screen.getByTestId('start')).toBeInTheDocument();
    expect(screen.getByTestId('end')).toBeInTheDocument();
  });

  it('renders MaiLink with correct href and classNames.link when id is provided', () => {
    render(
      <MaiHeadingsInner id="section1" classNames={{ link: 'link-class' }}>
        Heading
      </MaiHeadingsInner>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#section1');
    expect(link).toHaveClass('link-class');
  });

  it('does not render MaiLink when id is not provided', () => {
    render(<MaiHeadingsInner>Heading</MaiHeadingsInner>);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('passes classNames.icon to Link45deg', () => {
    render(
      <MaiHeadingsInner
        classNames={{icon: {base: 'icon-root'}}}
        id="mai-heading-icon"
      >
        Heading
      </MaiHeadingsInner>
    );

    const link = screen.getByRole('link');
    const icon = link.querySelector('[data-slot="icon"]');
    expect(icon).toBeInTheDocument();
  });
});
