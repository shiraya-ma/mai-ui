'use client';
import { createContext, useContext, type PropsWithChildren } from "react";

/** @internal */
export const FallbackImageContext = createContext<FallbackImageProps | undefined>(undefined);

/** @internal */
export function useFallbackImageContext (props: FallbackImageProviderProps) {
  const {
    children,
    fallbackImageProps: userFallbackImageProps,
  } = props;
  const context = useContext(FallbackImageContext);

  const fallbackImageProps: FallbackImageProps | undefined =
    userFallbackImageProps || context || undefined;

  return {
    children,
    fallbackImageProps,
  };
};

export type FallbackImageProviderProps = PropsWithChildren<{
  fallbackImageProps?: FallbackImageProps;
}>;

export type FallbackImageProps = {
  src     : string;
  width?  : number;
  height? : number;
};
