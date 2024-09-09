// MaiCodeBlock
'use client';
import React, { CSSProperties } from 'react';
import SyntaxHighlighter, { Prism } from 'react-syntax-highlighter';

import { classNames } from '../../libs';

import { useMaiCodeBlock } from './hooks';

/**
 * SyntaxHighlighterをラップしたコンポーネント
 * 
 * ファイル名、言語を指定できる
 * 
 * 使用するスタイルは'react-syntax-highlighter'からimportする  
 * デフォルトはNight Owl
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
 *      <MaiCodeBlock filename='App.js' language='javascript' style={ solarizedDark }>
 *          {`any code here`}
 *      </MaiCodeBlock>
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
        filename,
        isPrism,
        language,
        style
    } = useMaiCodeBlock(props); 
    
    return (
        <div
        className={classNames(
            '[&>pre]:rounded-lg [&>pre]:overflow-x-auto',
            'dark:[&>pre]:border dark:[&>pre]:border-white/10',
            '[&>pre]:data-[with-filename=true]:rounded-tl-none',
            className
        )}
        data-with-filename={ filename !== undefined }>
            { filename && (
                <div className='w-fit rounded-t-md bg-mint-300 text-white px-2'>
                    { filename }
                </div>
            )}

            { isPrism? (
                <>
                    <Prism
                    language={ language }
                    style={ style }
                    className='!mt-0 !mb-4 [&_*]:font-code'
                    >
                        { children }
                    </Prism>
                </>
            ): (
                <>
                    <SyntaxHighlighter
                    language={ language }
                    style={ style }
                    className='!mt-0 !mb-4 [&_*]:font-code'
                    >
                        { children }
                    </SyntaxHighlighter>
                </>
            ) }     
        </div>
    );
};

namespace MaiCodeBlock {
    export type Props = {
        children: string;
        className?: string;
        filename?: string;
        language?: string;
        style?: Style;
    };

    export type Style = {
        [key: string]: CSSProperties;
    };
};

export {
    MaiCodeBlock
};