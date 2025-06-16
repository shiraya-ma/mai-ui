'use strict';
import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, renderHook } from '@testing-library/react';

import { useMaiLink } from './use-mai-link';

describe('useMaiLink', () => {
  afterEach(() => {
    cleanup();
  });

  it('should return the correct href when given a valid input', () => {
    const { result } = renderHook(() => useMaiLink({ href: '/home' }));
    expect(result.current.href).toBe('/home');
  });

  it('should handle empty input gracefully', () => {
    const { result } = renderHook(() => useMaiLink({ href: '' }));
    expect(result.current.href).toBe('');
  });
});
