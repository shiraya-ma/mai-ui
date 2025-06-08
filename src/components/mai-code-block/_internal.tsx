'use client';
import { type CSSProperties } from "react";

/** @internal */
export function _isPrism (style: MaiCodeBlockStyle): boolean {
  const keys = Object.keys(style);
  const hasHLJSKeys = keys.some(key => /^hljs/.test(key));
  return !hasHLJSKeys;
};

export type MaiCodeBlockStyle = {
  [key: string]: CSSProperties;
};
