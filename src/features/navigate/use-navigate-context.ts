// useNavigateContext
'use client';
import type { NavigateFunction } from "./context";

export function useNavigateContext (navigate?: NavigateFunction) {
    const navigateContext = navigate || ((path: string) => {
        if (typeof window === 'undefined') {
            return;
        }

        window.location.href = path;
    });

    return {
        navigateContext
    };
};
