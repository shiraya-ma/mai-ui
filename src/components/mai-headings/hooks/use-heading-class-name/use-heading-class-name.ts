// useHeadingClassName
'use client';
import { useMemo } from "react";

import { margeClassNames } from "@mai-ui/libs";

export function useHeadingClassName (className?: string) {
    const headingClassName = useMemo(() => margeClassNames([
        'font-heading dark:text-white [&+*]:flex [&+*]:flex-col [&+*]:gap-4 [&+*]:p-4',
        className
    ]), [ className ]);

    return {
        headingClassName
    };
};
