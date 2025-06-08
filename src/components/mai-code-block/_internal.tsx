'use client';
import { createContext, type PropsWithChildren, type CSSProperties } from "react";
import NightOwl from 'react-syntax-highlighter/dist/esm/styles/prism/night-owl';

/** @internal */
export const MaiCodeBlockStyleContext = createContext<MaiCodeBlockStyle | undefined>(NightOwl);

/** @internal */
export function _isPrism (style: MaiCodeBlockStyle): boolean {
  const keys = Object.keys(style);
  const hasHLJSKeys = keys.some(key => /^hljs/.test(key));
  return !hasHLJSKeys;
};

export type MaiCodeBlockStyle = {
  [key: string]: CSSProperties;
};

export type MaiCodeBlockStyleProviderProps = PropsWithChildren<{
  style?: MaiCodeBlockStyle;
}>;
