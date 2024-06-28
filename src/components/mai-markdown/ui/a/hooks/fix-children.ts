'use strict';
import { ReactNode } from "react";

export function fixChildren (children: ReactNode) {
    const innerText = children as string;

    const reg = /\?card$/;

    const fixedChildren = innerText.replace(reg, '');

    return {
        fixedChildren
    };
};
