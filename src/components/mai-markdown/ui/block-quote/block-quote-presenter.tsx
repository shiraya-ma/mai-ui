// BlockQuotePresenter
'use strict';
import React, { ReactNode, RefObject } from 'react';
import {
    ChatSquare,
    ExclamationOctagon,
    ExclamationTriangle,
    InfoCircle,
    Lightbulb
} from 'react-bootstrap-icons';

const BlockQuotePresenter: React.FC<BlockQuotePresenter.Props> = (props) => {
    const {
        children,
        quoteType,
        refBlockQuote
    } = props;
    
    return (
        <blockquote
        className='
        flex-col gap-2 border-l-8
        data-[quote=DEFAULT]:border-gray-500
        data-[quote=NOTE]:border-cider-500
        [&>span]:data-[quote=NOTE]:text-cider-500
        data-[quote=TIP]:border-mint-500
        [&>span]:data-[quote=TIP]:text-mint-500
        data-[quote=IMPORTANT]:border-purple-500
        [&>span]:data-[quote=IMPORTANT]:text-purple-500
        data-[quote=WARNING]:border-citrus-500
        [&>span]:data-[quote=WARNING]:text-citrus-500
        data-[quote=CAUTION]:border-strawberry-500
        [&>span]:data-[quote=CAUTION]:text-strawberry-500
        '
        ref={ refBlockQuote }
        data-quote={ quoteType }
        >
            { quoteType !== 'DEFAULT' && (
                <span className='[&>svg]:inline'>
                    {
                        quoteType === 'NOTE'? <InfoCircle />:
                        quoteType === 'TIP'? <Lightbulb/>:
                        quoteType === 'IMPORTANT'? <ChatSquare/>:
                        quoteType === 'WARNING'? <ExclamationTriangle/>:
                        quoteType === 'CAUTION'? <ExclamationOctagon/>: <></>
                    }
                    &nbsp;
                    { quoteType }
                </span>
            )}
            { children }
        </blockquote>
    );
};

namespace BlockQuotePresenter {
    export type Props = {
        children?: ReactNode;
        quoteType: string;
        refBlockQuote: RefObject<HTMLQuoteElement>;
    };
};

export {
    BlockQuotePresenter
};
