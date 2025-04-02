'use strict';
import { afterEach,  beforeEach, describe, expect, it, mock, spyOn } from 'bun:test';
import React, { createElement, PropsWithChildren } from 'react';
import { act, renderHook, waitFor } from '@testing-library/react';

import {
  isPreferThemeDark,
  store,
  usePreferThemeObserver,
  useThemeContextProvider,
} from './internal';
import { ThemeContextProvider } from './theme-context-provider';

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

describe('usePreferThemeObserver', () => {
  const originalMatchMedia = window.matchMedia;
  const originalDebug      = window.console.debug;
  const wrapper = ({children}: PropsWithChildren) => (<ThemeContextProvider>{children}</ThemeContextProvider>);

  beforeEach(() => {
    // Mock console.debug
    spyOn(console, 'debug').mockImplementation(() => {});
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;

    spyOn(console, 'debug').mockImplementation(originalDebug);
  });

  it('should initialize with the correct theme based on system preference', () => {
    // Mock matchMedia to simulate system preference
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.matchMedia as any) = mock((query: string) => ({
      matches: query === '(prefers-color-scheme: dark)',
      addEventListener: mock(() => {}),
      removeEventListener: mock(() => {}),
    }));

    const { result } = renderHook(() => usePreferThemeObserver({}), {wrapper});

    expect(result.current.theme).toEqual({
      isDark  : false,  // System preference is dark
      isSystem: true,
    });
  });

  it('should update theme when system preference changes', async () => {
    const { result } = renderHook(() => usePreferThemeObserver({}), {wrapper});

    act(() => window.maiUI!.togglePreferThemeDark!(false));
    await waitFor(() => expect(result.current.theme).toEqual({
      isDark: false,
      isSystem: true,
    }));
    
    act(() => window.maiUI!.togglePreferThemeDark!(true));
    await waitFor(() => expect(result.current.theme).toEqual({
      isDark: true,
      isSystem: true,
    }));

    act(() => window.maiUI!.togglePreferThemeDark!(false));
    await waitFor(() => expect(result.current.theme).toEqual({
      isDark: false,
      isSystem: true,
    }));
  });
});

describe('useThemeContextProvider', () => {
  const originalLS = window.localStorage;
  const originalHTML = window.document.documentElement;
  const originalDebug = window.console.debug;

  beforeEach(() => {
    // Mock localStorage
    const store: Record<string, string> = {};
    spyOn(localStorage, 'getItem').mockImplementation((key: string) => store[key] || null);
    spyOn(localStorage, 'setItem').mockImplementation((key: string, value: string) => {
      store[key] = value;
    });
    spyOn(localStorage, 'removeItem').mockImplementation((key: string) => {
      delete store[key];
    });

    localStorage.removeItem('mai-ui-theme-v2');

    // Mock document.documentElement
    Object.defineProperty(document, 'documentElement', {
      value: {
        ...originalHTML,
        classList: {
          add: mock(originalHTML.classList.add),
          remove: mock(originalHTML.classList.remove),
          toggle: mock(originalHTML.classList.toggle),
        },
        setAttribute: mock(originalHTML.setAttribute),
        removeAttribute: mock(originalHTML.removeAttribute),
      },
      writable: true,
    });

    // Mock console.debug
    spyOn(console, 'debug').mockImplementation(() => {});
  });

  afterEach(() => {
    spyOn(localStorage, 'getItem').mockImplementation(originalLS.getItem);
    spyOn(localStorage, 'setItem').mockImplementation(originalLS.setItem);
    spyOn(localStorage, 'removeItem').mockImplementation(originalLS.removeItem);

    Object.defineProperty(document, 'documentElement', {
      value: originalHTML,
      writable: true,
    });

    spyOn(console, 'debug').mockImplementation(originalDebug);
  });

  it('should initialize with the stored theme', () => {
    const storedTheme = { isDark: true, isSystem: false };
    localStorage.setItem('mai-ui-theme-v2', JSON.stringify(storedTheme));

    const wrapper = ({ children }: { children: React.ReactNode }) =>
      createElement('div', {}, children);

    const { result } = renderHook(() => useThemeContextProvider({ disabledTheme: false }), {
      wrapper,
    });
    const { context } = result.current;

    expect(context.theme).toEqual(storedTheme);
  });

  it('should update theme and store it in localStorage', async () => {
    const { result } = renderHook(() => useThemeContextProvider({ disabledTheme: false }));
    const { context } = result.current;

    const newTheme = { isDark: true, isSystem: false };
    context.updateTheme(newTheme);

    expect(localStorage.getItem('mai-ui-theme-v2')).toEqual(JSON.stringify(newTheme));
    await waitFor(() => expect(result.current.context.theme).toEqual(newTheme));
  });

  it('should not update theme if disabledTheme is true', async () => {
    const { result } = renderHook(() => useThemeContextProvider({ disabledTheme: true }));
    const { context } = result.current;

    const newTheme = { isDark: true, isSystem: false };
    context.updateTheme(newTheme);

    expect(localStorage.getItem('mai-ui-theme-v2')).toBeNull();
    await waitFor(() => expect(result.current.context.theme).not.toEqual(newTheme));
  });

  it('should update theme by system preference', async () => {
    const { result } = renderHook(() => useThemeContextProvider({ disabledTheme: false }));
    const { context } = result.current;

    context.updateThemeBySystem(true);
    
    await waitFor(() => expect(result.current.context.theme).toEqual({ isDark: true, isSystem: true }));
  });

  it('should update theme by user preference', async () => {
    const { result } = renderHook(() => useThemeContextProvider({ disabledTheme: false }));
    const { context } = result.current;

    context.updateThemeByUser(false);

    await waitFor(() => expect(result.current.context.theme).toEqual({ isDark: false, isSystem: false }));
  });

  it('should toggle dark class on document.documentElement', async () => {
    const { result } = renderHook(() => useThemeContextProvider({ disabledTheme: false }));
    const { context } = result.current;

    context.updateTheme({ isDark: true, isSystem: false });

    await waitFor(() => expect(document.documentElement.classList.toggle).toHaveBeenCalledWith('dark', true));
    await waitFor(() => expect(document.documentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'dark'));
  });
});
