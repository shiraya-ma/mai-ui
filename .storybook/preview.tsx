'use strict';
import type { Decorator, Preview } from '@storybook/react';

import { MaiUIProvider } from '../src';
import { CustomDocsContainer } from './_internal';

import '../public/fonts.css';
import './bg.css';

export const decorators: Decorator[] = [
  (Story, context) => (
    <MaiUIProvider>
      <Story {...context} />
    </MaiUIProvider>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: CustomDocsContainer,
    },
  },
};

export default preview;
