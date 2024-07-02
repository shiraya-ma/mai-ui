// useBlockQuote
'use client';
import { ReactNode, useEffect, useRef } from "react";

export function useBlockQuote (children?: ReactNode) {
    const refBlockQuote = useRef<HTMLQuoteElement>(null);

    useEffect(() => {
        const blockQuote = refBlockQuote.current;

        if (!blockQuote) {
            return;
        }

        blockQuote.setAttribute('style', 'display: flex !important; padding-left: .5rem !important');
    }, [ children ]);

    return {
        refBlockQuote
    };
};
