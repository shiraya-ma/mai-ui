'use client';
import { createContext } from "react";

import type { MaiUI } from "@mai-ui/types/mai-ui";

import { getPreferTheme } from "./get-prefer-theme";

export const ThemeContext = createContext<ThemeContextProps>({
    theme: getPreferTheme(),
    updateTheme: (theme) => {}
})

export type ThemeContextProps = {
    theme: MaiUI.Theme;
    updateTheme: (theme: MaiUI.Theme | null) => void;
};
