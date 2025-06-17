'use strict';
import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';

import { FallbackImageProvider } from '@/features/fallback-image';
import { OGPFetcherFunction, OGPFetcherProvider } from '@/features/ogp-fetcher';
import * as components from './components';
import {
  rehypeAlertBlockquote,
  rehypeAutoAriaLabelForTable,
  rehypeCheckboxLabel,
  rehypeMarkCodeInlineOrBlock,
  rehypeOnlyChildAnchor,
  rehypeRemoveParagraphForCardLink,
  rehypeTransferDataAttributesToPre,
  rehypeUnwrapFootnoteParagraphs,
  rehypeUnwrapImages,
  remarkCodeMetaToProperties,
} from './internal';

const MaiMarkdown: React.FC<MaiMarkdown.Props> = (props) => {
  const {
    children,
    ogpFetcher,
  } = props;
  
  return (
    <div
      className='flex flex-col gap-4'
      data-slot='base'
    >
      <OGPFetcherProvider fetcher={ogpFetcher}>
        <FallbackImageProvider
          fallbackImageProps={{
            src: '/image-placeholder.png',
            width: 300,
            height: 300
          }}
        >
          <Markdown
            children={children}
            components={components}
            rehypePlugins={[
              rehypeRaw,
              rehypeTransferDataAttributesToPre,
              rehypeMarkCodeInlineOrBlock,
              rehypeOnlyChildAnchor,
              rehypeRemoveParagraphForCardLink,
              rehypeCheckboxLabel,
              rehypeUnwrapFootnoteParagraphs,
              rehypeAlertBlockquote,
              rehypeUnwrapImages,
              rehypeAutoAriaLabelForTable,
            ]}
            remarkPlugins={[
              remarkGfm,
              remarkCodeMetaToProperties,
            ]}
          />
        </FallbackImageProvider>
      </OGPFetcherProvider>
    </div>
  );
};
MaiMarkdown.displayName = 'MaiMarkdown';

namespace MaiMarkdown {
  export type Props = Partial<{
    children: string;
    ogpFetcher: OGPFetcherFunction;
  }>;
};

export {
  MaiMarkdown,
};
