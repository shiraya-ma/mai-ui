// MaiBreadcrumbs
'use strict';
import React from 'react';
// import { HouseFill } from 'react-bootstrap-icons';
// import { Breadcrumbs, type BreadcrumbsProps } from '@nextui-org/react';

// import { classNames } from '../../libs';

// import { MaiBreadcrumbItem } from './mai-breadcrumb-item';
// import { useMaiBreadcrumbs } from './hooks';

/**
 * パンくずリストのラッパーコンポーネント
 * 
 * デフォルトでホームが追加されている。  
 * ホームのhrefを変更する場合はpropsのhomeRefを指定する。  
 * 
 * 子要素はMaiBreadcrumbItemまたはBreadcrumbItemを使用する。
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { BreadcrumbItem } from '@nextui-org/react';
 * import { MaiBreadcrumbs, MaiBreadcrumbItem } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <MaiBreadcrumbs>
 *              <MaiBreadcrumbItem href="/foo">foo</MaiBreadcrumbItem>
 * 
 *              <BreadcrumbItem href="/bar">bar</BreadcrumbItem>
 *          </MaiBreadcrumbs>
 *      );
 * };
 */
const MaiBreadcrumbs: React.FC<MaiBreadcrumbs.Props> = (props) => {
    const {} = props;
    // const { children, className, homeHref, refDiv, ...breadcrumbsProps } = useMaiBreadcrumbs(props);
    
    // return (
    //     <Breadcrumbs
    //     className={classNames(
    //         'mb-4 py-2',
    //         '[&>ol>li>*:first-child]:text-mint-300',
    //         className
    //     )}
    //     ref={ refDiv }
    //     { ...breadcrumbsProps }>   
    //         <MaiBreadcrumbItem
    //         href={ homeHref ?? '/'}
    //         >
    //             <HouseFill />&nbsp;home
    //         </MaiBreadcrumbItem>

    //         { children }
    //     </Breadcrumbs>
    // );

    return <></>;
};

namespace MaiBreadcrumbs {
    export type Props = object;
    // export type Props = BreadcrumbsProps & {
    //     /**
    //      * @default '/'
    //      */
    //     homeHref?: string;
    // };
};

export {
    MaiBreadcrumbs
};
