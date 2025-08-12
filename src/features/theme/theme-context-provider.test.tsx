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
    const { getByTestId } = render(
      <ThemeContextProvider>
        <div data-testid='testChildren'>Test Child</div>
      </ThemeContextProvider>
    );

    expect(getByTestId('testChildren')).toHaveTextContent('Test Child');
  });

  it('should provide the context value', () => {
    const TestComponent = () => {
      const context = useContext(ThemeContext);
      return <div data-testid='testChildrenWithContext'>{context ? 'Context Provided' : 'No Context'}</div>;
    };

    const { getByTestId } = render(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    );

    expect(getByTestId('testChildrenWithContext')).toHaveTextContent('Context Provided');
  });

  it('should handle disabledTheme prop', () => {
    const TestComponent = () => {
      const context = useContext(ThemeContext);
      return <div data-testid='testChildrenDisabledTheme'>{context?.theme ? 'Theme Disabled' : 'Theme Enabled'}</div>;
    };
    const { getByTestId } = render(
      <ThemeContextProvider disabledTheme={true}>
        <TestComponent />
      </ThemeContextProvider>
    );

    expect(getByTestId('testChildrenDisabledTheme')).toHaveTextContent('Theme Disabled');
  });
});
