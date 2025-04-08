'use strict';
import { Meta, StoryFn } from '@storybook/react';
import { MaiButton } from './mai-button';

const meta: Meta<typeof MaiButton> = {
  title: 'Components/MaiButton',
  component: MaiButton,
  argTypes: {
    onPress: { action: 'clicked' },
    isDisabled: {
      control: { type: 'boolean' },
      options: [true, false],
    },
    size: {
      control: { type: 'select', },
      options: ['sm', 'md', 'lg'],
    },
    radius: {
      control: { type: 'select', },
      options: ['full', 'lg', 'md', 'sm', 'none'],
    },
    color: {
      control: { type: 'select', },
      options: ['default', 'primary', 'secondary', 'success', 'danger', 'warning'],
    },
    variant: {
      control: { type: 'select', },
      options: ['solid', 'faded', 'bordered', 'light', 'flat', 'ghost', 'shadow', 'glassy'],
    },
    isLoading: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
      options: [true, false],
    },
  },
  tags: [
    'test',
  ],
};
export default meta;

const Template: StoryFn<MaiButton.Props> = (args) => <MaiButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Mai Button',
};

export const IsDisabled = Template.bind({});
IsDisabled.args = {
  children: 'Mai Button isDisabled',
  isDisabled: true
};

export const Sizes = (args: MaiButton.Props) => (
  <div className='flex gap-2'>
    {meta.argTypes!.size!.options!.map(size => (
      <MaiButton
        {...args}
        size={size}
        key={`size-${size}`}
      >{size}</MaiButton>
    ))}
  </div>
);

export const Radius = (args: MaiButton.Props) => (
  <div className='flex gap-2'>
    {meta.argTypes!.radius!.options!.map(radius => (
      <MaiButton
        {...args}
        radius={radius}
        key={`radius-${radius}`}
      >{radius}</MaiButton>
    ))}
  </div>
);

export const Colors = (args: MaiButton.Props) => (
  <div className='flex gap-2'>
    {meta.argTypes!.color!.options!.map(color => (
      <MaiButton
        {...args}
        color={color}
        key={`color-${color}`}
      >{color}</MaiButton>
    ))}
  </div>
);

export const Variants = (args: MaiButton.Props) => (
  <div className='flex gap-2'>
    {meta.argTypes!.variant!.options!.map(variant => (
      <MaiButton
        {...args}
        variant={variant}
        key={`variant-${variant}`}
      >{variant}</MaiButton>
    ))}
  </div>
);

export const IsLoading = Template.bind({});
IsLoading.args = {
  children: 'Mai Button isLoading',
  isLoading: true
};
