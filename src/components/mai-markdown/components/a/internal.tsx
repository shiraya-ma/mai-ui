'use client';
import { type RefObject, useEffect, useState} from 'react';
import useSWR from 'swr';

import { type OGPFetcherFunction } from '@/features/ogp-fetcher';

/** @internal */
export function useAnchorIsOnlyChild (refAnchor: RefObject<HTMLAnchorElement | null>) {
  const [ isOnlyChild, setIsOnlyChild ] = useState<boolean>(false);

  useEffect(() => {
    const anchor = refAnchor.current;
    if (typeof window === 'undefined' || !anchor) return;

    const parent = anchor.parentElement;

    const isOnlyChild = parent?.childElementCount === 1 && parent.firstElementChild === anchor;
    setIsOnlyChild(isOnlyChild);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isOnlyChild;
};

/** @internal */
export function useOGP (props: Partial<{href: string, isOnlyChild: boolean, fetcher: OGPFetcherFunction}>) {
  const { href, isOnlyChild, fetcher} = props;
  const { data: ogp, isLoading, mutate } = useSWR(href, url => (isOnlyChild && fetcher? fetcher(url): undefined));

  const isLoaded = isOnlyChild && fetcher !== undefined && !isLoading;

  useEffect(() => {
    if (isOnlyChild && fetcher) {
      mutate();
    }
  }, [isOnlyChild, fetcher, mutate]);

  return {
    ogp,
    isLoaded,
    mutate,
  };
};
