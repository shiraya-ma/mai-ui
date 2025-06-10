'use client';
import { type RefObject, useEffect, useState} from 'react';
import useSWR from 'swr';

import { type OGPProps, type OGPFetcherFunction } from '@/features/ogp-fetcher';

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
export function useCardLinkProps (ogp: OGPProps | undefined): Partial<{ cardLinkProps: CardLinkProps }> {
  if (!ogp) return {};

  const ogpData = ogp?.data;

  const image = ogpData?.og?.image || ogpData?.twitter?.image || ogpData?.fb?.image;
  const title = ogpData?.title || ogpData?.og?.title || ogpData?.twitter?.title || ogpData?.fb?.title;
  const href  = ogp.url;

  if (!image || !title) return {};

  const cardLinkProps: CardLinkProps = {
    image,
    href,
    title,
  };

  return { cardLinkProps };
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

/** @internal */
export type CardLinkProps = {
  image: string;
  href : string;
  title: string;
};
