// useTheme
'use client';
import { useContext } from "react";

import { ThemeContext, ThemeUpdaterContext } from "./theme-context";

export function useTheme () {
    const theme = useContext(ThemeContext);
    const updateTheme = useContext(ThemeUpdaterContext);

    return {
        theme,
        updateTheme
    };
};
