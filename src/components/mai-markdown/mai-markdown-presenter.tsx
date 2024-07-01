// MaiMarkdownPresenter
'use strict';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import * as UI from './ui';

const MaiMarkdownPresenter: React.FC<MaiMarkdownPresenter.Props> = (props) => {
    const { children } = props;
    
    return (
        <div className='flex flex-col gap-4'>
            <Markdown
            components={{
                a: UI.A,
                code: UI.Code,
                h1: UI.H(1),
                h2: UI.H(2),
                h3: UI.H(3),
                h4: UI.H(4),
                h5: UI.H(5),
                h6: UI.H(6),
                input: UI.Input,
                ol: UI.OL,
                pre: UI.Pre,
                ul: UI.UL
            }}
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
