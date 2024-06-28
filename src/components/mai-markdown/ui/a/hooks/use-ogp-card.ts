'use strict';
import { ReactNode, useMemo } from "react";
import useSWR from "swr";

import { parseHref } from "./parse-href";
import { fixChildren } from "./fix-children";
import { ogpFetcher } from "./ogp-fetcher";

export function useOGPCard (href: string | undefined, children: ReactNode) {
    const { fixedHref, isCardHref } = useMemo(() => parseHref(href), [ href ]);

    const { fixedChildren } = useMemo(() => fixChildren(children), [ children ]);

    const { data } = useSWR(fixedHref, ogpFetcher(isCardHref), {
        errorRetryCount: 0
    });
    
    return {
        fixedChildren,
        fixedHref,
        ogpData: data ?? null
    };
};
