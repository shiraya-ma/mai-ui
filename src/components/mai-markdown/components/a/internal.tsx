'use client';
/* eslint-disable react-refresh/only-export-components */
import React, { type AnchorHTMLAttributes, type RefObject, useEffect, useState} from 'react';
import { cn } from '@heroui/theme';
import useSWR from 'swr';

import { OGPProps, useOGPFetcher, type OGPFetcherFunction } from '@/features/ogp-fetcher';
import { MaiLink } from '@/components/mai-link';

/** @internal */
export function useAnchor (props: AnchorProps & {refAnchor: RefObject<HTMLAnchorElement | null>}) {
  const {
    children,
    href,
    refAnchor,
  } = props;
  const isOnlyChild = useAnchorIsOnlyChild(refAnchor);
  const { ogpFetcher } = useOGPFetcher();
  const { ogp } = useOGP({href, isOnlyChild, fetcher: ogpFetcher});
  const { cardLinkProps } = useCardLinkProps(ogp);

  return {
    cardLinkProps,
    children,
    href,
  };
};

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
export const CardLink: React.FC<CardLinkProps & {ref: RefObject<HTMLAnchorElement | null>, dataLinkStyle: string}> = (props) => {
  const { dataLinkStyle, image, href, ref, title } = props;

  return (
    <MaiLink
      className={cn(
        'flex w-full h-[128px] border border-gray-500/50 rounded-lg',
        'items-center justify-between overflow-hidden break-all',
      )}
      color='foreground'
      href={href}
      ref={ref}
      data-slot='base'
      data-link-style={dataLinkStyle}
    >
      <i
        className='flex flex-col w-[calc(100%-128px)] h-full p-4'
        data-slot='text-wrapper'
      >
        <b
          className='block overflow-hidden line-clamp-2 text-[hsl(var(--nextui-foreground))]'
          style={{ boxOrient: 'vertical' }}
          children={title}
          data-slot='text-title'
        />

        <small
          className='block h-fit'
          children={href}
          data-slot='text-link'
        />
      </i>
      <i
        className='flex flex-grow w-32 h-full border-l-gray-500'
        data-slot='image-wrapper'
      >
        <img src={ image } data-slot='image'/>
      </i>      
    </MaiLink>
  );
};

/** @internal */
export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {};

/** @internal */
export type CardLinkProps = {
  image: string;
  href : string;
  title: string;
};
