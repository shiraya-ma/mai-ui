// MaiPagination
'use strict';
import { forwardRef } from 'react';
import { PaginationProps } from "@nextui-org/react";

import { MaiPaginationPresenter } from './mai-pagination-presenter';

const MaiPagination = forwardRef<HTMLElement, MaiPagination.Props>((props) => {
    const { ...paginationProps } = props;
    
    return (
        <MaiPaginationPresenter
        { ...paginationProps }        
        />
    );
});

namespace MaiPagination {
    export type Props = PaginationProps & {};
};

export {
    MaiPagination
};
