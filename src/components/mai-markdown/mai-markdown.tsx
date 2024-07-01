// MaiMarkdown
'use strict';
import React from 'react';

import { MaiMarkdownPresenter } from './mai-markdown-presenter';
import { useParseMarkdown, useTableIndexContext } from './hooks';

const MaiMarkdown: React.FC<MaiMarkdown.Props> = (props) => {
    const { children } = props;

    const { fixedChildren } = useParseMarkdown(children);
    const { tableIndexContext } = useTableIndexContext();
    
    return (
        <MaiMarkdownPresenter
        tableIndexContext={ tableIndexContext }
        >
            { fixedChildren }
        </MaiMarkdownPresenter>
    );
};

namespace MaiMarkdown {
    export type Props = {
        children: string;
    };
};

export {
    MaiMarkdown
};
