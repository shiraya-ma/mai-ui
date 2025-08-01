'use strict';
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

import {
  configQuery,
} from './_internal';

const isDev = process.env.NODE_ENV === 'development';

const baseTheme = {
  brandTitle: 'Mai UI',
  brandUrl: '/',
  brandImage: `${isDev? '': '/mai-ui'}/MaiUI_LogoType.svg`,
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
        console.warn(link.getAttribute('href'));
      }
    };

    const faviconUrl = process.env.NODE_ENV === 'development' ? '/MaiUI_Icon.svg' : '/mai-ui/MaiUI_Icon.svg';

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