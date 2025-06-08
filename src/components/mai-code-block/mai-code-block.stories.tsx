'use strict';
import { Meta, StoryFn } from '@storybook/react';
import SolarizedDark from 'react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark';
import Twilight from 'react-syntax-highlighter/dist/esm/styles/prism/twilight';

import { MaiCodeBlock } from './mai-code-block';
import { MaiCodeBlockStyleProvider } from './mai-code-block-style-provider';

const meta: Meta<typeof MaiCodeBlock> = {
  title: 'Components/MaiCodeBlock',
  component: MaiCodeBlock,
  argTypes: {
    children: {
      control: {type: 'text'},
    },
    filename: {
      control: {type: 'text'},
    },
    language: {
      control: {type: 'text'},
    },
    showLineNumbers: {
      control: {type: 'boolean'},
      options: [true, false],
    },
    style: {
      control: {type: 'object'},
    },
  },
  tags: [
    'test',
  ],
};
export default meta;

const Template: StoryFn<MaiCodeBlock.Props> = (args) => <MaiCodeBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: getCodeExampleJS(),
};

export const WithFilename = Template.bind({});
WithFilename.args = {
  children: getCodeExampleJS(),
  filename: 'index.tsx',
};

export const WithLanguage = Template.bind({});
WithLanguage.args = {
  children: getCodeExampleJS(),
  language: 'tsx',
};

export const WithLineNumbers = Template.bind({});
WithLineNumbers.args = {
  children: getCodeExampleJS(),
  filename: 'index.tsx',
  language: 'tsx',
  showLineNumbers: true,
};

export const WithStyle = Template.bind({});
WithStyle.args = {
  children: getCodeExampleJS(),
  filename: 'index.tsx',
  language: 'tsx',
  style: SolarizedDark,
};

const TemplateWithContext: StoryFn<MaiCodeBlock.Props> = (args) => {
  const {style, ...codeBlockArgs} = args;

  return (
    <MaiCodeBlockStyleProvider style={style}>
      <MaiCodeBlock {...codeBlockArgs} />
    </MaiCodeBlockStyleProvider>
  );
};

export const WithContext = TemplateWithContext.bind({});
WithContext.args = {
  children: getCodeExampleJS(),
  filename: 'index.tsx',
  language: 'tsx',
  style: Twilight,
};

function getCodeExampleJS () {
  return `'use strict';
import React, { type MouseEventHandler, type PropsWithChildren } from "react";

const App: React.FC<App.Props> = (props) => {
  const { children, name, massage, clickHandler } = props;

  return (
    <main>
      <p>Hello {name}!</p>

      <button
        onClick={clickHandler(message)}
      >SHOW MESSAGE</button>
    </main>
  );
};
App.displayName = 'App';

namespace App {
  export type Props = PropsWithChildren<{
    name?: string;
    message?: string;
    clickHandler?: (message: string) => MouseEventHandler<HTMLButtonElement>;
  }>;
};

export default App;
`;
};
