// MaiMarkdown
'use strict';
import React from 'react';

import { MaiMarkdownPresenter } from './mai-markdown-presenter';

const MaiMarkdown: React.FC<MaiMarkdown.Props> = (props) => {
    const {} = props;
    
    return (
        <MaiMarkdownPresenter/>
    );
};

namespace MaiMarkdown {
    export type Props = {};
};

export {
    MaiMarkdown
};
