'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiH3 } from './mai-h3';

const meta: Meta<typeof MaiH3> = {
  title: 'Components/MaiHeadings/MaiH3',
  component: MaiH3,
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

const Template: StoryFn<MaiH3.Props> = (args) => <MaiH3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'MaiHeadings H3',
};

export const Colors = (args: MaiH3.Props) => (
  <div className='flex flex-col gap-4'>
    {meta.argTypes!.color!.options!.map(color => (
      <div
        className='flex gap-4'
        key={`color-${color}`}
      >
        <MaiH3
          {...args}
          color={color}
          children={`MaiHeadings H3 - ${color}`}
        />
      </div>
    ))}
  </div>
);
