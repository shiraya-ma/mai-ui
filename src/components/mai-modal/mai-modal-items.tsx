'use client';
import React from 'react';
import {
  ModalBody,
  type ModalBodyProps,
  ModalContent,
  type ModalContentProps,
  ModalFooter,
  type ModalFooterProps,
  ModalHeader,
  type ModalHeaderProps,
  useDisclosure,
  useDraggable,
} from '@heroui/modal';

const MaiModalBody: React.FC<MaiModalBody.Props> = ModalBody;
MaiModalBody.displayName = 'MaiModalBody';
namespace MaiModalBody {
  export type Props = ModalBodyProps;
};

const MaiModalContent: React.FC<MaiModalContent.Props> = ModalContent;
MaiModalContent.displayName = 'MaiModalContent';
namespace MaiModalContent {
  export type Props = ModalContentProps;
};

const MaiModalFooter: React.FC<MaiModalFooter.Props> = ModalFooter;
MaiModalFooter.displayName = 'MaiModalFooter';
namespace MaiModalFooter {
  export type Props = ModalFooterProps;
};

const MaiModalHeader: React.FC<MaiModalHeader.Props> = ModalHeader;
MaiModalHeader.displayName = 'MaiModalHeader';
namespace MaiModalHeader {
  export type Props = ModalHeaderProps;
};

export {
  MaiModalBody,
  MaiModalContent,
  MaiModalFooter,
  MaiModalHeader,
  // eslint-disable-next-line react-refresh/only-export-components
  useDisclosure,
  // eslint-disable-next-line react-refresh/only-export-components
  useDraggable,
};
