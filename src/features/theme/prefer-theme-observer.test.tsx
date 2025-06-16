'use strict';
import { afterEach, beforeEach, describe, expect, it, mock, spyOn } from 'bun:test';
import { type PropsWithChildren } from 'react';
import { render } from '@testing-library/react';

import { PreferThemeObserver } from './prefer-theme-observer';
import { ThemeContextProvider } from './theme-context-provider';
import { usePreferThemeObserver } from './internal';


describe('PreferThemeObserver', () => {
  const originalDebug = window.console.debug;
  const wrapper = ({children}: PropsWithChildren) => (<ThemeContextProvider>{children}</ThemeContextProvider>);
  
    beforeEach(() => {
      // Mock console.debug
      spyOn(console, 'debug').mockImplementation(() => {});
    });
  
    afterEach(() => {
      spyOn(console, 'debug').mockImplementation(originalDebug);
    });

  it('should render without crashing', () => {
    const { getByTestId } = render(<PreferThemeObserver />, {wrapper});
    expect(getByTestId('PreferThemeObserver')).not.toBeUndefined();
  });

  it('should call usePreferThemeObserver with props', () => {
    const originalHook = usePreferThemeObserver;
    const mockHook = mock();
    mock.module('./internal', () => ({
      usePreferThemeObserver: mockHook
    }));

    const props = { disabledTheme: true };
    render(<PreferThemeObserver {...props} />);
    expect(mockHook).toHaveBeenCalledWith(props);

    mock.module('./internal', () => ({
      usePreferThemeObserver: originalHook
    }));
  });
});
