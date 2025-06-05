'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiH6 } from './mai-h6';

const meta: Meta<typeof MaiH6> = {
  title: 'Components/MaiHeadings/MaiH6',
  component: MaiH6,
  argTypes: {
    children: {
      control: {type: 'text'}
    },
    color: {
      control: {type: 'radio'},
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'foreground'],
      defaultValue: 'foreground',
    },
  },
  tags: [
    'test',
  ],
};
export default meta;

const Template: StoryFn<MaiH6.Props> = (args) => <MaiH6 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'MaiHeadings H6',
};

export const Colors = (args: MaiH6.Props) => (
  <div className='flex flex-col gap-4'>
    {meta.argTypes!.color!.options!.map(color => (
      <div
        className='flex gap-4'
        key={`color-${color}`}
      >
        <MaiH6
          {...args}
          color={color}
          children={`MaiHeadings H6 - ${color}`}
        />
      </div>
    ))}
  </div>
);
