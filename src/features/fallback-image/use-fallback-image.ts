'use client';
import { useContext } from "react";

import { FallbackImageContext } from "./_internal";

export function useFallbackImage () {
  const fallbackImage = useContext(FallbackImageContext);

  return fallbackImage;
};
