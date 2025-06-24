'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiH4 } from './mai-h4';

const meta: Meta<typeof MaiH4> = {
  title: 'Components/MaiHeadings/MaiH4',
  component: MaiH4,
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

const Template: StoryFn<MaiH4.Props> = (args) => <MaiH4 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'MaiHeadings H4',
};

export const Colors = (args: MaiH4.Props) => (
  <div className='flex flex-col gap-4'>
    {meta.argTypes!.color!.options!.map(color => (
      <div
        className='flex gap-4'
        key={`color-${color}`}
      >
        <MaiH4
          {...args}
          color={color}
          children={`MaiHeadings H4 - ${color}`}
        />
      </div>
    ))}
  </div>
);
