// MaiCodeBlock
'use client';
import React from 'react';

import { MaiCodeBlockPresenter } from './mai-code-block-presenter';

/**
 * ReactHighlightをラップしたコンポーネント
 * 
 * ファイル名、言語を指定できる
 * 
 * 使用するテーマのscssは'highlight.js'からimportする
 * 
 * @expamle
 * ```
 * 'use strict';
 * import React from 'react;
 * import { MaiCodeBlock } from '@shiraya-ma/mai-ui';
 * import 'highlight.js/scss/night-owl.scss';
 * 
 * export default function App () {
 *  return (
 *      <MaiCodeBlock filename='App.js' language='javascript'>
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
        language
    } = props;
    
    return (
        <MaiCodeBlockPresenter
        children={ children }
        filename={ filename }
        language={ language }
        />
    );
};

export type MaiCodeBlockProps = {
    children?: string;
    filename?: string;
    language?: string;
};