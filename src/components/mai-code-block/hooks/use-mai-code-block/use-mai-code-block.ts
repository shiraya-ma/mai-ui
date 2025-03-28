// useMaiCodeBlock
'use client';
import { useMemo } from 'react';
// import nightOwl from 'react-syntax-highlighter/dist/esm/styles/prism/night-owl';

import { type MaiCodeBlock } from '../../mai-code-block';

export function useMaiCodeBlock (props: MaiCodeBlock.Props) {
    const { style, ...maiCodeBlockProps } = props;
    
    // const _style = style ?? nightOwl;
    const _style = style!;

    const isPrism = useMemo(() => {
        const keys = Object.keys(_style);

        const hasHLJSKeys = keys.some(key => /^hljs/.test(key));

        return !hasHLJSKeys;
    }, [ _style ]);

    return {
        style: _style,
        isPrism,
        ...maiCodeBlockProps
    };
};
