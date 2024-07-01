// MaiMarkdownPresenter
'use strict';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import * as UI from './ui';

const MaiMarkdownPresenter: React.FC<MaiMarkdownPresenter.Props> = (props) => {
    const { children, tableIndexContext } = props;
    
    return (
        <UI.TableIndexContext.Provider value={tableIndexContext}>
            <div className='flex flex-col gap-4'>
                <Markdown
                components={{
                    a: UI.A,
                    blockquote: UI.BlockQuote,
                    code: UI.Code,
                    h1: UI.H(1),
                    h2: UI.H(2),
                    h3: UI.H(3),
                    h4: UI.H(4),
                    h5: UI.H(5),
                    h6: UI.H(6),
                    input: UI.Input,
                    img: UI.Img,
                    ol: UI.OL,
                    pre: UI.Pre,
                    table: UI.Table,
                    ul: UI.UL
                }}
                remarkPlugins={[
                    remarkGfm
                ]}
                >
                    { children }
                </Markdown>
            </div>
        </UI.TableIndexContext.Provider>
    );
};

namespace MaiMarkdownPresenter {
    export type Props = {
        children: string;
        tableIndexContext: UI.TableIndexContext.Props;
    };
};

export {
    MaiMarkdownPresenter
};
