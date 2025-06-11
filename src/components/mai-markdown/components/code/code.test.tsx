'use strict';
import { afterEach, beforeEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

import { code as Code } from './code';

describe('code', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders inline code when data-inline is "true"', () => {
    render(
      <Code data-inline="true" className="test-class">
        inline code
      </Code>
    );
    const codeElement = screen.getByText('inline code');
    expect(codeElement).toBeInTheDocument();
    expect(codeElement).toHaveClass('font-code');
    expect(codeElement).toHaveClass('test-class');
  });

  it('renders children as plain text when data-inline is not "true"', () => {
    render(
      <Code>
        block code
      </Code>
    );
    const codeElement = screen.getByText('block code');
    expect(codeElement).toBeInTheDocument();
    // Should not have font-code class since HeroCode is not used
    expect(codeElement).not.toHaveClass('font-code');
  });

  it('renders children as plain text when data-inline is missing', () => {
    render(
      <Code>
        missing data-inline
      </Code>
    );
    const codeElement = screen.getByText('missing data-inline');
    expect(codeElement).toBeInTheDocument();
    expect(codeElement).not.toBe('CODE');
  });
});
