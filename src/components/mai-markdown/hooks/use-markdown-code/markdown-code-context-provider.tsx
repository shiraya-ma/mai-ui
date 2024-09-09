// MarkdownCodeContextProvider
'use strict';
import React, { ReactNode } from 'react';

import { MarkdownCodeContext } from './markdown-code-context';

const MarkdownCodeContextProvider: React.FC<MarkdownCodeContextProvider.Props> = (props) => {
    const { children } = props;
    
    return (
        <MarkdownCodeContext.Provider value={{ inPre: true }}>
            { children }
        </MarkdownCodeContext.Provider>
    );
};

namespace MarkdownCodeContextProvider {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    MarkdownCodeContextProvider
};
