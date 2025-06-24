'use client';
import React from "react";

import { FallbackImageContext, useFallbackImageContext, type FallbackImageProviderProps } from "./_internal";

export const FallbackImageProvider: React.FC<FallbackImageProviderProps> = (props) => {
  const {
    children,
    fallbackImageProps,
  } = useFallbackImageContext(props);

  return (
    <FallbackImageContext.Provider 
      children={children}
      value={fallbackImageProps}
    />
  );
};
