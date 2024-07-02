// useBlockQuote
'use client';
import { ReactNode, useEffect, useMemo, useRef } from "react";
import { parseChildren } from "./parse-children";

export function useBlockQuote (children?: ReactNode) {
    const refBlockQuote = useRef<HTMLQuoteElement>(null);

    const { fixedChildren, quoteType } = useMemo(() => parseChildren(children), [ children ]);

    useEffect(() => {
        const blockQuote = refBlockQuote.current;

        if (!blockQuote) {
            return;
        }

        blockQuote.setAttribute('style', 'display: flex !important; padding-left: .5rem !important');
    }, []);

    return {
        fixedChildren,
        quoteType,
        refBlockQuote
    };
};
