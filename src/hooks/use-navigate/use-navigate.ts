// useNavigate
'use client';
import { useCallback, useContext } from "react";
import { NavigateContext } from "../../libs";

export function useNavigate () {
    const { navigate: _navigate } = useContext(NavigateContext);

    const navigate = useCallback((href: string) => {
        if (typeof window === 'undefined') {
            return;
        }

        if (_navigate) {
            _navigate(href);
            return;
        }

        const current = window.location;
        const dist = new URL(href, current.href);

        const matches: boolean[] = [
            current.pathname === dist.pathname,
            current.hash === dist.hash,
            current.search === dist.search
        ];

        if (matches.some(matche => !matche)) {
            window.location.href = href;
        }
    }, [ _navigate ]);

    return {
        navigate
    };
};
