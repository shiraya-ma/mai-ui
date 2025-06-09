'use strict';
import { describe, it, expect } from 'bun:test';
import { renderHook } from '@testing-library/react';
import { type PropsWithChildren } from 'react';

import { useMaiHeadings, useMaiHeadingsStyleContext, _fixChildren } from './_internal';
import { MaiHeadingsStyleProvider } from './mai-headings-style-provider';

describe('useMaiHeadings', () => {
  const withoutContextWrapper = ({children}: PropsWithChildren) => (<>{children}</>);

  it('returns default values when no props are provided', () => {
    const result = renderHook(() => useMaiHeadings({}, 1), {wrapper: withoutContextWrapper}).result.current;
    expect(result.children).toBeUndefined();
    expect(result.classNames).toEqual({
      base: '',
      text: 'text-foreground',
      link: '',
      icon: { anchor: '', base: '' },
    });
    expect(result.color).toBe('foreground');
    expect(result.id).toBeUndefined();
  });

  it('should apply custom id if provided', () => {
    const result = renderHook(() => useMaiHeadings({ id: 'custom-id'}, 1), {wrapper: withoutContextWrapper}).result.current;
    expect(result.id).toBe('custom-id');
  });

  it('generates ID from children', () => {
    const result = renderHook(() => useMaiHeadings({ children: 'Test Heading'}, 1), {wrapper: withoutContextWrapper}).result.current;
    expect(result.id).toBe('Test-Heading');
  });

  it('uses provided className and classNames', () => {
    const result = renderHook(() => useMaiHeadings({
      className: 'custom-class',
      classNames: { base: 'base-class', text: 'text-class' },
    }, 1), {wrapper: withoutContextWrapper}).result.current;
    expect(result.classNames.base).toBe('custom-class');
    expect(result.classNames.text).toBe('text-class');
  });

  it('sets color based on user input', () => {
    const result = renderHook(() => useMaiHeadings({ color: 'primary' }, 1), {wrapper: withoutContextWrapper}).result.current;
    expect(result.color).toBe('primary');
  });

  it('provides custom context styles', () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <MaiHeadingsStyleProvider context={{
        1: { base: 'custom-base', text: 'custom-text' },
      }}>
        {children}
      </MaiHeadingsStyleProvider>
    );
    const result = renderHook(() => useMaiHeadings({}, 1), {wrapper}).result.current;
    expect(result.classNames.base).toBe('custom-base');
    expect(result.classNames.text).toBe('custom-text text-foreground');
  });
});

describe('useMaiHeadingsStyleContext', () => {
  const withoutContextWrapper = ({children}: PropsWithChildren) => (<>{children}</>);

  it('returns default context when no props are provided', () => {
    const result = renderHook(() => useMaiHeadingsStyleContext({}), {wrapper: withoutContextWrapper}).result.current;
    expect(result.context[1]).toStrictEqual({
      base: '',
      text: '',
      link: '',
      icon: { base: '', anchor: '' },
    });
  });

  it('should apply custom context if provided', () => {
    const result = renderHook(() => useMaiHeadingsStyleContext({
      context: {
        1: {base: 'custom-base'}
      }
    }), {wrapper: withoutContextWrapper}).result.current;
    expect(result.context[1]).toStrictEqual({
      base: 'custom-base',
      text: '',
      link: '',
      icon: { base: '', anchor: '' },
    });
  });

  it('returns children and other props', () => {
    const children = <div>Test</div>;
    const result = renderHook(() => useMaiHeadingsStyleContext({ children }), {wrapper: withoutContextWrapper}).result.current;
    expect(result.children).toBe(children);
  });

  it('should provide context', () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <MaiHeadingsStyleProvider context={{
        1: { base: 'context-base', text: 'context-text' },
      }}>
        {children}
      </MaiHeadingsStyleProvider>
    );
    const result = renderHook(() => useMaiHeadingsStyleContext({ context: {
      1: { base: 'user-base', text: 'user-text' },
    } }), { wrapper }).result.current;
    expect(result.context[1]).toStrictEqual({
      base: 'context-base user-base',
      text: 'context-text user-text',
      link: '',
      icon: {anchor: '', base: ''},
    });
  });

  it('should provide nested context', () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <MaiHeadingsStyleProvider context={{
        1: { base: '_base-1', text: '_text-1' },
      }}>
        <MaiHeadingsStyleProvider context={{
          1: { base: '_base-2', text: '_text-2' },
        }}>
          {children}
        </MaiHeadingsStyleProvider>
      </MaiHeadingsStyleProvider>
    );
    const result = renderHook(() => useMaiHeadingsStyleContext({ context: {
      1: { base: 'user-base', text: 'user-text' },
    } }), { wrapper }).result.current;
    expect(result.context[1]).toStrictEqual({
      base: '_base-1 _base-2 user-base',
      text: '_text-1 _text-2 user-text',
      link: '',
      icon: {anchor: '', base: ''},
    });
  });
});

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
