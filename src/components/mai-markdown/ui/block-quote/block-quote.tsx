// BlockQuote
'use strict';
import React, { ReactNode } from 'react';
import { BlockQuotePresenter } from './block-quote-presenter';

const BlockQuote = (props: BlockQuote.Props) => {
    const { children } = props;
    
    return (
        <BlockQuotePresenter>
            { children }
        </BlockQuotePresenter>
    );
};

namespace BlockQuote {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    BlockQuote
};
