// BlockQuote
'use strict';
import React, { type QuoteHTMLAttributes } from 'react';

import {
    ChatSquare,
    ExclamationOctagon,
    ExclamationTriangle,
    InfoCircle,
    Lightbulb
} from 'react-bootstrap-icons';

import { useBlockQuote } from './hooks/use-block-quote';

const BlockQuoteFC: React.FC<BlockQuote.Props> = (props) => {
    const {
        children,
        quoteType,
        refBlockQuote,
        ...blockQuoteprops
    } = useBlockQuote(props);

    return (
        <blockquote
        { ...blockQuoteprops }
        className={[
            'block border-l-8',
            'data-[quote=DEFAULT]:border-gray-500',
            'data-[quote=NOTE]:border-cider-500',
            '[&>p]:data-[quote=NOTE]:text-cider-500',
            'data-[quote=TIP]:border-mint-500',
            '[&>p]:data-[quote=TIP]:text-mint-500',
            'data-[quote=IMPORTANT]:border-purple-500',
            '[&>p]:data-[quote=IMPORTANT]:text-purple-500',
            'data-[quote=WARNING]:border-citrus-500',
            '[&>p]:data-[quote=WARNING]:text-citrus-500',
            'data-[quote=CAUTION]:border-strawberry-500',
            '[&>p]:data-[quote=CAUTION]:text-strawberry-500',
        ].join(' ')}
        ref={ refBlockQuote }
        data-quote={ quoteType }>
            { quoteType !== 'DEFAULT' && (
                <p className='[&>svg]:inline'>
                    {
                        quoteType === 'NOTE'? <InfoCircle />:
                        quoteType === 'TIP'? <Lightbulb/>:
                        quoteType === 'IMPORTANT'? <ChatSquare/>:
                        quoteType === 'WARNING'? <ExclamationTriangle/>:
                        quoteType === 'CAUTION'? <ExclamationOctagon/>: <></>
                    }
                    &nbsp;
                    { quoteType }
                </p>
            )}
            
            { children }
        </blockquote>
    );
};

const BlockQuote = (props: BlockQuote.Props) => (<BlockQuoteFC { ...props } />);

namespace BlockQuote {
    export type Props = QuoteHTMLAttributes<HTMLQuoteElement>;
};

export {
    BlockQuote
};
