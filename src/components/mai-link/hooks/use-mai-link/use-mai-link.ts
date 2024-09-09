// useMaiLink
'use client';
import { MouseEvent, useContext, useMemo } from "react";

import { ExternalLinkOpenerContext } from "../../../../features/external-link";

import { type MaiLink } from '../../mai-link';
import { isExternal } from "./is-external";

export function useMaiLink (props: MaiLink.Props) {
    const { href, ...linkProps } = props;
    const open = useContext(ExternalLinkOpenerContext);
    const hrefIsExternal = linkProps.isExternal ?? isExternal(href);

    const handleClickLink = useMemo(() => {
        if (!hrefIsExternal) {
            return undefined;
        }

        const handler = (ev: MouseEvent<HTMLAnchorElement>) => {
            if (hrefIsExternal) {
                ev.preventDefault();

                open(href || null)
            }
        };

        return handler;
    }, [ href, hrefIsExternal, open ]);

    return {
        onClick: handleClickLink,
        ...linkProps
    };
};
