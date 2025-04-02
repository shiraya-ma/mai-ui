'use strict';
import { afterEach,  beforeEach, describe, expect, it, mock, spyOn } from 'bun:test';

import {
  isPreferThemeDark,
  store,
} from './internal';

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

describe('store', () => {
  const originalLS = window.localStorage;

  beforeEach(() => {
    let store: Record<string, string> = {};

    spyOn(localStorage, 'getItem').mockImplementation((key: string) => store[key] || null);

    spyOn(localStorage, 'setItem').mockImplementation((key: string, value: string) => {
      store[key] = value;
    });

    spyOn(localStorage, 'removeItem').mockImplementation((key: string) => {
      delete store[key];
    });

    spyOn(localStorage, 'clear').mockImplementation(() => {
      store = {};
    });
  });

  afterEach(() => {
    spyOn(localStorage, 'getItem').mockImplementation(originalLS.getItem);
    spyOn(localStorage, 'setItem').mockImplementation(originalLS.setItem);
    spyOn(localStorage, 'removeItem').mockImplementation(originalLS.removeItem);
    spyOn(localStorage, 'clear').mockImplementation(originalLS.clear);
  });

  it('should return default theme when localStorage is empty', () => {
    const defaultTheme = {
      isDark: false,
      isSystem: true,
    };

    expect(store.get()).toEqual(defaultTheme);
  });

  it('should return stored theme when localStorage has a value', () => {
    const storedTheme = {
      isDark: true,
      isSystem: false,
    };
    localStorage.setItem('mai-ui-theme-v2', JSON.stringify(storedTheme));

    expect(store.get()).toEqual(storedTheme);
  });

  it('should store theme in localStorage', () => {
    const newTheme = {
      isDark: true,
      isSystem: false,
    };

    store.set(newTheme);

    expect(localStorage.getItem('mai-ui-theme-v2')).toEqual(JSON.stringify(newTheme));
  });

  // TODO
  it('should return default theme when window is undefined', () => {
    const originalWindow = global.window;
    // @ts-expect-error for test
    delete global.window;

    const defaultTheme = {
      isDark: false,
      isSystem: true,
    };

    expect(store.get()).toEqual(defaultTheme);

    global.window = originalWindow;
  });

  it('should do nothing when set is called with null', () => {
    store.set(null);

    expect(localStorage.getItem('mai-ui-theme-v2')).toBeNull();
  });
});
