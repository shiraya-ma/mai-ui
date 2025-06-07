'use client';
import React from 'react';
import { cn } from '@heroui/theme';

import { useMaiHeadings, type MaiHeadingsProps } from './_internal';
import { MaiHeadingsInner } from './mai-headings-inner';

/**
 * Heading component
 * 
 * Adds a heading equivalent to h5.
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiH5 } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <MaiH5>
 *        hello world
 *      </MaiH5>
 *    );
 * };
 */
const MaiH5: React.FC<MaiH5.Props> = (props) => {
  const {
    children,
    classNames,
    color,
    id,
    startIcon,
    endIcon,
    ...headingsProps
  } = useMaiHeadings(props, 5);
  
  return (
    <h5
      { ...headingsProps }
      className={cn(
        'font-heading group/headings',
        '[&>span[data-slot="text"]]:text-large [&_svg[data-slot="icon"]]:size-5',
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
    </h5>
  );
};

namespace MaiH5 {
  export type Props = MaiHeadingsProps;
};

export {
  MaiH5
};
