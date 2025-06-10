'use strict';
import { describe, it, expect } from 'bun:test';
import { renderHook } from '@testing-library/react';

import {
  useAnchorIsOnlyChild,
} from './internal';

describe('useAnchorIsOnlyChild', () => {
  it('should return false when refAnchor.current is null', () => {
    const ref = { current: null };
    const { result } = renderHook(() => useAnchorIsOnlyChild(ref));
    expect(result.current).toBe(false);
  });

  it('should return true if anchor is the only child of its parent', () => {
    const parent = document.createElement('div');
    const anchor = document.createElement('a');
    parent.appendChild(anchor);
    const ref = { current: anchor };
    document.body.appendChild(parent);

    const { result } = renderHook(() => useAnchorIsOnlyChild(ref));
    expect(result.current).toBe(true);

    document.body.removeChild(parent);
  });

  it('should return false if anchor has siblings', () => {
    const parent = document.createElement('div');
    const anchor = document.createElement('a');
    const sibling = document.createElement('span');
    parent.appendChild(anchor);
    parent.appendChild(sibling);
    const ref = { current: anchor };
    document.body.appendChild(parent);

    const { result } = renderHook(() => useAnchorIsOnlyChild(ref));
    expect(result.current).toBe(false);

    document.body.removeChild(parent);
  });

  it('should return false if anchor is not the first child', () => {
    const parent = document.createElement('div');
    const sibling = document.createElement('span');
    const anchor = document.createElement('a');
    parent.appendChild(sibling);
    parent.appendChild(anchor);
    const ref = { current: anchor };
    document.body.appendChild(parent);

    const { result } = renderHook(() => useAnchorIsOnlyChild(ref));
    expect(result.current).toBe(false);

    document.body.removeChild(parent);
  });
});
