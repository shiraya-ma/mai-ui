// useRemoveParagraph
'use client';
import { ReactNode, useMemo } from "react";

export function useRemoveParagraph (children: ReactNode) {
    const removeReg = /^(img)/;
    
    const removeParagraph = useMemo(() => {
        const _c: Children = children as any;

        if ((_c as any).map !== undefined) {
            return false;
        }

        const removeParagraph = removeReg.test(_c.key);

        return removeParagraph;
    }, [ children ]);

    return {
        removeParagraph
    };
};

type Children = Node;

type Node = {
    key: string;
};
