'use client';
/* eslint-disable react-refresh/only-export-components */
import React from 'react';

import { MaiLink } from '@/components/mai-link';

import {
  useAnchor,
  type AnchorProps,
} from './internal';
import { CardLink } from './card-link';

/** @internal */  
const A: React.FC<AnchorProps> = (props) => {
  const { ...anchorProps } = props;
  const { cardLinkProps, children, href } = useAnchor({...props});

  return cardLinkProps?
    (<CardLink {...anchorProps as MaiLink.Props} {...cardLinkProps} data-link-style='card-link' data-href={href}/>):
    (<MaiLink children={children} href={href} {...anchorProps as MaiLink.Props} data-link-style='text'/>)
};

export {
  A as a,
};
