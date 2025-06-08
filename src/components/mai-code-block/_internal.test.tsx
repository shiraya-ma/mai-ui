'use strict';
import { describe, it, expect } from 'bun:test';

import {
  _isPrism,
} from './_internal';

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
