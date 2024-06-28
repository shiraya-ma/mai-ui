// MaiMarkdown
'use strict';
import React from 'react';

import { MaiMarkdownPresenter } from './mai-markdown-presenter';
import { useParseMarkdown } from './hooks';

const MaiMarkdown: React.FC<MaiMarkdown.Props> = (props) => {
    const { children } = props;

    const { fixedChildren } = useParseMarkdown(children);
    
    return (
        <MaiMarkdownPresenter>
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
