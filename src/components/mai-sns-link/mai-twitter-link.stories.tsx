'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiTwitterLink } from './mai-twitter-link';

const meta: Meta<typeof MaiTwitterLink> = {
  title: 'Components/MaiSNSLink/MaiTwitterLink',
  component: MaiTwitterLink,
  argTypes: {
    children: {
      control: {type: 'text'}
    },
    isX: {
      control: {type: 'boolean'},
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    twitterID: {
      control: {type: 'text'},
    },
    color: {
      control: {type: 'radio'},
      options: ['default', 'primary', 'secondary', 'success', 'danger', 'warning'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    size: {
      control: {type: 'radio'},
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: {
          summary: 'md',
        },
      },
    },
  },
  tags: [
    'test',
  ],
};
export default meta;

const Template: StoryFn<MaiTwitterLink.Props> = (args) => <MaiTwitterLink {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithXIcon = Template.bind({});
WithXIcon.args = {
  isX: true,
};

export const WithText = Template.bind({});
WithText.args = {
  children: 'Twitter.com',
};

export const Colors = (args: MaiTwitterLink.Props) => (
  <div className='flex flex-col gap-4'>
    {meta.argTypes!.color!.options!.map(color => (
      <div
        className='flex gap-4'
        key={`color-${color}`}
      >
        <MaiTwitterLink
          {...args}
          color={color}
        />

        <MaiTwitterLink
        {...args}
        color={color}
        >
          Twitter.com
        </MaiTwitterLink>
      </div>
    ))}
  </div>
);

export const Sizes = (args: MaiTwitterLink.Props) => (
  <div className='flex flex-col gap-4'>
    {meta.argTypes!.size!.options!.map(size => (
      <div
        className='flex gap-4'
        key={`size-${size}`}
      >
        <MaiTwitterLink
          {...args}
          size={size}
        />

        <MaiTwitterLink
        {...args}
        size={size}
        >
          Twitter.com
        </MaiTwitterLink>
      </div>
    ))}
  </div>
);
