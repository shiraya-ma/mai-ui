'use strict';
import { cn } from '@heroui/theme';
import { Meta, StoryFn } from '@storybook/react';
import { Divider } from '@heroui/divider';

import { MaiCard } from './mai-card';
import { MaiCardBody, MaiCardFooter, MaiCardHeader } from './mai-card-items';
import { MaiButton } from '../mai-button';

const meta: Meta<typeof MaiCard> = {
  title: 'Components/MaiCard',
  component: MaiCard,
  subcomponents: {
    MaiCardBody,
    MaiCardFooter,
    MaiCardHeader,
  },
  argTypes: {
    shadow: {
      control: { type: 'radio', },
      options: ['none', 'sm', 'md', 'lg'],
      table: {
        defaultValue: {
          summary: 'md'
        },
      },
    },
    radius: {
      control: { type: 'select', },
      options: ['none', 'sm', 'md', 'lg'],
      table: {
        defaultValue: {
          summary: 'lg'
        },
      },
    },
    fullWidth: {
      control: { type: 'radio' },
      options: [true, false],
      table: {
        defaultValue: {
          summary: 'false'
        },
      },
    },
    isHoverable: {
      control: { type: 'radio' },
      options: [true, false],
      table: {
        defaultValue: {
          summary: 'false'
        },
      },
    },
    isPressable: {
      control: { type: 'radio' },
      options: [true, false],
      table: {
        defaultValue: {
          summary: 'false'
        },
      },
    },
    isBlurred: {
      control: { type: 'radio' },
      options: [true, false],
      table: {
        defaultValue: {
          summary: 'false'
        },
      },
    },
    isFooterBlurred: {
      control: { type: 'radio' },
      options: [true, false],
      table: {
        defaultValue: {
          summary: 'false'
        },
      },
    },
    isDisabled: {
      control: { type: 'radio' },
      options: [true, false],
      table: {
        defaultValue: {
          summary: 'false'
        },
      },
    },
    disableAnimation: {
      control: { type: 'radio' },
      options: [true, false],
      table: {
        defaultValue: {
          summary: 'false'
        },
      },
    },
    disableRipple: {
      control: { type: 'radio' },
      options: [true, false],
      table: {
        defaultValue: {
          summary: 'false'
        },
      },
    },
    allowTextSelectionOnPress: {
      control: { type: 'radio' },
      options: [true, false],
      table: {
        defaultValue: {
          summary: 'false'
        },
      },
    },
    isGlassy: {
      control: { type: 'radio' },
      options: [true, false],
      table: {
        defaultValue: {
          summary: 'false'
        },
      },
    },
  },
  tags: [
    'test',
  ],
};
export default meta;

type CardTemplateProps = MaiCard.Props & {label?: string, withDivider?: boolean};

const Template: StoryFn<CardTemplateProps> = (args) => {
  const { children, fullWidth, label, withDivider, ...cardProps } = args;

  return (
    <MaiCard
      className={cn(
        !fullWidth? 'w-max min-w-[60ch]': undefined
      )}
      fullWidth={fullWidth}
      {...cardProps}
    >
      <MaiCardHeader>{label || 'LABEL'}</MaiCardHeader>

      {withDivider && <Divider />}

      <MaiCardBody>
        <p>{children || 'CHILDREN'}</p>
      </MaiCardBody>

      {withDivider && <Divider />}

      {!args.isPressable && (
        <MaiCardFooter className='justify-end'>
          <MaiButton color='primary'>FOOTER BUTTON</MaiButton>
        </MaiCardFooter>
      )}
    </MaiCard>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Mai Card',
};

export const IsGlassy: StoryFn<CardTemplateProps> = Template.bind({});
IsGlassy.args = {
  label: 'MaiUI',
  children: 'MaiCard isGlassy',
  isGlassy: true,
};

export const Shadow: StoryFn<CardTemplateProps> = Template.bind({});
Shadow.args = {
  label: 'MaiUI',
  children: 'MaiCard shadow',
  shadow: 'md',
};

export const Radius: StoryFn<CardTemplateProps> = Template.bind({});
Radius.args = {
  label: 'MaiUI',
  children: 'MaiCard shadow',
  radius: 'lg',
};

export const FullWitdh: StoryFn<CardTemplateProps> = Template.bind({});
FullWitdh.args = {
  label: 'MaiUI',
  children: 'MaiCard is FullWitdh',
  fullWidth: true,
};

export const IsHoverable: StoryFn<CardTemplateProps> = Template.bind({});
IsHoverable.args = {
  label: 'MaiUI',
  children: 'MaiCard isHoverable',
  isHoverable: true,
};

export const IsPressable: StoryFn<CardTemplateProps> = Template.bind({});
IsPressable.args = {
  label: 'MaiUI',
  children: 'MaiCard isPressable',
  isPressable: true,
  classNames: {
    footer: 'justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'
  },
};

export const IsBlurred: StoryFn<CardTemplateProps> = Template.bind({});
IsBlurred.args = {
  label: 'MaiUI',
  children: 'MaiCard isBlurred',
  isBlurred: true,
};

export const IsFooterBlurred: StoryFn<CardTemplateProps> = Template.bind({});
IsFooterBlurred.args = {
  label: 'MaiUI',
  children: 'MaiCard isFooterBlurred',
  isFooterBlurred: true,
  classNames: {
    footer: 'justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 mb-1'
  },
};

export const IsDisabled: StoryFn<CardTemplateProps> = Template.bind({});
IsDisabled.args = {
  label: 'MaiUI',
  children: 'MaiCard isDisabled',
  isDisabled: true,
};
