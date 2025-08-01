'use strict';
/* eslint-disable @typescript-eslint/no-require-imports */
import { type PropsWithChildren, type ReactNode } from 'react';
import { afterEach, beforeEach, describe, it, expect, jest, spyOn } from 'bun:test';
import { render, renderHook, waitFor } from '@testing-library/react';
import { themes, ThemeVars } from 'storybook/internal/theming';
import * as StorybookBlocks from '@storybook/blocks';
import { Renderer } from 'storybook/internal/types';

import {
  configQuery,
  useCustomDocsContainer,
  CustomDocsContainer,
} from './_internal';

describe('configQuery', () => {
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('should return mediaQuery and onChangeQuery', () => {
    const { mediaQuery, onChangeQuery } = configQuery();
    expect(mediaQuery).toBeDefined();
    expect(onChangeQuery).toBeDefined();
  });

  describe('mediaQuery', () => {
    const originalWindow = globalThis.window;

    afterEach(() => {
      globalThis.window = originalWindow; // Restore original window object after each test
    });

    it('should be null if window is undefined', () => {
      globalThis.window = undefined as never; // Simulate no window object
      const { mediaQuery } = configQuery();
      expect(mediaQuery).toBeNull();
      globalThis.window = originalWindow; // Restore original window object
    });

    it('should be a MediaQueryList object if window is defined', () => {
      spyOn(globalThis, 'window').mockReturnValue({
        matchMedia: jest.fn().mockReturnValue({
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        }),
      } as never);
      const { mediaQuery } = configQuery();
      expect(mediaQuery).not.toBeNull();
    });
  });

  describe('onChangeQuery', () => {
    const originalWindow = globalThis.window;

    afterEach(() => {
      globalThis.window = originalWindow; // Restore original window object after each test
    });

    it('should call the provided handler when the media query changes', () => {
      const { mediaQuery, onChangeQuery } = configQuery();
      const handler = jest.fn();
      onChangeQuery(handler);
      mediaQuery?.dispatchEvent(new Event('change'));
      expect(handler).toHaveBeenCalled();
    });

    it('should not call the handler if mediaQuery is null', () => {
      globalThis.window = undefined as never; // Simulate no window object

      const { onChangeQuery } = configQuery();
      const handler = jest.fn();
      onChangeQuery(handler);
      expect(handler).not.toHaveBeenCalled();
    });

    it('should not throw an error if no handler is provided', () => {
      const { onChangeQuery } = configQuery();
      expect(() => onChangeQuery(() => {})).not.toThrow();
    });
  });
});

describe('useCustomDocsContainer', () => {
  const originalConfigQuery = configQuery;
  type CustomDocsContainerProps<T extends Renderer = Renderer> = PropsWithChildren<StorybookBlocks.DocsContainerProps<T>>;

  afterEach(() => {
    spyOn(require('./_internal'), 'configQuery').mockImplementation(originalConfigQuery);
  });

  it('returns light theme when mediaQuery.matches is false', () => {
    const mockOnChangeQuery = jest.fn();
    spyOn(require('./_internal'), 'configQuery').mockImplementation(() => ({
      mediaQuery: { matches: false } as MediaQueryList,
      onChangeQuery: mockOnChangeQuery,
    }));

    const props: CustomDocsContainerProps = { context: {}, children: <div>Docs</div> } as never;
    const { result } = renderHook(() => useCustomDocsContainer(props));
    expect(result.current.theme).toStrictEqual(themes.light);
  });

  it('returns dark theme when mediaQuery.matches is true', () => {
    const mockOnChangeQuery = jest.fn();
    spyOn(require('./_internal'), 'configQuery').mockImplementation(() => ({
      mediaQuery: { matches: true } as MediaQueryList,
      onChangeQuery: mockOnChangeQuery,
    }));

    const props: CustomDocsContainerProps = { context: {}, children: <div>Docs</div> } as never;
    const { result } = renderHook(() => useCustomDocsContainer(props));
    expect(result.current.theme).toStrictEqual(themes.dark);
  });

  it('calls onChangeQuery on mount and cleanup', () => {
    const mockOnChangeQuery = jest.fn();
    spyOn(require('./_internal'), 'configQuery').mockImplementation(() => ({
      mediaQuery: { matches: false } as MediaQueryList,
      onChangeQuery: mockOnChangeQuery,
    }));

    const props: CustomDocsContainerProps = { context: {}, children: <div>Docs</div> } as never;
    const { unmount } = renderHook(() => useCustomDocsContainer(props));
    expect(mockOnChangeQuery).toHaveBeenCalledTimes(1);
    unmount();
    expect(mockOnChangeQuery).toHaveBeenCalledTimes(2);
  });

  it('updates theme when media query changes', async () => {
    let handler: ((e: MediaQueryListEvent) => void) | undefined;
    const mockOnChangeQuery = jest.fn((cb) => { handler = cb; });
    spyOn(require('./_internal'), 'configQuery').mockImplementation(() => ({
      mediaQuery: { matches: false } as MediaQueryList,
      onChangeQuery: mockOnChangeQuery,
    }));

    const props: CustomDocsContainerProps = { context: {}, children: <div>Docs</div> } as never;
    const { result } = renderHook(() => useCustomDocsContainer(props));
    await waitFor(() => {
      expect(result.current.theme.base).toBe('light');
    });
    expect(result.current.theme).toStrictEqual(themes.light);

    // Simulate media query change to dark
    handler!({ matches: true } as MediaQueryListEvent);
    await waitFor(() => {
      expect(result.current.theme.base).toBe('dark');
    });
    expect(result.current.theme).toStrictEqual(themes.dark);

    // Simulate media query change to light
    handler!({ matches: false } as MediaQueryListEvent);
    await waitFor(() => {
      expect(result.current.theme.base).toBe('light');
    });
    expect(result.current.theme).toStrictEqual(themes.light);
  });

  it('returns all user props', () => {
    const mockOnChangeQuery = jest.fn();
    spyOn(require('./_internal'), 'configQuery').mockImplementation(() => ({
      mediaQuery: { matches: false } as MediaQueryList,
      onChangeQuery: mockOnChangeQuery,
    }));

    const props: CustomDocsContainerProps = { context: { foo: 'bar' }, children: <div>Docs</div> as ReactNode, extra: 123 } as never;
    const { result } = renderHook(() => useCustomDocsContainer(props));
    const current = result.current as unknown as {
      context: Record<string, string>;
      children?: ReactNode;
      extra: number;
    };

    expect(current.context).toEqual({ foo: 'bar' });
    expect(current.children).toBe(props.children!);
    expect(current.extra).toBe(123);
  });
});

