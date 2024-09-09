// useExternalLinkContext
'use client';
import { useCallback, useState } from "react";

export function useExternalLinkContext () {
    const [ externalLinkHref, setHref ] = useState<string | null>(null);

    const openExternalLinkModal = useCallback((href: string | null) => {
        setHref(href);
    }, [ setHref ]);

    return {
        externalLinkHref,
        openExternalLinkModal
    };
};
