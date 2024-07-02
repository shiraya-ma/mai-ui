// BlockQuotePresenter
'use strict';
import React, { ReactNode, RefObject } from 'react';

const BlockQuotePresenter: React.FC<BlockQuotePresenter.Props> = (props) => {
    const {
        children,
        refBlockQuote
    } = props;
    
    return (
        <blockquote
        className='flex-col gap-4 border-l-8 border-gray-500'
        ref={ refBlockQuote }
        >
            { children }
        </blockquote>
    );
};

namespace BlockQuotePresenter {
    export type Props = {
        children?: ReactNode;
        refBlockQuote: RefObject<HTMLQuoteElement>;
    };
};

export {
    BlockQuotePresenter
};
