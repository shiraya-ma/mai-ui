'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiH1 } from './mai-h1';

const meta: Meta<typeof MaiH1> = {
  title: 'Components/MaiHeadings/MaiH1',
  component: MaiH1,
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

const Template: StoryFn<MaiH1.Props> = (args) => <MaiH1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'MaiHeadings H1',
};

export const Colors = (args: MaiH1.Props) => (
  <div className='flex flex-col gap-4'>
    {meta.argTypes!.color!.options!.map(color => (
      <div
        className='flex gap-4'
        key={`color-${color}`}
      >
        <MaiH1
          {...args}
          color={color}
          children={`MaiHeadings H1 - ${color}`}
        />
      </div>
    ))}
  </div>
);
