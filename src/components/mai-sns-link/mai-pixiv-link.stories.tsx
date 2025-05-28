'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiPixivLink } from './mai-pixiv-link';

const meta: Meta<typeof MaiPixivLink> = {
  title: 'Components/MaiSNSLink/MaiPixivLink',
  component: MaiPixivLink,
  argTypes: {
    children: {
      control: {type: 'text'}
    },
    pixivID: {
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

const Template: StoryFn<MaiPixivLink.Props> = (args) => <MaiPixivLink {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithText = Template.bind({});
WithText.args = {
  children: 'pixiv.net',
};

export const Colors = (args: MaiPixivLink.Props) => (
  <div className='flex flex-col gap-4'>
    {meta.argTypes!.color!.options!.map(color => (
      <div
        className='flex gap-4'
        key={`color-${color}`}
      >
        <MaiPixivLink
          {...args}
          color={color}
        />

        <MaiPixivLink
        {...args}
        color={color}
        >
          pixiv.net
        </MaiPixivLink>
      </div>
    ))}
  </div>
);

export const Sizes = (args: MaiPixivLink.Props) => (
  <div className='flex flex-col gap-4'>
    {meta.argTypes!.size!.options!.map(size => (
      <div
        className='flex gap-4'
        key={`size-${size}`}
      >
        <MaiPixivLink
          {...args}
          size={size}
        />

        <MaiPixivLink
        {...args}
        size={size}
        >
          pixiv.net
        </MaiPixivLink>
      </div>
    ))}
  </div>
);
