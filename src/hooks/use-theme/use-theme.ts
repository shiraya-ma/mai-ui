// useTheme
'use client';
import { useContext } from "react";

import { ThemeContext } from "../../libs/theme";

export function useTheme () {
    const { theme, updateTheme } = useContext(ThemeContext); 
    
    return {
        theme,
        updateTheme
    };
};
