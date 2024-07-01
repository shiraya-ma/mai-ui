// useHeadingClassName
'use client';
import { useCallback, useMemo } from "react";

import { margeClassNames } from "../../../../libs";

export function useHeadingClassName (className?: string) {
    const importantClassName = useMemo(() => className, [ className ]);

    const headingClassName = useCallback((className?: string) => {
        const commonClassName = 'flex align-center gap-2 font-bold font-heading dark:text-white';


        return margeClassNames([
            commonClassName,
            className,
            importantClassName
        ]); 
    }, []);

    return {
        headingClassName
    };
};
