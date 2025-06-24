'use client';
import { createContext, type PropsWithChildren, type CSSProperties, useContext } from "react";
import NightOwl from 'react-syntax-highlighter/dist/esm/styles/prism/night-owl';

/** @internal */
export const MaiCodeBlockStyleContext = createContext<MaiCodeBlockStyle | undefined>(NightOwl);

/** @internal */
export function useMaiCodeBlock (props: MaiCodeBlockProps) {
  const {
    style: userStyle,
    ...codeBlockProps
  } = props;
  const contextStyle = useContext(MaiCodeBlockStyleContext)!;

  const style: MaiCodeBlockStyle = userStyle || contextStyle;

  const isPrism = _isPrism(style);

  return {
    isPrism,
    style,
    wrapLines: true,
    ...codeBlockProps,
  };
};

/** @internal */
export function _isPrism (style: MaiCodeBlockStyle): boolean {
  const keys = Object.keys(style);
  const hasHLJSKeys = keys.some(key => /^hljs/.test(key));
  return !hasHLJSKeys;
};

export type MaiCodeBlockClassNames = Partial<{
  base      : string;
  code      : string;
  filename  : string;
  pre       : string;
}>;

export type MaiCodeBlockProps = Partial<{
  children        : string;
  className       : string;
  classNames      : MaiCodeBlockClassNames;
  filename        : string;
  language        : string;
  style           : MaiCodeBlockStyle;
  showLineNumbers : boolean;
  startLineNumber : number;
  /** @internal */
  dataTestID      : string;
}>;

export type MaiCodeBlockStyle = {
  [key: string]: CSSProperties;
};

export type MaiCodeBlockStyleProviderProps = PropsWithChildren<{
  style?: MaiCodeBlockStyle;
}>;
