'use strict';
import { describe, expect, it } from 'bun:test';
import { renderHook } from "@testing-library/react";

import { ThemeContext } from './internal';
import { useTheme } from "./use-theme";

describe("useTheme", () => {
  it("should throw an error if used outside of ThemeContextProvider", () => {
    expect(() => renderHook(useTheme))
    .toThrowError('useTheme must be used within a ThemeContextProvider');
  });

  it("should return the context value when used within ThemeContextProvider", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockTheme: any = { mode: "dark" };
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeContext.Provider value={mockTheme}>{children}</ThemeContext.Provider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current).toBe(mockTheme);
  });
});
