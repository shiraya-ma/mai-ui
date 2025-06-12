'use strict';
import { afterEach, beforeEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

import { pre as Pre } from './pre';

describe('Pre', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders code content as text', () => {
    render(<Pre>{'console.log("hello");'}</Pre>);
    expect(screen.getByText('console.log("hello");')).toBeInTheDocument();
  });

  it('passes filename and language props to MaiCodeBlock', () => {
    const { container } = render(
      <Pre data-filename="test.ts" data-language="typescript">
        {'let x = 1;'}
      </Pre>
    );
    expect(screen.getByText('test.ts')).toBeInTheDocument();
    // filename and language are not rendered directly, but you can check for their presence in the DOM if MaiCodeBlock renders them
    // For demonstration, let's assume MaiCodeBlock renders filename somewhere
    const code = container.children[0].children[1] as HTMLElement;
    expect(code.textContent).toBe('let x = 1;');
  });

  it('handles empty children gracefully', () => {
    render(<Pre />);
    // Should not throw and render nothing or empty string
    const base = document.querySelector('div[data-slot="base"]') as HTMLDivElement
    const pre  = base.children[0] as HTMLPreElement;
    const code = pre.children[0] as HTMLElement;
    expect(base).toBeInTheDocument();
    expect(pre).toBeInTheDocument();
    expect(code).toBeInTheDocument();
    expect(code.textContent).toBe('');
  });
});
