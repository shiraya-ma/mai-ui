// MaiCodeBlockPresenter
'use client';
import React, { CSSProperties } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import solarizedDark from 'react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark';

import { margeClassNames } from '@mai-ui/libs';

export const MaiCodeBlockPresenter: React.FC<MaiCodeBlockPresenterProps> = (props) => {
    const { children, className, filename, language, style } = props;

    return (
        <div
        className={ margeClassNames([
            `[&>pre]:rounded-lg [&>pre]:overflow-x-auto dark:[&>pre]:border dark:[&>pre]:border-white/10 [&>pre]:data-[with-filename=true]:rounded-tl-none`,
            className
        ]) }
        data-with-filename={ filename !== undefined }
        >
            { filename && (
                <div className='w-fit rounded-t-md bg-mint-300 text-white px-2'>
                    { filename }
                </div>
            )}
            
            <SyntaxHighlighter
            language={ language }
            style={ style ?? solarizedDark }
            className='[&_*]:font-code'
            >
                { children }
            </SyntaxHighlighter>
        </div>
    );
};

export type MaiCodeBlockPresenterProps = {
    children: string;
    className?: string;
    filename?: string;
    language?: string;
    style?: {
        [key: string]: CSSProperties;
    };
};
