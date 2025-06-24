'use strict';
import { Meta, StoryFn } from '@storybook/react';
import { MaiLink } from './mai-link';
import { Button } from '@heroui/button';

const meta: Meta<typeof MaiLink> = {
  title: 'Components/MaiLink',
  component: MaiLink,
  argTypes: {
    onPress: { action: 'clicked' },
    isDisabled: {
      control: { type: 'boolean' },
      options: [true, false],
    },
    size: {
      control: { type: 'radio', },
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'radio', },
      options: ['default', 'primary', 'secondary', 'success', 'danger', 'warning'],
    },
    underline: {
      control: { type: 'radio' },
      options: ['none', 'hover', 'always', 'active', 'focus', undefined],
    },
    isExternal: {
      control: { type: 'radio' },
      options: [true, false],
    },
    isBlock: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
  tags: [
    'test',
  ],
};
export default meta;

const Template: StoryFn<MaiLink.Props> = (args) => <MaiLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Mai Link',
};

export const IsDisabled = Template.bind({});
IsDisabled.args = {
  children: 'Mai Link isDisabled',
  isDisabled: true
};

export const Sizes = (args: MaiLink.Props) => (
  <div className='flex gap-2'>
    {meta.argTypes!.size!.options!.map(size => (
      <MaiLink
        {...args}
        size={size}
        key={`size-${size}`}
      >{size} link</MaiLink>
    ))}
  </div>
);

export const Colors = (args: MaiLink.Props) => (
  <div className='flex gap-2'>
    {meta.argTypes!.color!.options!.map(color => (
      <MaiLink
        {...args}
        color={color}
        key={`color-${color}`}
      >{color}</MaiLink>
    ))}
  </div>
);

export const Underline = (args: MaiLink.Props) => (
  <div className='flex gap-2'>
    {meta.argTypes!.underline!.options!.map(underline => (
      <MaiLink
        {...args}
        underline={underline}
        key={`underline-${underline}`}
      >{underline}</MaiLink>
    ))}
  </div>
);

export const IsExternal = Template.bind({});
IsExternal.args = {
  children: 'Mai Link IsExternal',
  isExternal: true,
  href: 'https://www.google.com',
};

export const IsBlock = Template.bind({});
IsBlock.args = {
  children: 'Mai Link IsBlock',
  isBlock: true
};

const LinkButtonTemplate: StoryFn<MaiLink.Props> = (args) => (
  <Button
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {...args as any}
    as={MaiLink}
  />
);

export const LinkButton = LinkButtonTemplate.bind({});
LinkButton.args = {
  children: 'Link Button',
  color: 'primary',
  isExternal: true,
  showAnchorIcon: true,
  href: 'https://www.google.com/',
};
