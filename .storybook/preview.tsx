'use strict';
import React, { useEffect } from 'react';
import type { Decorator, Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import './bg.css';

import { MaiUIProvider } from '../src';

export const decorators: Decorator[] = [
  (Story, context) => {
    useEffect(() => {
      const matcher = window.matchMedia('(prefers-color-scheme: dark)');
      const updateTheme = () => {
        const isDark = matcher.matches;
        context.parameters.docs.theme = isDark ? themes.dark : themes.light;
      };
      updateTheme();
      matcher.addEventListener('change', updateTheme);
      return () => matcher.removeEventListener('change', updateTheme);
    }, []);

    return (
      <MaiUIProvider>
        <Story {...context} />
      </MaiUIProvider>
    );
  },
];

export const parameters = {
  docs: {
    theme: themes.light,
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
