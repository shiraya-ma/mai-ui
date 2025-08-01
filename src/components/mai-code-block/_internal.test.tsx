'use strict';
import { describe, it, expect } from 'bun:test';
import { renderHook } from '@testing-library/react';
import { type ReactNode } from 'react';

import {
  type MaiCodeBlockProps,
  type MaiCodeBlockStyle,
  MaiCodeBlockStyleContext,
  useMaiCodeBlock,
  _isPrism,
} from './_internal';

describe('useMaiCodeBlock', () => {
  // Helper to wrap hook with context provider
  function wrapperWithStyle(style: MaiCodeBlockStyle) {
    return ({ children }: { children: ReactNode }) => (
      <MaiCodeBlockStyleContext.Provider value={style}>
        {children}
      </MaiCodeBlockStyleContext.Provider>
    );
  }

  describe('useMaiCodeBlock', () => {
    it('returns default context style when no user style is provided', () => {
      const contextStyle = { foo: { color: 'red' } };
      const props: MaiCodeBlockProps = { language: 'js' };
      const { result } = renderHook(() => useMaiCodeBlock(props), {
        wrapper: wrapperWithStyle(contextStyle),
      });
      expect(result.current.style).toBe(contextStyle);
      expect(result.current.language).toBe('js');
      expect(result.current.wrapLines).toBe(true);
    });

    it('returns user style when provided', () => {
      const contextStyle = { foo: { color: 'red' } };
      const userStyle = { bar: { color: 'blue' } };
      const props: MaiCodeBlockProps = { style: userStyle, language: 'ts' };
      const { result } = renderHook(() => useMaiCodeBlock(props), {
        wrapper: wrapperWithStyle(contextStyle),
      });
      expect(result.current.style).toBe(userStyle);
      expect(result.current.language).toBe('ts');
    });

    it('correctly determines isPrism based on style', () => {
      const prismStyle = { 'code[class*="language-"]': { color: '#fff' } };
      const hljsStyle = { hljs: { color: '#333' } };

      let { result } = renderHook(() => useMaiCodeBlock({ style: prismStyle }), {
        wrapper: wrapperWithStyle({}),
      });
      expect(result.current.isPrism).toBe(true);

      ({ result } = renderHook(() => useMaiCodeBlock({ style: hljsStyle }), {
        wrapper: wrapperWithStyle({}),
      }));
      expect(result.current.isPrism).toBe(false);
    });

    it('passes through additional props', () => {
      const props: MaiCodeBlockProps = {
        children: 'console.log("hello")',
        className: 'my-code',
        filename: 'test.js',
        showLineNumbers: true,
        startLineNumber: 5,
      };
      const { result } = renderHook(() => useMaiCodeBlock(props), {
        wrapper: wrapperWithStyle({}),
      });
      expect(result.current.children).toBe('console.log("hello")');
      expect(result.current.className).toBe('my-code');
      expect(result.current.filename).toBe('test.js');
      expect(result.current.showLineNumbers).toBe(true);
      expect(result.current.startLineNumber).toBe(5);
    });
  });
});

describe('_isPrism', () => {
  it('returns true for Prism style (no hljs keys)', () => {
    const prismStyle = {
      'code[class*="language-"]': { color: '#fff' },
      'pre[class*="language-"]': { background: '#011627' },
    };
    expect(_isPrism(prismStyle)).toBe(true);
  });

  it('returns false for HLJS style (contains hljs keys)', () => {
    const hljsStyle = {
      hljs: { color: '#333' },
      'hljs-keyword': { fontWeight: 'bold' },
    };
    expect(_isPrism(hljsStyle)).toBe(false);
  });

  it('returns true for empty style object', () => {
    expect(_isPrism({})).toBe(true);
  });

  it('returns true for style with non-hljs keys', () => {
    const style = {
      foo: { color: 'red' },
      bar: { background: 'blue' },
    };
    expect(_isPrism(style)).toBe(true);
  });

  it('returns false if at least one key starts with hljs', () => {
    const style = {
      foo: { color: 'red' },
      hljsSomething: { background: 'blue' },
    };
    expect(_isPrism(style)).toBe(false);
  });
});
