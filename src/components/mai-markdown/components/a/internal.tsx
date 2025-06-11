'use client';
import useSWR from 'swr';

import { type OGPFetcherFunction } from '@/features/ogp-fetcher';

/** @internal */
export function useOGP (props: Partial<{href: string, isOnlyChild: boolean, fetcher: OGPFetcherFunction}>) {
  const { href, isOnlyChild, fetcher} = props;
  const { data: ogp, isLoading, error } = useSWR(JSON.stringify({href, isOnlyChild}), () => {
    if (href && isOnlyChild && fetcher) {
      return fetcher(href);
    }

    return undefined;
  });

  const isError = error !== undefined;

  return {
    ogp,
    isLoading,
    isError,
  };
};
