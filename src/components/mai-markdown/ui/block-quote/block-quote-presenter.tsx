// BlockQuotePresenter
'use strict';
import React, { ReactNode, useEffect, useRef } from 'react';

const BlockQuotePresenter: React.FC<BlockQuotePresenter.Props> = (props) => {
    const { children } = props;

    const refBlockQuote = useRef<HTMLQuoteElement>(null);

    useEffect(() => {
        const blockQuote = refBlockQuote.current;

        if (!blockQuote) {
            return;
        }

        blockQuote.setAttribute('style', 'display: flex !important; padding-left: .5rem !important');
    }, []);
    
    return (
        <blockquote
        className='flex-col gap-4 border-l-8 border-mint-300/50'
        ref={ refBlockQuote }
        >
            { children }
        </blockquote>
    );
};

namespace BlockQuotePresenter {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    BlockQuotePresenter
};
