// useProps
'use client';

import { ReactNode, useMemo } from "react";
import { parseCodeBlock } from "./parse-code-block";

export function useProps (children: ReactNode) {
    const jsxChildren = children as JSX.Element;
    const innerHTML = jsxChildren.props.children as string;

    const {
        filename,
        fixedChildren,
        language
    } = useMemo(() => parseCodeBlock(innerHTML), [ innerHTML ]);
    
    return {
        filename,
        fixedChildren,
        language
    };
};
