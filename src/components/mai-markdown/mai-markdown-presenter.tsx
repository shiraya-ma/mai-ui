// MaiMarkdownPresenter
'use strict';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {
    MaiH1,
    MaiH2,
    MaiH3,
    MaiH4,
    MaiH5,
    MaiH6
} from '../mai-headings';

import * as UI from './ui';

const MaiMarkdownPresenter: React.FC<MaiMarkdownPresenter.Props> = (props) => {
    const { children } = props;
    
    return (
        <Markdown
        components={{
            a: UI.A,
            code: UI.Code,
            h1: MaiH1,
            h2: MaiH2,
            h3: MaiH3,
            h4: MaiH4,
            h5: MaiH5,
            h6: MaiH6,
            pre: UI.Pre
        }}
        remarkPlugins={[
            remarkGfm
        ]}
        >
            { children }
        </Markdown>
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
