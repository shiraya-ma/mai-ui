/* eslint-disable */
// useMaiLink
'use client';
import { MouseEvent, useCallback, useContext, useMemo } from "react";

import { ExternalLinkOpenerContext } from "../../../../features/external-link";

import { type MaiLink } from '../../mai-link';
import { isExternal } from "./is-external";

export function useMaiLink (props: MaiLink.Props) {
    // const { href, ...linkProps } = props;
    // const open = useContext(ExternalLinkOpenerContext);
    // const hrefIsExternal = linkProps.isExternal || isExternal(href);

    // const handleClickLink = useCallback((ev: MouseEvent<HTMLAnchorElement>) => {
    //     if (!hrefIsExternal) {
    //         return;
    //     }

    //     ev.preventDefault();

    //     open(href || null);
    // }, [ href, hrefIsExternal, open ]);

    // return {
    //     href,
    //     ...linkProps,
    //     onClick: handleClickLink
    // };
};
