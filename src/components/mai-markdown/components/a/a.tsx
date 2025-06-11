'use client';
/* eslint-disable react-refresh/only-export-components */
import { type RefObject, forwardRef, useRef } from 'react';

import { MaiLink } from '@/components/mai-link';

import {
  CardLink,
  useAnchor,
  type AnchorProps,
} from './internal';

/** @internal */  
const A = forwardRef<HTMLAnchorElement | null, AnchorProps>((props, ref) => {
  const { children: _, href: __, ...anchorProps } = props;
  const refUserAnchor = ref as RefObject<HTMLAnchorElement | null>;
  const refInnerAnchor = useRef<HTMLAnchorElement>(null);
  const refAnchor = refUserAnchor || refInnerAnchor;
  const { cardLinkProps, children, href } = useAnchor({refAnchor, ...props});

  return cardLinkProps?
    (<CardLink {...cardLinkProps} ref={refAnchor}{...anchorProps} data-link-style='card-link' />):
    (<MaiLink children={children} href={href} ref={refAnchor} {...anchorProps as MaiLink.Props} data-link-style='text'/>)
});

export {
  A as a,
};
