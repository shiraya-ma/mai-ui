// MaiMarkdown
'use strict';
import React from 'react';

import { MaiMarkdownPresenter } from './mai-markdown-presenter';

const MaiMarkdown: React.FC<MaiMarkdown.Props> = (props) => {
    const { children } = props;
    
    return (
        <MaiMarkdownPresenter>
            { children }
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
