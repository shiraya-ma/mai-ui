'use client';
import React from 'react';
import { cn } from '@heroui/theme';
import SyntaxHighlighter, { Prism } from 'react-syntax-highlighter';

import {
  type MaiCodeBlockClassNames, 
  type MaiCodeBlockProps,
  type MaiCodeBlockStyle,
  useMaiCodeBlock,
} from './_internal';

/**
 * Wrapped SyntaxHighlighter component.
 *
 * A component that wraps SyntaxHighlighter.
 * You can specify the filename and language.
 * The style to use is imported from 'react-syntax-highlighter'.
 * The default is Night Owl.
 * 
 * @expamle
 * ```
 * 'use strict';
 * import React from 'react;
 * import { MaiCodeBlock } from '@shiraya-ma/mai-ui';
 * import solarizedDark from 'react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark';
 * 
 * export default function App () {
 *  return (
 *    <MaiCodeBlock filename='App.js' language='javascript' style={ solarizedDark }>
 *      {`any code here`}
 *    </MaiCodeBlock>
 *  );
 * };
 * ``` 
 * 
 * @param props 
 * @returns 
 */
const MaiCodeBlock: React.FC<MaiCodeBlock.Props> = (props) => {
  const {
    children,
    className,
    classNames,
    filename,
    isPrism,
    dataTestID,
    ...codeBlockProps
  } = useMaiCodeBlock(props);

  const preClassName = cn(
    classNames?.pre,
    '!mt-0 rounded-lg ',
    '!overflow-x-auto'
  );

  return (
    <div
      className={cn(
        '[&_*]:font-code [&>pre]:data-[with-filename=true]:rounded-tl-none',
        className? className: classNames?.base,
      )}
      data-slot='base'
      data-with-filename={filename !== undefined}
      data-testid={dataTestID}
    >
      { filename && (
        <div
          className={cn(
            'w-fit rounded-t-md bg-primary-300 text-primary-foreground px-2',
            classNames?.filename,
          )}
          data-slot='filename'
        >
          { filename }
        </div>
      )}
      {
        !isPrism? (
          <SyntaxHighlighter
            children={children || ''}
            className={preClassName}
            codeTagProps={{
              className: classNames?.code,
            }}
            data-style='hljs'
            {...codeBlockProps}
          />
        ): (
          <Prism
            children={children || ''}
            className={preClassName}
            codeTagProps={{
              className: classNames?.code,
            }}
            data-style='prism'
            {...codeBlockProps}
          />
        )
      }
    </div>
  );
};
MaiCodeBlock.displayName = 'MaiCodeBlock';

namespace MaiCodeBlock {
  export type Props = MaiCodeBlockProps;

  export type ClassNames = MaiCodeBlockClassNames

  export type Style = MaiCodeBlockStyle;
};

export {
  MaiCodeBlock
};