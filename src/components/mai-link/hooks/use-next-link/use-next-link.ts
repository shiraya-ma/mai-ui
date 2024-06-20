// useNextLink
'use client';
import { useEffect, useState } from "react";

export function useNextLink () {
    const [ NextLink, setNextLink ] = useState<any>(undefined);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        if ((window as any).next?.version !== undefined) {
            import("next/link").then(Link => {
                console.debug('imported Next.js Link');

                setNextLink(Link);
            });
        }
    }, [ setNextLink ]);
    
    return {
        NextLink
    };
};
