// useColor
'use client';

import { useEffect, useRef } from "react";

export function useColor (color?: string) {
    const refLink = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const link = refLink.current;

        if (typeof window === 'undefined' || !link) {
            return;
        }

        link.style.setProperty('--sns-link-color', color || 'hsl(var(--nextui-foreground))');
    }, [ color ]);

    return {
        refLink
    };
};
