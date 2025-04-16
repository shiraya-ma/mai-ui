'use strict';
import React from 'react';
import { extendVariants } from '@heroui/system';
import { cn } from '@heroui/theme';
import { Pagination, type PaginationProps } from '@heroui/pagination';

const ExtendedPagination = extendVariants(Pagination, {
  variants: {
    variant: {
      glassy: {
        item: 'border border-white bg-white/25 backdrop-blur-sm'
      },
    },
  },
}) as React.FC<MaiPagination.Props>;

/**
 * Pagination component
 * 
 * Adds a variant for glassmorphism.
 * 
 * @example
 * 'use strict'
 * import { MaiPagination } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <MaiPagination
 *      total={ 10 }
 *      initialPage={ 1 }
 *      />
 *    );
 * };
 */
const MaiPagination: React.FC<MaiPagination.Props> = (props) => {
  const {
    classNames,
    isCompact,
    variant,
    ...paginationProps
  } = props;

  const {
    item,
    next,
    prev,
    wrapper,
    ...userClassNames
  } = classNames || {};

  return (
    <ExtendedPagination
      classNames={{
        item: cn(
          item,
          isCompact && variant == 'glassy'? 'bg-transparent border-0 backdrop-blur-none'
            : undefined,
        ),
        next: cn(
          next,
          !isCompact && variant === 'glassy'? 'border border-white bg-white/25 backdrop-blur-sm'
            : undefined,
        ),
        prev: cn(
          prev,
          !isCompact && variant === 'glassy'? 'border border-white bg-white/25 backdrop-blur-sm'
            : undefined,
        ),
        wrapper: cn(
          wrapper,
          isCompact && variant == 'glassy'? 'border border-white bg-white/25 backdrop-blur-sm'
            : undefined,
        ),
        ...userClassNames
      }}
      isCompact={isCompact}
      data-compact={isCompact}
      variant={variant}
      data-variant={variant}
      {...paginationProps}
    />
  );
};
MaiPagination.displayName = 'MaiPagination';

namespace MaiPagination {
  export type Props = Omit<PaginationProps, 'variant'> & {
    variant: 'flat' | 'bordered' | 'light' | 'faded' | 'glassy';
  };
};

export {
  MaiPagination
};
