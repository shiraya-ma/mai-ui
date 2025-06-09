'use strict';
import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import { render, screen, cleanup } from "@testing-library/react";
import * as matchers from '@testing-library/jest-dom/matchers';

import {
  h1 as H1,
  h2 as H2,
  h3 as H3,
  h4 as H4,
  h5 as H5,
  h6 as H6,
} from './h';

describe('h', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders H1 with correct text and level', () => {
    render(<H1>Heading 1</H1>);
    const text = screen.getByText('Heading 1');
    const heading = text.parentElement!;
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  it('renders H2 with correct text and level', () => {
    render(<H2>Heading 2</H2>);
    const text = screen.getByText('Heading 2');
    const heading = text.parentElement!;
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
  });

  it('renders H3 with correct text and level', () => {
    render(<H3>Heading 3</H3>);
    const text = screen.getByText('Heading 3');
    const heading = text.parentElement!;
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H3');
  });

  it('renders H4 with correct text and level', () => {
    render(<H4>Heading 4</H4>);
    const text = screen.getByText('Heading 4');
    const heading = text.parentElement!;
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H4');
  });

  it('renders H5 with correct text and level', () => {
    render(<H5>Heading 5</H5>);
    const text = screen.getByText('Heading 5');
    const heading = text.parentElement!;
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H5');
  });

  it('renders H6 with correct text and level', () => {
    render(<H6>Heading 6</H6>);
    const text = screen.getByText('Heading 6');
    const heading = text.parentElement!;
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H6');
  });
});