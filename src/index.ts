'use strict';

import {
  MaiButton,
  MaiCard,
  MaiCardBody,
  MaiCardFooter,
  MaiCardHeader,
  MaiModal,
  MaiModalBody,
  MaiModalContent,
  MaiModalFooter,
  MaiModalHeader,
  MaiLink,
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
  MaiCard,
  MaiCardBody,
  MaiCardFooter,
  MaiCardHeader,
  MaiModal,
  MaiModalBody,
  MaiModalContent,
  MaiModalFooter,
  MaiModalHeader,
  MaiLink,
  MaiUIProvider,
};

const MaiUI = {
  fonts: maiFonts,
  useDisclosure,
  useDraggable,
  useTheme,
  Button: MaiButton,
  Card: MaiCard,
  CardBody: MaiCardBody,
  CardFooter: MaiCardFooter,
  CardHeader: MaiCardHeader,
  Modal: MaiModal,
  ModalBody: MaiModal,
  ModalContent: MaiModalContent,
  ModalFooter: MaiModalFooter,
  ModalHeader: MaiModalHeader,
  Link: MaiLink,
  Provider: MaiUIProvider,
};

export default MaiUI;
