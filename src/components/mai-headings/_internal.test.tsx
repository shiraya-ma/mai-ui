'use strict';
import { describe, it, expect } from 'bun:test';
import { renderHook } from '@testing-library/react';
import { type PropsWithChildren } from 'react';

import { useMaiHeadings, useMaiHeadingsStyleContext } from './_internal';
import { MaiHeadingsStyleProvider } from './mai-headings-style-provider';

describe('useMaiHeadings', () => {
  const withoutContextWrapper = ({children}: PropsWithChildren) => (<>{children}</>);

  it('returns default values when no props are provided', () => {
    const result = renderHook(() => useMaiHeadings({}, 1), {wrapper: withoutContextWrapper}).result.current;
    expect(result.children).toBeUndefined();
    expect(result.classNames).toEqual({
      base: '',
      text: '',
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
    expect(result.classNames.text).toBe('custom-text');
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
