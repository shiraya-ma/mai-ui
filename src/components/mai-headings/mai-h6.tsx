'use client';
import React from 'react';
import { cn } from '@heroui/theme';

import { useMaiHeadings, type MaiHeadingsProps } from './_internal';
import { MaiHeadingsInner } from './mai-headings-inner';

/**
 * Heading component
 * 
 * Adds a heading equivalent to h6.
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiH6 } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <MaiH6>
 *        hello world
 *      </MaiH6>
 *    );
 * };
 */
const MaiH6: React.FC<MaiH6.Props> = (props) => {
  const {
    children,
    classNames,
    color,
    id,
    startIcon,
    endIcon,
    ...headingsProps
  } = useMaiHeadings(props, 6);
  
  return (
    <h6
      { ...headingsProps }
      className={cn(
        'font-heading group/headings',
        '[&>span[data-slot="text"]]:text-medium [&_svg[data-slot="icon"]]:size-4',
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
    </h6>
  );
};

namespace MaiH6 {
  export type Props = MaiHeadingsProps;
};

export {
  MaiH6
};
