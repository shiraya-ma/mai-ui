'use strict';
import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';

import { MaiCodeBlock } from './mai-code-block';

describe('MaiCodeBlock', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders code content', () => {
    render(
      <MaiCodeBlock language="javascript" dataTestID='test-code-block'>
        {`console.log('Hello, world!');`}
      </MaiCodeBlock>
    );
    const codeblock = screen.getByTestId('test-code-block');
    expect(codeblock).toBeInTheDocument();
  });

  it('renders filename when provided', () => {
    render(
      <MaiCodeBlock filename="test.js" language="javascript">
        {`console.log('test');`}
      </MaiCodeBlock>
    );
    expect(screen.getByText('test.js')).toBeInTheDocument();
  });

  it('does not render filename when not provided', () => {
    render(
      <MaiCodeBlock language="javascript" dataTestID='test-code-block'>
        {`console.log('no filename');`}
      </MaiCodeBlock>
    );
    const codeblock = screen.getByTestId('test-code-block');
    expect(codeblock.getAttribute('data-with-filename')).toEqual('false');
  });

  it('applies custom className', () => {
    render(
      <MaiCodeBlock className="custom-class" language="javascript" dataTestID='test-code-block'>
        {`console.log('class');`}
      </MaiCodeBlock>
    );
    const codeblock = screen.getByTestId('test-code-block');
    expect(codeblock).toHaveClass('custom-class');
  });

  it('renders with Prism when isPrism is true', () => {
    const prismStyle = { 'code[class*="language-"]': { color: '#fff' } };
    render(
      <MaiCodeBlock style={prismStyle} language="javascript" dataTestID='test-code-block'>
        {`console.log('prism');`}
      </MaiCodeBlock>
    );
    // Should have data-style="prism"
    const codeblock = screen.getByTestId('test-code-block');
    const pre = codeblock.querySelector('pre');
    expect(pre).toHaveAttribute('data-style', 'prism');
  });

  it('renders with hljs when isPrism is false', () => {
      const hljsStyle = { hljs: { color: '#333' } };
    render(
      <MaiCodeBlock style={hljsStyle} language="javascript" dataTestID='test-code-block'>
        {`console.log('hljs');`}
      </MaiCodeBlock>
    );
    // Should have data-style="prism"
    const codeblock = screen.getByTestId('test-code-block');
    const pre = codeblock.querySelector('pre');
    expect(pre).toHaveAttribute('data-style', 'hljs');
  });

  it('applies custom classNames to filename and code', () => {
    render(
      <MaiCodeBlock
        filename="file.ts"
        language="typescript"
        classNames={{
          filename: 'custom-filename',
          code: 'custom-code',
        }}
        dataTestID='test-code-block'
      >
        {`let x: number = 1;`}
      </MaiCodeBlock>
    );
    const codeblock = screen.getByTestId('test-code-block');
    const filename = codeblock.querySelector('[data-slot="filename"]');
    const code = codeblock.querySelector('code');
    expect(filename).toHaveClass('custom-filename');
    expect(code).toHaveClass('custom-code');
  });
});
