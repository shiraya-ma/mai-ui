// MaiPagination
'use strict';
import { forwardRef } from 'react';
// import { Pagination, type PaginationProps } from '@nextui-org/react';

// import { classNames } from '../../libs';

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
const MaiPagination = forwardRef<HTMLElement, MaiPagination.Props>((props, ref) => {
    const {} = props;
    const {} = ref!;
    // const { className, ...paginationProps } = props;

    // return (
    //     <Pagination
    //     className={classNames(
    //         'dark:[&_li]:bg-gray-900/50 dark:text-white',            
    //         className
    //     )}
    //     ref={ ref }
    //     { ...paginationProps }/>
    // );

    return <></>
});

namespace MaiPagination {
    export type Props = object;
    // export type Props = PaginationProps & {};
};

export {
    MaiPagination
};
