/* eslint-disable */
// useMaiBreadcrumbs
'use client';
import { useEffect, useRef } from "react";

import type { MaiBreadcrumbs } from "../../mai-breadcrumbs";
import { useNavigate } from "../../../../features/navigate";

export function useMaiBreadcrumbs (props: MaiBreadcrumbs.Props) {
    const { ...breadcrumbsProps } = props;
    const { navigate } = useNavigate();

    const refDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const div = refDiv.current;

        if (typeof window === 'undefined' || !div || !navigate) {
            return;
        }

        const handleClick = (ev: Event) => {
            ev.preventDefault();

            const target = ev.target as HTMLAnchorElement;
            const url = new URL(target.href);
            const pathname = url.pathname;

            navigate(pathname);
        };

        Array.from(div.querySelectorAll('a'))
        .map(a => {
            a.addEventListener('click', handleClick);
        });

        return () => {
            if (typeof window === 'undefined' || !div) {
                return;
            }

            Array.from(div.querySelectorAll('a'))
            .map(a => {
                a.removeEventListener('click', handleClick);
            });
        };
    }, []);

    return {
        refDiv,
        ...breadcrumbsProps
    };
};
