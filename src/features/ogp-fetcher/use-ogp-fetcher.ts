'use client';
import { useContext } from "react";

import { OGPFetcherContext } from "./internal";

/**
 * Custom hook to get OGPFetcher from OGPFetcherContext

 * @returns 
 */
export function useOGPFetcher () {
  const ogpFetcher = useContext(OGPFetcherContext);

  return {
    ogpFetcher,
  };
};
