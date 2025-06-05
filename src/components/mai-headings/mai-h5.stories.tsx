'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiH5 } from './mai-h5';

const meta: Meta<typeof MaiH5> = {
  title: 'Components/MaiHeadings/MaiH5',
  component: MaiH5,
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

const Template: StoryFn<MaiH5.Props> = (args) => <MaiH5 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'MaiHeadings H5',
};

export const Colors = (args: MaiH5.Props) => (
  <div className='flex flex-col gap-4'>
    {meta.argTypes!.color!.options!.map(color => (
      <div
        className='flex gap-4'
        key={`color-${color}`}
      >
        <MaiH5
          {...args}
          color={color}
          children={`MaiHeadings H5 - ${color}`}
        />
      </div>
    ))}
  </div>
);
