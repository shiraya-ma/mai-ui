// MaiMarkdownPresenter
'use strict';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MaiMarkdownPresenter: React.FC<MaiMarkdownPresenter.Props> = (props) => {
    const { children } = props;
    
    return (
        <div>
            <Markdown
            remarkPlugins={[
                remarkGfm
            ]}
            >
                { children }
            </Markdown>
        </div>
    );
};

namespace MaiMarkdownPresenter {
    export type Props = {
        children: string;
    };
};

export {
    MaiMarkdownPresenter
};
