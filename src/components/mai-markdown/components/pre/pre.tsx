// Pre
'use strict';
import React, { type HTMLAttributes } from 'react';

import { MaiCodeBlock } from '../../../mai-code-block';
import { MarkdownCodeContextProvider } from '../../hooks';

import { usePre } from './hooks';

const PreFC: React.FC<Pre.Props> = (props) => {
    const { children, filename, language } = usePre(props);

    return (
        <MarkdownCodeContextProvider>
            <MaiCodeBlock filename={ filename } language={ language }>
                { children }
            </MaiCodeBlock>
        </MarkdownCodeContextProvider>
    );
};

const Pre = (props: Pre.Props) => (<PreFC { ...props } />);

namespace Pre {
    export type Props = HTMLAttributes<HTMLPreElement> & {};
};

export {
    Pre
};
