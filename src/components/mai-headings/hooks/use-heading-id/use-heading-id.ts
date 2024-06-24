// useHeadingId
'use client';
import { useMemo } from "react";

import { generateIDFromChildren } from '../../../../libs';

export function useHeadingID (children: string) {
    const headingID = useMemo(() => generateIDFromChildren(children), [ children ]);

    return {
        headingID
    };
};
