'use client';
import { parseCodeblock } from "./parse-codeblock";

export function useParseMarkdown (children: string) {
    const parseCodeblockChildren = parseCodeblock(children);

    const fixedChildren = parseCodeblockChildren;

    return {
        fixedChildren
    };
};
