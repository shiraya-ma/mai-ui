'use strict';

import {
  MaiButton,
} from './components';

import {
  maiFonts,
  MaiUIProvider,
} from './core';

import {
  useTheme,
} from './features/theme';

export * from './types/mai-ui';

export {
  maiFonts,
  useTheme,
  MaiButton,
  MaiUIProvider,
};

const MaiUI = {
  fonts: maiFonts,
  useTheme,
  Button: MaiButton,
  Provider: MaiUIProvider
};

export default MaiUI;
