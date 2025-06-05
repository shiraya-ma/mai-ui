'use client';
import React from 'react';
import { cn } from '@heroui/theme';

import { useMaiHeadings, type MaiHeadingsProps } from './_internal';
import { MaiHeadingsInner } from './mai-headings-inner';

/**
 * Heading component
 * 
 * Adds a heading equivalent to h1.
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiH1 } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <MaiH1>
 *        hello world
 *      </MaiH1>
 *    );
 * };
 */
const MaiH1: React.FC<MaiH1.Props> = (props) => {
  const {
    children,
    classNames,
    color,
    id,
    startIcon,
    endIcon,
    ...headingsProps
  } = useMaiHeadings(props);
  
  return (
    <h1
      { ...headingsProps }
      className={cn(
        'my-8 font-heading group/headings',
        '[&>span[data-slot="text"]]:text-4xl [&_svg[data-slot="icon"]]:size-9',
        classNames?.base,
      )}
      id={id}
      data-slot='base'
    >
      <MaiHeadingsInner
        classNames={{
          text: classNames?.text,
          link: classNames?.link,
          icon: classNames?.icon,
        }}
        children={children}
        color={color}
        id={id}
        startIcon={startIcon}
        endIcon={endIcon}
      />
    </h1>
  );
};

namespace MaiH1 {
  export type Props = MaiHeadingsProps;
};

export {
  MaiH1
};
