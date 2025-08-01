'use client';
import React from 'react';
import { cn } from '@heroui/theme';

import { useMaiHeadings, type MaiHeadingsProps } from './_internal';
import { MaiHeadingsInner } from './mai-headings-inner';

/**
 * Heading component
 * 
 * Adds a heading equivalent to h2.
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiH2 } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <MaiH2>
 *        hello world
 *      </MaiH2>
 *    );
 * };
 */
const MaiH2: React.FC<MaiH2.Props> = (props) => {
  const {
    children,
    classNames,
    color,
    id,
    startIcon,
    endIcon,
    ...headingsProps
  } = useMaiHeadings(props, 2);
  
  return (
    <h2
      { ...headingsProps }
      className={cn(
        'my-6 font-heading group/headings',
        '[&>span[data-slot="text"]]:text-3xl [&_svg[data-slot="icon"]]:size-7',
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
    </h2>
  );
};

namespace MaiH2 {
  export type Props = MaiHeadingsProps;
};

export {
  MaiH2
};
