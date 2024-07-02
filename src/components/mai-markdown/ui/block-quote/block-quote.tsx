// BlockQuote
'use strict';
import React, { ReactNode } from 'react';
import { BlockQuoteFC } from './block-quote-fc';

const BlockQuote = (props: BlockQuote.Props) => {
    const { children } = props;
    
    return (
        <BlockQuoteFC>
            { children }
        </BlockQuoteFC>
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
