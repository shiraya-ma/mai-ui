'use strict';

import {
  MaiBreadcrumbItem,
  MaiBreadcrumbs,
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
  MaiPagination,
  MaiSkeleton,
  MaiSNSLink,
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
  MaiBreadcrumbItem,
  MaiBreadcrumbs,
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
  MaiPagination,
  MaiSkeleton,
  MaiSNSLink,
  MaiUIProvider,
};

const MaiUI = {
  fonts: maiFonts,
  useDisclosure,
  useDraggable,
  useTheme,
  BreadcrumbItem: MaiBreadcrumbItem,
  Breadcrumbs: MaiBreadcrumbs,
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
  Pagination: MaiPagination,
  Provider: MaiUIProvider,
  Skeleton: MaiSkeleton,
  SNSLink: MaiSNSLink,
};

export default MaiUI;
