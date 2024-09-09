// useMarkdownCode
'use client';
import { useContext } from "react";

import { MarkdownCodeContext } from './markdown-code-context';

export function useMarkdownCode () {
    const { inPre } = useContext(MarkdownCodeContext);

    return {
        inPre
    };
};
