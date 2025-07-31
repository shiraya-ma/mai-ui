'use strict';
import type { StorybookConfig } from '@storybook/react-vite';
import potcss from 'postcss';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"
  ],
  addons: [
    "@storybook/addon-docs",
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
  docs: {
    autodocs: true,
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  staticDirs: [
    "../public",
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  managerHead: (head) => (`
    ${head}
    <link rel="icon" href="/MaiUI_Icon.svg" type="image/svg+xml"/ >
  `),
};

export default config;
