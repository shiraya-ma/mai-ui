'use client';
import useSWR from 'swr';

import { OGPProps, type OGPFetcherFunction } from '@/features/ogp-fetcher';

/** @internal */
export function useCardLinkProps (props: {ogp: OGPProps | undefined, isLoading: boolean, isError: boolean, isCardLink: boolean}): Partial<{ cardLinkProps: CardLinkProps }> {
  const {
    ogp,
    isLoading,
    isError,
    isCardLink,
  } = props;
  if (!isCardLink) return {};
  
  const ogpData = ogp?.data;

  const image = ogpData?.og?.image || ogpData?.twitter?.image || ogpData?.fb?.image;
  const title = ogpData?.title || ogpData?.og?.title || ogpData?.twitter?.title || ogpData?.fb?.title;
  const href  = ogp?.url;

  const cardLinkProps: CardLinkProps = {
    image,
    href,
    title,
    isLoading,
    isError,
  };

  return { cardLinkProps };
};

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

/** @internal */
export type CardLinkProps = {
  image?: string;
  href? : string;
  title?: string;
  isLoading: boolean;
  isError  : boolean;
};
