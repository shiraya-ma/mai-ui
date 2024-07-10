// MaiSkeleton
'use strict';
import { forwardRef } from 'react';
import { SkeletonProps } from '@nextui-org/react';

import { MaiSkeletonPresenter } from './mai-skeleton-presenter';

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
    const { ...skeletonProps } = props;
    
    return (
        <MaiSkeletonPresenter
        { ...skeletonProps }
        />
    );
});

namespace MaiSkeleton {
    export type Props = SkeletonProps& {};
};

export {
    MaiSkeleton
};
