// MaiPagination
'use strict';
import { forwardRef } from 'react';
import { PaginationProps } from "@nextui-org/react";

import { MaiPaginationPresenter } from './mai-pagination-presenter';

/**
 * ページネーションのコンポーネント
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiPagination } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <MaiPagination
 *            total={ 10 }
 *            initialPage={ 1 }
 *          />
 *      );
 * };
 */
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
