// MaiCodeBlockPresenter
'use client';
import React, { CSSProperties } from 'react';
import SyntaxHighlighter, { Prism } from 'react-syntax-highlighter';

import { margeClassNames } from '../../libs';

export const MaiCodeBlockPresenter: React.FC<MaiCodeBlockPresenterProps> = (props) => {
    const { children, className, filename, isPrism, language, style } = props;

    return (
        <div
        className={ margeClassNames(
            `[&>pre]:rounded-lg [&>pre]:overflow-x-auto dark:[&>pre]:border dark:[&>pre]:border-white/10 [&>pre]:data-[with-filename=true]:rounded-tl-none`,
            className
        ) }
        data-with-filename={ filename !== undefined }
        >
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

export type MaiCodeBlockPresenterProps = {
    children: string;
    className?: string;
    filename?: string;
    isPrism: boolean;
    language?: string;
    style: {
        [key: string]: CSSProperties;
    };
};
