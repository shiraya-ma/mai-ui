// useHighlighterStyle
'use client';
import { CSSProperties, useMemo } from "react";
import solarizedDark from 'react-syntax-highlighter/dist/esm/styles/prism/night-owl';

export function useHighlighterStyle (style?: { [key: string]: CSSProperties }) {
    const highlighterStyle = useMemo(()=> (style ?? solarizedDark), [ style ]);

    const isPrism = useMemo(() => {
        const keys = Object.keys(highlighterStyle);

        const hasHLJSKeys = keys.some(key => /^hljs/.test(key));

        return !hasHLJSKeys;
    }, [ highlighterStyle ]);

    return {
        highlighterStyle,
        isPrism
    };
};
