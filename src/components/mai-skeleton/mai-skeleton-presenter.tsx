// MaiSkeletonPresenter
'use strict';
import React from 'react';
import { Skeleton, SkeletonProps } from '@nextui-org/react';

import { margeClassNames } from '../../libs';

const MaiSkeletonPresenter: React.FC<MaiSkeletonPresenter.Props> = (props) => {
    const { className, ...skeletonProps } = props;
    
    return (
        <Skeleton
        className={margeClassNames([
            'dark:bg-gray-900/50',
            className
        ])}
        { ...skeletonProps }
        />
    );
};

namespace MaiSkeletonPresenter {
    export type Props = SkeletonProps & {};
};

export {
    MaiSkeletonPresenter
};
