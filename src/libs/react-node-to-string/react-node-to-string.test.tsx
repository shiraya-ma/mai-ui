'use strict';
import { describe, it, expect } from 'bun:test';

import { reactNodeToString } from './react-node-to-string';

describe('reactNodeToString', () => {
  it('returns undefined for undefined or null', () => {
    expect(reactNodeToString(undefined)).toBeUndefined();
    expect(reactNodeToString(null)).toBeUndefined();
  });

  it('returns trimmed string for string child', () => {
    expect(reactNodeToString('  Hello World  ')).toBe('Hello World');
  });

  it('returns string for number, bigint, boolean', () => {
    expect(reactNodeToString(123)).toBe('123');
    expect(reactNodeToString(BigInt(456))).toBe('456');
    expect(reactNodeToString(true)).toBe('true');
    expect(reactNodeToString(false)).toBe('false');
  });

  it('joins multiple simple children with space', () => {
    expect(reactNodeToString(['foo', 42, false])).toBe('foo 42 false');
  });

  it('recursively extracts text from nested React elements', () => {
    const element = (
      <span>
        Hello <b>World</b>
      </span>
    );
    expect(reactNodeToString(element)).toBe('Hello World');
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
    expect(reactNodeToString(element)).toBe('foo bar baz');
  });

  it('returns empty string for elements with no children', () => {
    const element = <span />;
    expect(reactNodeToString(element)).toBe('');
  });

  it('ignores undefined/null children in arrays', () => {
    expect(reactNodeToString(['foo', undefined, null, 'bar'])).toBe('foo bar');
  });

  it('handles fragments', () => {
    const element = (
      <>
        Hello
        <span>World</span>
      </>
    );
    expect(reactNodeToString(element)).toBe('Hello World');
  });
});
