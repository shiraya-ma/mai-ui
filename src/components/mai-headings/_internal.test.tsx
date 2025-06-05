'use strict';
import { describe, it, expect } from 'bun:test';

import { _fixChildren } from './_internal';

describe('_fixChildren', () => {
  it('returns undefined for undefined or null', () => {
    expect(_fixChildren(undefined)).toBeUndefined();
    expect(_fixChildren(null)).toBeUndefined();
  });

  it('returns trimmed string for string child', () => {
    expect(_fixChildren('  Hello World  ')).toBe('Hello World');
  });

  it('returns string for number, bigint, boolean', () => {
    expect(_fixChildren(123)).toBe('123');
    expect(_fixChildren(BigInt(456))).toBe('456');
    expect(_fixChildren(true)).toBe('true');
    expect(_fixChildren(false)).toBe('false');
  });

  it('joins multiple simple children with space', () => {
    expect(_fixChildren(['foo', 42, false])).toBe('foo 42 false');
  });

  it('recursively extracts text from nested React elements', () => {
    const element = (
      <span>
        Hello <b>World</b>
      </span>
    );
    expect(_fixChildren(element)).toBe('Hello World');
  });

  it('handles deeply nested children', () => {
    const element = (
      <div>
        <span>
          <b>foo</b>
          <i>bar</i>
        </span>
        <span>baz</span>
      </div>
    );
    expect(_fixChildren(element)).toBe('foo bar baz');
  });

  it('returns empty string for elements with no children', () => {
    const element = <span />;
    expect(_fixChildren(element)).toBe('');
  });

  it('ignores undefined/null children in arrays', () => {
    expect(_fixChildren(['foo', undefined, null, 'bar'])).toBe('foo bar');
  });

  it('handles fragments', () => {
    const element = (
      <>
        Hello
        <span>World</span>
      </>
    );
    expect(_fixChildren(element)).toBe('Hello World');
  });
});
