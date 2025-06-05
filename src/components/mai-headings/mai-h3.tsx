'use client';
import React from 'react';
import { cn } from '@heroui/theme';

import { useMaiHeadings, type MaiHeadingsProps } from './_internal';
import { MaiHeadingsInner } from './mai-headings-inner';

/**
 * Heading component
 * 
 * Adds a heading equivalent to h3.
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiH3 } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <MaiH3>
 *        hello world
 *      </MaiH3>
 *    );
 * };
 */
const MaiH3: React.FC<MaiH3.Props> = (props) => {
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
    <h3
      { ...headingsProps }
      className={cn(
        'my-4 font-heading group/headings',
        '[&>span[data-slot="text"]]:text-2xl [&_svg[data-slot="icon"]]:size-6',
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
    </h3>
  );
};

namespace MaiH3 {
  export type Props = MaiHeadingsProps;
};

export {
  MaiH3
};
