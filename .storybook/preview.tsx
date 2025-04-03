'use strict';
import React from 'react';
import type { Decorator, Preview } from '@storybook/react';
import 'tailwindcss/tailwind.css';

import { MaiUIProvider } from '../src';

export const decorators: Decorator[] = [
  (Story) => (
    <MaiUIProvider>
      <Story />
    </MaiUIProvider>
  )
];

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
