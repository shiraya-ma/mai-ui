'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiHeadingsStyleProvider } from './mai-headings-style-provider';
import { MaiH1 } from './mai-h1';
import { MaiH2 } from './mai-h2';
import { MaiH3 } from './mai-h3';
import { MaiH4 } from './mai-h4';
import { MaiH5 } from './mai-h5';
import { MaiH6 } from './mai-h6';

const meta: Meta<typeof MaiH6> = {
  title: 'Components/MaiHeadings/withStyleProvider',
  component: MaiHeadingsStyleProvider,
  argTypes: {
  },
  tags: [
    'test',
  ],
};
export default meta;

const Template: StoryFn<MaiHeadingsStyleProvider.Props> = ({context}) => (
  <MaiHeadingsStyleProvider context={context}>
    <MaiH1>MaiH1</MaiH1>
    <MaiH2>MaiH2</MaiH2>
    <MaiH3>MaiH3</MaiH3>
    <MaiH4>MaiH4</MaiH4>
    <MaiH5>MaiH5</MaiH5>
    <MaiH6>MaiH6</MaiH6>
  </MaiHeadingsStyleProvider>
);

export const Default = Template.bind({});
Default.args = {
  context: {},
};

export const WithContext = Template.bind({});
WithContext.args = {
  context: {
    1: {
      base: 'text-center',
    },
    2: {
      base: 'border-mint-300 border-l-[1ch] border-b-4 bg-mint-100 px-2',
      text: '!text-chocolate-700',
      icon: {
        anchor: '!text-chocolate-700',
      },
    },
    3: {
      base: 'p-2 border-b-1 border-mint-300',
    },
    4: {},
    5: {},
    6: {},
  },
};

// export const Colors = (args: MaiH6.Props) => (
//   <div className='flex flex-col gap-4'>
//     {meta.argTypes!.color!.options!.map(color => (
//       <div
//         className='flex gap-4'
//         key={`color-${color}`}
//       >
//         <MaiH6
//           {...args}
//           color={color}
//           children={`MaiHeadings H6 - ${color}`}
//         />
//       </div>
//     ))}
//   </div>
// );
