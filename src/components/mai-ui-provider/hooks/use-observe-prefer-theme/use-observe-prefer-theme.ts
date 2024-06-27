// useObservePreferTheme
'use client';
import { useEffect, useRef } from "react";

import { useTheme } from "../../../../hooks";
import { getPreferTheme, storedTheme } from "../../../../libs/theme";
import { log } from "../../../../libs/log";

export function useObservePreferTheme () {
    const { updateTheme } = useTheme();

    const refObserver = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const div = refObserver.current;

        if (!div) {
            return;
        }

        const observer = new IntersectionObserver(() => {
            if (storedTheme.get()) {
                return;
            }

            const theme = getPreferTheme();

            log.debug('prefer theme switched to', theme);
            document.body.classList.toggle('dark', theme === 'dark');

            updateTheme(theme);
        });

        observer.observe(div);

        return () => {
            observer.disconnect();
        };
    }, []);

    return {
        refObserver
    };
};
