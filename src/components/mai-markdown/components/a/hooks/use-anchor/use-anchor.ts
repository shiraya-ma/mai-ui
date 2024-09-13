// useAnchor
'use client';
import { useMemo, useRef } from "react";
import useSWR from 'swr';

import { useCSP } from '../../../../../../features/csp';

import type { A } from "../../a";
import { parseHref } from "./parse-href";
import { fixChildren } from "./fix-children";
import { ogpFetcher } from "./ogp-fetcher";

export function useAnchor (props: A.Props) {
    const {
        href,
        children
    } = props;

    const { fixedHref, isCardHref } = useMemo(() => parseHref(href), [ href ]);
    const { fixedChildren } = useMemo(() => fixChildren(children), [ children ]);

    const { csp } = useCSP();

    const { allowedByCSP } = useMemo(() => {
        const connectSrc = csp.connectSrc;

        const allowedByCSP = connectSrc.some(v => v === '*') || connectSrc.some(v => /api\.shiraya\.ma/.test(v));

        return {
            allowedByCSP
        };
    }, [ csp ]);

    const url = (allowedByCSP && isCardHref) ? encodeURIComponent(fixedHref): undefined;

    const { data: ogp } = useSWR(url, ogpFetcher, {
        errorRetryCount: 0
    });

    const ref = useRef<HTMLAnchorElement>(null);
    
    const linkProps = {
        children: fixedChildren,
        href: fixedHref,
        ref,
        ogp
    };

    return linkProps;
};
