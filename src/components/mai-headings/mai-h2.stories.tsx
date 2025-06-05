'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiH2 } from './mai-h2';

const meta: Meta<typeof MaiH2> = {
  title: 'Components/MaiHeadings/MaiH2',
  component: MaiH2,
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

const Template: StoryFn<MaiH2.Props> = (args) => <MaiH2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'MaiHeadings H2',
};

export const Colors = (args: MaiH2.Props) => (
  <div className='flex flex-col gap-4'>
    {meta.argTypes!.color!.options!.map(color => (
      <div
        className='flex gap-4'
        key={`color-${color}`}
      >
        <MaiH2
          {...args}
          color={color}
          children={`MaiHeadings H2 - ${color}`}
        />
      </div>
    ))}
  </div>
);
