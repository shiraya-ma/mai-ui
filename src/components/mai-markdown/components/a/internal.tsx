'use client';
import { type AnchorHTMLAttributes } from 'react';
import useSWR from 'swr';

import { OGPProps, useOGPFetcher, type OGPFetcherFunction } from '@/features/ogp-fetcher';

/** @internal */
export function useAnchor (props: AnchorProps & {node?: undefined}) {
  const {
    children,
    href,
    node: _,  //eslint-disable-line @typescript-eslint/no-unused-vars
  } = props;
  const isOnlyChild = props['data-is-only-child'] === 'true';
  const { ogpFetcher } = useOGPFetcher();
  const { ogp, isLoading, isError } = useOGP({href, isOnlyChild, fetcher: ogpFetcher});
  const { cardLinkProps } = useCardLinkProps({ogp, isLoading, isError, isCardLink: isOnlyChild});

  return {
    cardLinkProps,
    children,
    href,
  };
};

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
export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & Partial<{
  'data-is-only-child': string;
}>;

/** @internal */
export type CardLinkProps = {
  image?: string;
  href? : string;
  title?: string;
  isLoading: boolean;
  isError  : boolean;
};
