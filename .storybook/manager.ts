'use strict';
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const customTheme = create({
  base: 'dark',
  brandTitle: 'Mai UI',
  brandUrl: '/',
  brandImage: '/temp-logo.png',
});

addons.setConfig({
  theme: customTheme,
});
