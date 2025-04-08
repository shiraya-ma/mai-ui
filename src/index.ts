'use strict';

import {
  MaiButton,
  MaiModal,
  MaiModalBody,
  MaiModalContent,
  MaiModalFooter,
  MaiModalHeader,
  useDisclosure,
  useDraggable,
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
  useDisclosure,
  useDraggable,
  useTheme,
  MaiButton,
  MaiModal,
  MaiModalBody,
  MaiModalContent,
  MaiModalFooter,
  MaiModalHeader,
  MaiUIProvider,
};

const MaiUI = {
  fonts: maiFonts,
  useDisclosure,
  useDraggable,
  useTheme,
  Button: MaiButton,
  Modal: MaiModal,
  ModalBody: MaiModal,
  ModalContent: MaiModalContent,
  ModalFooter: MaiModalFooter,
  ModalHeader: MaiModalHeader,
  Provider: MaiUIProvider,
};

export default MaiUI;
