// usePre
'use client';
import { useMemo, type HTMLAttributes } from 'react';

import { parseCodeBlock } from './parse-code-block';

export function usePre (props: HTMLAttributes<HTMLElement>) {
    const { children } = props;

    const jsxChildren = children as JSX.Element;
    const innerHTML = jsxChildren.props.children as string;

    const {
        filename,
        fixedChildren,
        language
    } = useMemo(() => parseCodeBlock(innerHTML), [ innerHTML ]);

    return {
        children: fixedChildren,
        filename,
        language
    };
};
