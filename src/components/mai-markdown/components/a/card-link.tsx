'use strict';
import React, { type AnchorHTMLAttributes } from 'react';
import { cn } from '@heroui/theme';

import { MaiLink } from '@/components/mai-link';
import { MaiSkeleton } from '@/components/mai-skeleton';
import { type CardLinkProps } from './internal';

/** @internal */
export const CardLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement> & CardLinkProps> = (props) => {
  const { image, isLoading, isError, href, title, ...anchorProps } = props;

  const originalHref = (anchorProps as {'data-href': string})['data-href'];

  return (
    <MaiLink
      className={cn(
        'flex w-full h-[128px] mb-4 border border-gray-500/50 rounded-lg',
        'items-center justify-between overflow-hidden break-all',
        'bg-white-500 backdrop-blur-md',
      )}
      color='foreground'
      href={href || originalHref}
      data-slot='base'
      {...anchorProps as MaiLink.Props}
    >
      {/* left side */}
      <div
        className='flex flex-col h-full p-4 grow'
        data-slot='text-wrapper'
      >
        <MaiSkeleton
          className={cn(
            'rounded-md',
            'data-[loading="true"]:w-2/3 data-[loading="true"]:my-1'
          )}
          isLoaded={!isLoading}
          data-loading={isLoading}
        >
          <b
            className='block overflow-hidden line-clamp-2 text-[hsl(var(--nextui-foreground))]'
            style={{ boxOrient: 'vertical' }}
            children={title || href || originalHref}
            data-slot='text-title'
          />
        </MaiSkeleton>

        <MaiSkeleton
          className={cn(
            'rounded-md',
            'data-[loading="true"]:w-3/4 data-[loading="true"]:h-4'
          )}
          isLoaded={!isLoading}
          data-loading={isLoading}
        >
          {!isError && (
            <small
              className='block h-fit'
              children={href}
              data-slot='text-link'
            />
          )}
        </MaiSkeleton>
      </div>
      
      {/* right side */}
      <div
        className='inline-block w-fit h-full border-l-gray-500'
        data-slot='image-wrapper'
      >
        <MaiSkeleton
          classNames={{
            base: 'inline-block h-full',
            content: 'inline-block h-full',
          }}
          isLoaded={!isLoading}
        >
          <span
            className='flex flex-grow h-full border-l-gray-500 data-[loading="true"]:w-[128px]'
            data-slot='image-wrapper'
            data-loading={isLoading}
          >
            {image && (
              <img src={ image } className='h-full bg-cover' data-slot='image' alt={title}/>
            )}
          </span>  
        </MaiSkeleton>   
      </div>
    </MaiLink>
  );
};
CardLink.displayName = 'CardLink';
