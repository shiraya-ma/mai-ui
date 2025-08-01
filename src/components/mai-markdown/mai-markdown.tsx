'use strict';
import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';

import { FallbackImageProps, FallbackImageProvider } from '@/features/fallback-image';
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

/**
 * MaiMarkdown is a React component for rendering Markdown content with extended features.
 * 
 * This component leverages `react-markdown` to parse and render Markdown, supporting GitHub Flavored Markdown (GFM)
 * and raw HTML via plugins. It also provides custom rendering components and several rehype/remark plugins for
 * enhanced Markdown features such as:
 * - OGP (Open Graph Protocol) card fetching and rendering
 * - Fallback image handling
 * - Custom blockquotes, checkboxes, code blocks, and more
 * 
 * The component is wrapped with providers for OGP fetching and fallback image handling, allowing for extensible
 * and robust Markdown rendering in your application.
 * 
 * @remarks
 * - The `children` prop should be a Markdown string.
 * - The `ogpFetcher` and `fallbackImageProps` props are optional and provide additional functionality.
 * 
 * @example
 * ```tsx
 * <MaiMarkdown
 *   children="# Hello, Markdown!"
 *   ogpFetcher={customOGPFetcher}
 *   fallbackImageProps={{ src: '/fallback.png' }}
 * />
 * ```
 * 
 * @param props - The props for the MaiMarkdown component.
 * @param props.children - The Markdown content to render.
 * @param props.fallbackImageProps - Optional props for fallback image handling.
 * @param props.ogpFetcher - Optional function for fetching OGP data.
 */
const MaiMarkdown: React.FC<MaiMarkdown.Props> = (props) => {
  const {
    children,
    fallbackImageProps,
    ogpFetcher,
  } = props;
  
  return (
    <div
      className='flex flex-col gap-4'
      data-slot='base'
    >
      <OGPFetcherProvider fetcher={ogpFetcher}>
        <FallbackImageProvider fallbackImageProps={fallbackImageProps}>
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
    fallbackImageProps: FallbackImageProps;
    ogpFetcher: OGPFetcherFunction;
  }>;
};

export {
  MaiMarkdown,
};
