/* eslint-disable */
// useParagraph
'use client';
import { type ReactElement, useMemo, type HTMLAttributes } from "react";

export function useParagraph (props: HTMLAttributes<HTMLParagraphElement>) {
    const { children, className, node, ...pProps } = props as HTMLAttributes<HTMLParagraphElement> & { node: any };

    const generatedClassName = useMemo(() => {
        const CODE_REG = /^(code)/;

        const _c = children as ReactElement;

        if (_c.key === undefined) {
            return undefined;
        }

        if (CODE_REG.test(_c.key as string)) {
            return 'overflow-x-auto';
        }

        return undefined;
    }, [ children ]);

    const removeParagraph = useMemo(() => {
        const IMG_REG = /^(img)/;

        const _c = children as ReactElement;

        if (_c.key === undefined) {
            return false;
        }

        const removeParagraph = IMG_REG.test(_c.key as string);

        return removeParagraph;
    }, [ children ]);

    return {
        children,
        className: generatedClassName,
        removeParagraph,
        ...pProps
    };
};
