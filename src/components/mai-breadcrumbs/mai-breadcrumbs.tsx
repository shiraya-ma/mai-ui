// MaiBreadcrumbs
'use strict';
import React from 'react';
import { HouseFill } from 'react-bootstrap-icons';
import {  Breadcrumbs, BreadcrumbsProps } from '@nextui-org/react';

import { MaiBreadcrumbItem } from './mai-breadcrumb-item';

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
    const { children, className, homeHref, ...breadcrumbsProps } = props;
    
    return (
        <Breadcrumbs
        { ...breadcrumbsProps }
        className={
            [
                'mb-4 py-2',
                className
            ].filter(c => c).join(' ')
        }
        >   
            <MaiBreadcrumbItem
            href={ homeHref ?? '/'}
            color='primary'
            >
                <HouseFill />&nbsp;home
            </MaiBreadcrumbItem>

            { children }
        </Breadcrumbs>
    );
};

namespace MaiBreadcrumbs {
    export type Props = BreadcrumbsProps & {
        /**
         * @default '/'
         */
        homeHref?: string;
    };
};

export {
    MaiBreadcrumbs
};
