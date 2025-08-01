'use strict';
import React  from 'react';
import { Skeleton, type SkeletonProps } from '@heroui/skeleton';

/**
 * Skeleton component
 * 
 * For reducing the number of imports
 * 
 * @example
 * 'use strict'
 * import { MaiSkeleton } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <MaiSkeleton>
 *        any elements or components
 *      </MaiSkeleton>
 *    );
 * };
 */
const MaiSkeleton: React.FC<MaiSkeleton.Props> = (props) => {
  const {
    ...skeletonProps
  } = props;

  return (
    <Skeleton
      {...skeletonProps}
    />
  );
};
MaiSkeleton.displayName = 'MaiSkeleton';

namespace MaiSkeleton {
  export type Props = SkeletonProps & {};
};

export {
  MaiSkeleton
};
