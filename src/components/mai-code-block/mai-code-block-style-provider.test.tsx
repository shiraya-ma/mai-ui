'use strict';
import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import { useContext } from 'react';

import { MaiCodeBlockStyleProvider } from './mai-code-block-style-provider';

describe('MaiCodeBlockStyleProvider', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders children correctly', () => {
    render(
      <MaiCodeBlockStyleProvider style={{ hljs: { color: 'red' } }}>
        <div data-testid="child">Hello</div>
      </MaiCodeBlockStyleProvider>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('provides the style context value', () => {
    let receivedStyle: unknown = null;
    function Consumer() {
      const ctx = useContext(
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('./_internal').MaiCodeBlockStyleContext
      );
      receivedStyle = ctx;
      return <span>Consumer</span>;
    }
    const styleValue = {
      hljs: { color: '#333' },
      'hljs-keyword': { fontWeight: 'bold' },
    };
    render(
      <MaiCodeBlockStyleProvider style={styleValue}>
        <Consumer />
      </MaiCodeBlockStyleProvider>
    );
    expect(receivedStyle).toEqual(styleValue);
  });

  it('sets displayName correctly', () => {
    expect(MaiCodeBlockStyleProvider.displayName).toBe('MaiCodeBlockStyleProvider');
  });
});
