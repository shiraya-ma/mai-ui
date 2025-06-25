'use strict';
import { afterEach, beforeEach, describe, it, expect, jest, spyOn } from 'bun:test';

import {
  configQuery,
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
