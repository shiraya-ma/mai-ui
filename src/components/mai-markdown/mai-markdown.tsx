'use strict';
import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';

import { OGPFetcherFunction, OGPFetcherProvider } from '@/features/ogp-fetcher';
import * as components from './components';
import {
  rehypeAlertBlockquote,
  rehypeCheckboxLabel,
  rehypeMarkCodeInlineOrBlock,
  rehypeOnlyChildAnchor,
  rehypeRemoveParagraphForCardLink,
  rehypeTemp,
  rehypeTransferDataAttributesToPre,
  rehypeUnwrapFootnoteParagraphs,
  remarkCodeMetaToProperties,
} from './internal';

const MaiMarkdown: React.FC<MaiMarkdown.Props> = (props) => {
  const {
    children,
    ogpFetcher,
  } = props;
  
  // return (
  //   <C.TableIndexContextProvider>
  //     <div
  //     className='flex flex-col gap-4'
  //     ref={ ref }>
  //       <Markdown
  //       components={{
  //         a: C.A,
  //         blockquote: C.BlockQuote,
  //         code: C.Code,
  //         h1: C.H(1),
  //         h2: C.H(2),
  //         h3: C.H(3),
  //         h4: C.H(4),
  //         h5: C.H(5),
  //         h6: C.H(6),
  //         img: C.Img,
  //         input: C.Input,
  //         ol: C.Ol,
  //         p: C.P,
  //         pre: C.Pre,
  //         table: C.Table,
  //         ul: C.Ul
  //       }}
  //       rehypePlugins={[
  //         rehypeRaw,
  //         rehypeMai
  //       ]}
  //       remarkPlugins={[
  //         remarkGfm
  //       ]}>
  //         { children ?? '' }
  //       </Markdown>      
  //     </div>
  //   </C.TableIndexContextProvider>
  // );

  // console.debug(children);

  return (
    <div
      data-slot='base'
    >
      <OGPFetcherProvider fetcher={ogpFetcher}>
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
            rehypeTemp,
          ]}
          remarkPlugins={[
            remarkGfm,
            remarkCodeMetaToProperties,
          ]}
        />
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
