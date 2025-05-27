'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiInstagramLink } from './mai-instagram-link';

const meta: Meta<typeof MaiInstagramLink> = {
  title: 'Components/MaiSNSLink/MaiInstagramLink',
  component: MaiInstagramLink,
  argTypes: {
    children: {
      control: {type: 'text'}
    },
    instagramID: {
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

const Template: StoryFn<MaiInstagramLink.Props> = (args) => <MaiInstagramLink {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithText = Template.bind({});
WithText.args = {
  children: 'Instagram.com',
};

export const Colors = (args: MaiInstagramLink.Props) => (
  <div className='flex flex-col gap-4'>
    {meta.argTypes!.color!.options!.map(color => (
      <div
        className='flex gap-4'
        key={`color-${color}`}
      >
        <MaiInstagramLink
          {...args}
          color={color}
        />

        <MaiInstagramLink
        {...args}
        color={color}
        >
          Instagram.com
        </MaiInstagramLink>
      </div>
    ))}
  </div>
);

export const Sizes = (args: MaiInstagramLink.Props) => (
  <div className='flex flex-col gap-4'>
    {meta.argTypes!.size!.options!.map(size => (
      <div
        className='flex gap-4'
        key={`size-${size}`}
      >
        <MaiInstagramLink
          {...args}
          size={size}
        />

        <MaiInstagramLink
        {...args}
        size={size}
        >
          Instagram.com
        </MaiInstagramLink>
      </div>
    ))}
  </div>
);
