// useMaiMarkdown
'use client';
import type { MaiMarkdown } from "../../mai-markdown";
import { parseCodeblock } from "./parse-codeblock";

export function useMaiMarkdown (props: MaiMarkdown.Props) {
    const { children, ...markdownProps } = props;

    const fixedChildren = parseCodeblock(children || '');

    return {
        children: fixedChildren,
        ...markdownProps
    };
};
