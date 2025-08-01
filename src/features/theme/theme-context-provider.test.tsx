'use strict';
import { afterEach, beforeEach, describe, expect, it, spyOn } from 'bun:test';
import { useContext } from 'react';
import { cleanup, render } from '@testing-library/react';

import { ThemeContext } from './internal';
import { ThemeContextProvider } from './theme-context-provider';

describe('ThemeContextProvider', () => {
  const originalDebug = window.console.debug;

  beforeEach(() => {
    // Mock console.debug
    spyOn(console, 'debug').mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();

    spyOn(console, 'debug').mockImplementation(originalDebug);
  });

  it('should render children correctly', () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <div>Test Child</div>
      </ThemeContextProvider>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('should provide the context value', () => {
    const TestComponent = () => {
      const context = useContext(ThemeContext);
      return <div>{context ? 'Context Provided' : 'No Context'}</div>;
    };

    const { getByText } = render(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    );

    expect(getByText('Context Provided')).toBeInTheDocument();
  });

  it('should handle disabledTheme prop', () => {
    const TestComponent = () => {
      const context = useContext(ThemeContext);
      return <div>{context?.theme ? 'Theme Disabled' : 'Theme Enabled'}</div>;
    };

    const { getByText } = render(
      <ThemeContextProvider disabledTheme={true}>
        <TestComponent />
      </ThemeContextProvider>
    );

    expect(getByText('Theme Disabled')).toBeInTheDocument();
  });
});
