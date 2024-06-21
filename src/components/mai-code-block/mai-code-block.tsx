// MaiCodeBlock
'use client';
import React, { CSSProperties } from 'react';

import { MaiCodeBlockPresenter } from './mai-code-block-presenter';

/**
 * SyntaxHighlighterをラップしたコンポーネント
 * 
 * ファイル名、言語を指定できる
 * 
 * 使用するスタイルは'react-syntax-highlighter'からimportする  
 * デフォルトはSolarized Dark
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
export const MaiCodeBlock: React.FC<MaiCodeBlockProps> = (props) => {
    const {
        children,
        filename,
        language,
        style
    } = props;
    
    return (
        <MaiCodeBlockPresenter
        children={ children }
        filename={ filename }
        language={ language }
        style={ style }
        />
    );
};

export type MaiCodeBlockProps = {
    children: string;
    filename?: string;
    language?: string;
    style?: {
        [key: string]: CSSProperties;
    };
};