// BlockQuoteFC
'use strict';
import React, { ReactNode } from 'react';
import { BlockQuotePresenter } from './block-quote-presenter';
import { useBlockQuote } from './hooks';

const BlockQuoteFC: React.FC<BlockQuoteFC.Props> = (props) => {
    const { children } = props;

    const {
        refBlockQuote
    } = useBlockQuote(children);
    
    return (
        <BlockQuotePresenter
        refBlockQuote={ refBlockQuote }
        >
            { children }
        </BlockQuotePresenter>
    );
};

namespace BlockQuoteFC {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    BlockQuoteFC
};
