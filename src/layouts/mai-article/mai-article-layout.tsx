'use strict';
import React from 'react';

import { MaiH1, MaiMarkdown } from '@/components';
import {
  MaiArticleContainer,
  MaiArticleDateInfo,
  MaiArticleDivider,
  MaiArticleThumbnail
} from './components';

const MaiArticleLayout: React.FC<MaiArticleLayout.Props> = (props) => {
  const {
    container,
    dateInfo,
    thumbnail,
    title,
    body,
  } = props;

  return (
    <MaiArticleContainer
      {...container}
    >
      {thumbnail && (
        <MaiArticleThumbnail {...thumbnail}/>
      )}

      {title && (
        <MaiH1>{title}</MaiH1>
      )}

      {dateInfo && (
        <MaiArticleDateInfo {...dateInfo}/>
      )}

      <MaiArticleDivider />

      {body && (
        <main>
          <MaiMarkdown children={body}/>
        </main>
      )}

    </MaiArticleContainer>
  );
};

namespace MaiArticleLayout {
  export type Props = Partial<{
    container: MaiArticleContainer.Props;
    dateInfo : MaiArticleDateInfo.Props;
    thumbnail: MaiArticleThumbnail.Props;
    title: string;
    body: string;
  }>;
};

export {
  MaiArticleLayout,
};
