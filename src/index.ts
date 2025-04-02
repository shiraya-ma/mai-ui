'use strict';

import {
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
  MaiUIProvider,
};

const MaiUI = {
  fonts: maiFonts,
  useTheme,
  Provider: MaiUIProvider
};

export default MaiUI;
