'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiButton } from '../mai-button';
import { MaiModal } from './mai-modal';
import {
  MaiModalBody,
  MaiModalContent,
  MaiModalFooter,
  MaiModalHeader,
  useDisclosure,
} from './mai-modal-items';

const meta: Meta<typeof MaiModal> = {
  title: 'Components/MaiModal',
  component: MaiModal,
  subcomponents: {
    MaiModalBody,
    MaiModalContent,
    MaiModalFooter,
    MaiModalHeader,
  },
  argTypes: {
    isDismissable: {
      control: { type: 'radio' },
      options: [ 'true', 'false' ],
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    isKeyboardDismissDisabled: {
      control: { type: 'radio' },
      options: [ 'true', 'false' ],
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    shouldBlockScroll: {
      control: { type: 'radio' },
      options: [ 'true', 'false' ],
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    hideCloseButton: {
      control: { type: 'radio' },
      options: [ 'true', 'false' ],
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disableAnimation: {
      control: { type: 'radio' },
      options: [ 'true', 'false' ],
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    isGlassy: {
      control: { type: 'radio' },
      options: [ 'true', 'false' ],
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  tags: [
    'test',
  ],
};
export default meta;

const Template: StoryFn<MaiModal.Props> = (args) => {
  console.dir(args);
  const { children, ...modalProps } = args;
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <MaiButton
        color='primary'
        onPress={onOpen}
      >OPEN MODAL</MaiButton>

      <MaiModal
        {...modalProps}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <MaiModalContent>
          <MaiModalHeader>MaiModal Header</MaiModalHeader>

          <MaiModalBody>
            <p>MaiModal Body</p>

            <p>{children}</p>
          </MaiModalBody>

          <MaiModalFooter>
            <MaiButton
              color='danger'
              onPress={onClose}
            >
              CANCEL
            </MaiButton>
  
            <MaiButton
              color='primary'
              onPress={onClose}
            >
              OK
            </MaiButton>
          </MaiModalFooter>
        </MaiModalContent>
      </MaiModal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'DEFAULT',
};

export const GlassModal = Template.bind({});
GlassModal.args = {
  children: 'MaiModal isGlassy',
  isGlassy: true,
};
