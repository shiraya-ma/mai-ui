'use strict';
import {afterEach,  beforeEach, describe, expect, it, mock } from 'bun:test';

import { isPreferThemeDark } from './internal';

describe('isPreferThemeDark', () => {
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('should return true when prefers-color-scheme is dark', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.matchMedia as any) = mock((query: unknown) => ({
      matches: query === '(prefers-color-scheme: dark)',
      addListener: mock(() => {}),
      removeListener: mock(() => {}),
    }));

    expect(isPreferThemeDark()).toBe(true);
  });

  it('should return false when prefers-color-scheme is light', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.matchMedia as any) = mock((query: unknown) => ({
      matches: query === '(prefers-color-scheme: light)',
      addListener: mock(() => {}),
      removeListener: mock(() => {}),
    }));

    expect(isPreferThemeDark()).toBe(false);
  });

  it('should return false when window is undefined', () => {
    const originalWindow = global.window;
    // @ts-expect-error for test
    delete global.window;

    expect(isPreferThemeDark()).toBe(false);

    global.window = originalWindow;
  });
});
