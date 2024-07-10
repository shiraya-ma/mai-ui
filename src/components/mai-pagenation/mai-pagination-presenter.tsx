// MaiPaginationPresenter
'use strict';
import React from 'react';
import { Pagination, PaginationProps } from "@nextui-org/react";

const MaiPaginationPresenter: React.FC<MaiPaginationPresenter.Props> = (props) => {
    const { ...paginationProps } = props;
    
    return (
        <Pagination
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
