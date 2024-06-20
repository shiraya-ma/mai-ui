// useThemeContext
'use client';
import { useCallback, useState } from "react";

import type { MaiUI } from "../../../../types/mai-ui";
import { ThemeContextProps, getPreferTheme, storedTheme } from "../../../../libs/theme";

export function useThemeContext () {
    const [ theme, setTheme ] = useState<MaiUI.Theme>(storedTheme.get() ?? getPreferTheme());

    const updateTheme = useCallback((theme: MaiUI.Theme | null) => {
        if (!theme) {
            return;
        }

        setTheme(theme);
    }, [ setTheme ]);

    const context: ThemeContextProps = {
        theme,
        updateTheme
    };

    return {
        context
    };
};
