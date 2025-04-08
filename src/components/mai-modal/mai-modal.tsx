'use client';
import React from "react";
import { cn } from "@heroui/theme";
import { Modal, type ModalProps } from "@heroui/modal";

/**
 * Modal component
 * 
 * Extends the modal's variants
 * 
 * @example
 * 'use strict';
 * import {
 *    MaiButton,
 *    MaiModal,
 *    MaiModalBody,
 *    MaiModalContent,
 *    MaiModalFooter,
 *    MaiModalHeader,
 *    useDisclosure,
 * } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    const { isOpen, onOpen, onOpenChange } = useDisclosure();
 * 
 *    return (
 *      <>
 *        <MaiButton onPress={onOpen}>OPEN MODAL</MaiButton>
 * 
 *        <MaiModal
 *          isGlassy
 *          isOpen={isOpen}
 *          onOpenChange={onOpenChange}
 *        >
 *          <MaiModalContent>
 *            {(onClose) => (
 *              <>
 *                <MaiModalHeader>TITLE</MaiModalHeader>
 * 
 *                <MaiModalBody>
 *                  <p>BODY</p>
 *                </MaiModalBody>
 * 
 *                <MaiModalFooter>
 *                  <MaiButton color='danger' onPress={onClose}>
 *                    CLOSE MODAL
 *                  </MaiButton>
 *                </MaiModalFooter>
 *              </>
 *            )}
 *          </MaiModalContent>
 *        </MaiModal>
 *      </>
 *    );
 * };
 */
const MaiModal: React.FC<MaiModal.Props> = (props) => {
  const { isGlassy, classNames, ...modalProps } = props;
  const {
    base,
    closeButton,
    ...userClassNames
  } = classNames || {};

  return (
    <Modal
      classNames={{
        base: cn(
          isGlassy? 'border-1 bg-white/25 backdrop-blur-sm text-white': undefined,
          base,
        ),
        closeButton: cn(
          isGlassy? 'text-white/60': undefined,
          closeButton
        ),
        ...userClassNames,
      }}
      data-glassy={isGlassy}
      {...modalProps as ModalProps}
    />
  );
};

namespace MaiModal {
  export type Props = ModalProps & {
    isGlassy?: boolean;
  };
};

export {
  MaiModal
};
