// context
'use client';
import { createContext } from "react";

export const NavigateContext = createContext<NavigateFunction>(undefined);

export type NavigateFunction = ((path: string) => void) | undefined;