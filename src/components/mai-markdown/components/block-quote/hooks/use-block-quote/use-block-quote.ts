// useBlockQuote
'use client';
import {
    type QuoteHTMLAttributes,
    useEffect,
    useMemo,
    useRef
} from "react";

import { parseChildren } from "./parse-children";

export function useBlockQuote (props: QuoteHTMLAttributes<HTMLQuoteElement>) {
    const { children, node, ...quoteBlockProps } = props as QuoteHTMLAttributes<HTMLQuoteElement> & { node: any };
    
    const refBlockQuote = useRef<HTMLQuoteElement>(null);
    const { fixedChildren, quoteType } = useMemo(() => parseChildren(children), [ children ]);

    useEffect(() => {
        const blockQuote = refBlockQuote.current;

        if (!blockQuote) {
            return;
        }

        blockQuote.setAttribute('style', 'display: flex !important; padding-left: .5rem !important');
    }, []);

    // return {
    //     children/*: fixedChildren */,
    //     quoteType: 'DEFAULT',
    //     refBlockQuote,
    //     ...quoteBlockProps
    // };
    
    return {
        children: fixedChildren,
        quoteType,
        refBlockQuote,
        ...quoteBlockProps
    };
};
