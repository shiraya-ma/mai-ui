'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiCard } from '../mai-card';
import { MaiSkeleton } from './mai-skeleton';

const meta: Meta<typeof MaiSkeleton> = {
  title: 'Components/MaiSkeleton',
  component: MaiSkeleton,
  argTypes: {
    isLoaded: {
      control: {type: 'radio'},
      options: ['true', 'false'],
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    disableAnimation: {
      control: {type: 'radio'},
      options: ['true', 'false'],
    },
  },
  tags: [
    'test',
  ],
};
export default meta;

const Template: StoryFn<MaiSkeleton.Props> = (args) => (
  <MaiCard className="w-[200px] space-y-5 p-4" radius="lg" >
    <MaiSkeleton className="rounded-lg" {...args}>
      <div className="h-24 rounded-lg bg-default-300" />
    </MaiSkeleton>
    <div className="space-y-3">
      <MaiSkeleton className="w-3/5 rounded-lg" {...args}>
        <div className="h-3 w-3/5 rounded-lg bg-default-200" />
      </MaiSkeleton>
      <MaiSkeleton className="w-4/5 rounded-lg" {...args}>
        <div className="h-3 w-4/5 rounded-lg bg-default-200" />
      </MaiSkeleton>
      <MaiSkeleton className="w-2/5 rounded-lg" {...args}>
        <div className="h-3 w-2/5 rounded-lg bg-default-300" />
      </MaiSkeleton>
    </div>
  </MaiCard>
);

export const Default = Template.bind({});
Default.args = {
};

const StandaloneTemplate: StoryFn<MaiSkeleton.Props> = (args) => (
  <div className="max-w-[300px] w-full flex items-center gap-3">
    <div>
      <MaiSkeleton className="flex rounded-full w-12 h-12" {...args}/>
    </div>
    <div className="w-full flex flex-col gap-2">
      <MaiSkeleton className="h-3 w-3/5 rounded-lg" {...args}/>
      <MaiSkeleton className="h-3 w-4/5 rounded-lg" {...args}/>
    </div>
  </div>
);

export const Standalone = StandaloneTemplate.bind({});
StandaloneTemplate.args = {
};
