// useTableIndexContext
'use client';
import { useLayoutEffect } from "react";

import { TableIndexContext } from "../../ui";

export function useTableIndexContext () {
    const getIndex = () => {
        if (typeof window === 'undefined') {
            return 0;
        }

        const tabIndex: number = (window as any).tableIndex ?? 0;

        (window as any).tableIndex = tabIndex + 1;
        
        return tabIndex;
    };

    useLayoutEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        (window as any).tableIndex = 0;
    }, []);

    const tableIndexContext: TableIndexContext.Props = {
        getIndex
    };

    return {
        tableIndexContext
    }
};
