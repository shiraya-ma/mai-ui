'use client';
import React from 'react';
import { cn } from '@heroui/theme';

import { useMaiHeadings, type MaiHeadingsProps } from './_internal';
import { MaiHeadingsInner } from './mai-headings-inner';

/**
 * Heading component
 * 
 * Adds a heading equivalent to h4.
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiH4 } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <MaiH4>
 *        hello world
 *      </MaiH4>
 *    );
 * };
 */
const MaiH4: React.FC<MaiH4.Props> = (props) => {
  const {
    children,
    classNames,
    color,
    id,
    startIcon,
    endIcon,
    ...headingsProps
  } = useMaiHeadings(props, 4);
  
  return (
    <h4
      { ...headingsProps }
      className={cn(
        'my-2 font-heading group/headings',
        '[&>span[data-slot="text"]]:text-xl [&_svg[data-slot="icon"]]:size-5',
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
    </h4>
  );
};

namespace MaiH4 {
  export type Props = MaiHeadingsProps;
};

export {
  MaiH4
};
