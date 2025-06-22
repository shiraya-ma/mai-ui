'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiArticleLayout } from './mai-article-layout';
import {
  MaiArticleContainer,
  MaiArticleDateInfo,
  MaiArticleThumbnail,
} from './components';

const meta: Meta<typeof MaiArticleLayout> = {
  title: 'Layoutsk/MaiArticle',
  component: MaiArticleLayout,
  argTypes: {
    container: {
      control: {type: 'object'},
    },
    dateInfo: {
      control: {type: 'object'},
    },
    thumbnail: {
      control: {type: 'object'},
    },
  },
  tags: [
    'test',
  ],
  subcomponents: {
    MaiArticleContainer,
    MaiArticleDateInfo,
    MaiArticleThumbnail,
  },
};
export default meta;

const Template: StoryFn<MaiArticleLayout.Props> = (args) => <MaiArticleLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  dateInfo: getDateInfo(),
  thumbnail: getThumbnail(),
  title: 'MaiArticleLayout',
  body: getBody(),
};

export const IsGlassy = Template.bind({});
IsGlassy.args = {
  dateInfo: getDateInfo(),
  thumbnail: getThumbnail(),
  container: {
    isGlassy: true,
  },
  title: 'MaiArticleLayout isGlassy',
  body: getBody(),
};

/** @internal */
function getDateInfo () {
  return {
    dateInfo: {
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(), 
    },
  };
};

/** @internal */
function getThumbnail () {
  return {
    src: '/image-placeholder.png',
  };
};

/** @internal */
function getBody () {
  return `
## heading2

this is MaiArticleLayout sample.

### heading3

#### heading4
`;
};
