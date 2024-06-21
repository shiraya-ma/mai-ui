// MaiCodeBlockPresenter
'use client';
import React, { CSSProperties } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import solarizedDark from 'react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark';

import S from './style.module.scss';

export const MaiCodeBlockPresenter: React.FC<MaiCodeBlockPresenterProps> = (props) => {
    const { children, filename, language, style } = props;

    return (
        <div className={ S.maiCodeBlockContainer } data-with-filename={ filename !== undefined }>
            { filename && (
                <div
                className={ S.maiCodeBlockFileName }
                >
                    { filename }
                </div>
            )}
            
            <SyntaxHighlighter language={ language } style={ style ?? solarizedDark } className={ S.maiCodeBlockCode }>
                { children }
            </SyntaxHighlighter>
        </div>
    );
};

export type MaiCodeBlockPresenterProps = {
    children: string;
    filename?: string;
    language?: string;
    style?: {
        [key: string]: CSSProperties;
    };
};
