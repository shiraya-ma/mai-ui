// MaiSkeleton
'use strict';
import { forwardRef } from 'react';
import { SkeletonProps } from '@nextui-org/react';

import { MaiSkeletonPresenter } from './mai-skeleton-presenter';

const MaiSkeleton = forwardRef<HTMLDivElement, MaiSkeleton.Props>((props) => {
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
