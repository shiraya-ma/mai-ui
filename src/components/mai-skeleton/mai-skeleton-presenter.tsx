// MaiSkeletonPresenter
'use strict';
import React from 'react';
import { Skeleton, SkeletonProps } from '@nextui-org/react';

import { margeClassNames } from '../../libs';

const MaiSkeletonPresenter: React.FC<MaiSkeletonPresenter.Props> = (props) => {
    const { className, ...skeletonProps } = props;
    
    return (
        <Skeleton
        className={margeClassNames(
            'dark:bg-[#01011d80]',
            className
        )}
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
