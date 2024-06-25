'use client';
import { createContext } from "react";

export const NavigateContext = createContext<NavigateContextProps>({
    navigate: (path) => {}
})

export type NavigateContextProps = {
    navigate?: (path: string) => void;
};