describe('CustomDocsContainer', () => {
  const originalConfigQuery = configQuery;
  const originalDocsContainer = StorybookBlocks.DocsContainer;

  type MockDocsContainerProps = PropsWithChildren<StorybookBlocks.DocsContainerProps<any>>; // eslint-disable-line @typescript-eslint/no-explicit-any

  const MockDocsContainerConstructor = (themeLitsner: (theme: ThemeVars | undefined) => void): React.FC<MockDocsContainerProps> => (props) => {
    const { children, theme } = props;

    themeLitsner(theme);

    return (
      <>{children}</>
    );
  };

  afterEach(() => {
    spyOn(StorybookBlocks, 'DocsContainer').mockImplementation(originalDocsContainer);
    spyOn(require('./_internal'), 'configQuery').mockImplementation(originalConfigQuery);
  });

  it('renders with light theme by default', () => {
    let recievedTheme: ThemeVars | undefined;
    const themeListener = jest.fn((theme: ThemeVars | undefined) => {
      recievedTheme = theme;
    });

    const MockDocsContainer = MockDocsContainerConstructor(themeListener);
    spyOn(StorybookBlocks, 'DocsContainer').mockImplementation(MockDocsContainer);

    spyOn(require('./_internal'), 'configQuery').mockImplementation(() => ({
      mediaQuery: { matches: false } as MediaQueryList,
      onChangeQuery: jest.fn(),
    }));

    const props = { context: {}, children: <div>Docs</div> } as MockDocsContainerProps;
    const { container } = render(<CustomDocsContainer {...props} />);

    // The theme prop is passed to BaseContainer, but we can't access it directly.
    // Instead, check that it renders children.
    expect(container.textContent).toContain('Docs');
    expect(recievedTheme).toStrictEqual(themes.light);
  });

  it('renders with dark theme if prefers-color-scheme: dark', () => {
    let recievedTheme: ThemeVars | undefined;
    const themeListener = jest.fn((theme: ThemeVars | undefined) => {
      recievedTheme = theme;
    });

    const MockDocsContainer = MockDocsContainerConstructor(themeListener);
    spyOn(StorybookBlocks, 'DocsContainer').mockImplementation(MockDocsContainer);

    spyOn(require('./_internal'), 'configQuery').mockImplementation(() => ({
      mediaQuery: { matches: true } as MediaQueryList,
      onChangeQuery: jest.fn(),
    }));

    const props = { context: {}, children: <div>Dark Docs</div> } as MockDocsContainerProps;
    const { container } = render(<CustomDocsContainer {...props} />);

    // The theme prop is passed to BaseContainer, but we can't access it directly.
    // Instead, check that it renders children.
    expect(container.textContent).toContain('Dark Docs');
    expect(recievedTheme).toStrictEqual(themes.dark);
  });
});
