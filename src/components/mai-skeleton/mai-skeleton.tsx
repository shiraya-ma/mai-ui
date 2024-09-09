// MaiSkeleton
'use strict';
import { forwardRef } from 'react';
import { Skeleton, type SkeletonProps } from '@nextui-org/react';

import { classNames } from '../../libs';

/**
 * スケルトンのコンポーネント
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiSkeleton } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <MaiSkeleton>
 *              any elements or components
 *          </MaiSkeleton>
 *      );
 * };
 */
const MaiSkeleton = forwardRef<HTMLDivElement, MaiSkeleton.Props>((props, ref) => {
    const { className, ...skeletonProps } = props;
    
    return (
        <Skeleton
        className={classNames(
            'dark:bg-[#01011d80]',
            className
        )}
        ref={ ref }
        { ...skeletonProps }/>
    );
});

namespace MaiSkeleton {
    export type Props = SkeletonProps & {};
};

export {
    MaiSkeleton
};
