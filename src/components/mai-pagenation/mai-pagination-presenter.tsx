// MaiPaginationPresenter
'use strict';
import React from 'react';
import { Pagination, PaginationProps } from "@nextui-org/react";

import { margeClassNames } from '../../libs';

const MaiPaginationPresenter: React.FC<MaiPaginationPresenter.Props> = (props) => {
    const { className, ...paginationProps } = props;
    
    return (
        <Pagination
        className={margeClassNames(
            'dark:[&_li]:bg-gray-800 dark:text-white',
            className
        )}
        { ...paginationProps }
        />
    );
};

namespace MaiPaginationPresenter {
    export type Props = PaginationProps & {};
};

export {
    MaiPaginationPresenter
};
