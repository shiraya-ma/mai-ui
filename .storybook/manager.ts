'use strict';
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

import {
  configQuery,
} from './_internal';

const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '/' : '/mai-ui/';

const baseTheme = {
  brandTitle: 'Mai UI',
  brandUrl: basePath,
  brandImage: `${basePath}MaiUI_LogoType.svg`,
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

if (typeof document !== 'undefined') {
  const link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  if (link) {
    const setFaviconUrl = (link: HTMLLinkElement, url: string) => {
      if (link.getAttribute('href') !== url) {
        link.setAttribute('href', url);
      }
    };

    const faviconUrl = `${basePath}MaiUI_Icon.svg`;

    setFaviconUrl(link, faviconUrl);

    const mutationObserver = new MutationObserver(() => {
      if (link.getAttribute('href') !== faviconUrl) {
        link.setAttribute('href', faviconUrl);
      }
    });

    mutationObserver.observe(link, {
      attributes: true,
      attributeFilter: ['href'],
    });
  }
}