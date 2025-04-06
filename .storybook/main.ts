'use strict';
import type { StorybookConfig } from '@storybook/react-vite';
import potcss from 'postcss';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: potcss
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
};

export default config;
