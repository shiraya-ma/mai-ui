'use strict';

import { ReactNode } from "react";
import { parseCodeBlock } from "./parse-code-block";

export function getProps (children: ReactNode) {
    const jsxChildren = children as JSX.Element;
    const innerHTML = jsxChildren.props.children as string;

    const {
        filename,
        fixedChildren,
        language
    } = parseCodeBlock(innerHTML);
    
    return {
        filename,
        fixedChildren,
        language
    };
};
