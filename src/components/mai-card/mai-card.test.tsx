'use strict';
import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import { render, screen, cleanup } from "@testing-library/react";
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiCard } from './mai-card';
import {
  MaiCardBody,
  MaiCardFooter,
  MaiCardHeader,
} from './mai-card-items';

describe('MaiCard', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });
  
  it('renders correctly with children', () => {
    render(
      <MaiCard>
        <MaiCardHeader>Header</MaiCardHeader>
        <MaiCardBody>Body</MaiCardBody>
        <MaiCardFooter>Footer</MaiCardFooter>
      </MaiCard>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('applies glassy styles when isGlassy is true', () => {
    const { container } = render(
      <MaiCard isGlassy>
        <MaiCardBody>Glassy Body</MaiCardBody>
      </MaiCard>
    );

    expect(container.firstChild).toHaveClass('border border-white bg-white/25 backdrop-blur-sm');
  });

  it('does not apply glassy styles when isGlassy is false', () => {
    const { container } = render(
      <MaiCard isGlassy={false}>
        <MaiCardBody>Non-Glassy Body</MaiCardBody>
      </MaiCard>
    );

    expect(container.firstChild).not.toHaveClass('border border-white bg-white/25 backdrop-blur-sm');
  });

  it('renders without crashing when no children are provided', () => {
    const { container } = render(<MaiCard />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
