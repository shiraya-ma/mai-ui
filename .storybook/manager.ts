'use strict';
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

import {
  configQuery,
} from './_internal';

const baseTheme = {
  brandTitle: 'Mai UI',
  brandUrl: '/',
  brandImage: '/temp-logo.png',
};

// custom theme (dark)
const customDarkTheme = create({
  base: 'dark',
  ...baseTheme,
});

// custom theme (light)
const customLightTheme = create({
  base: 'light',
  ...baseTheme,
});

const applyTheme = (isDark?: boolean) => {
  addons.setConfig({
    theme: isDark ? customDarkTheme : customLightTheme,
  });
};

const { mediaQuery, onChangeQuery } = configQuery();

applyTheme(mediaQuery?.matches);

onChangeQuery((event) => {
  applyTheme(event.matches);
});
