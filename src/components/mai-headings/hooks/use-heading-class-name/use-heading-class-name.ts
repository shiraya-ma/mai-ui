// useHeadingClassName
'use client';
import { useCallback, useMemo } from "react";

import { margeClassNames } from "@mai-ui/libs";

export function useHeadingClassName (className?: string) {
    const importantClassName = useMemo(() => className, [ className ]);

    const headingClassName = useCallback((className?: string) => {
        const commonClassName = 'font-heading dark:text-white [&+*]:flex [&+*]:flex-col [&+*]:gap-4 [&+*]:p-4';


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
