// MaiBreadcrumbItem
'use strict';
import React from 'react';

import { BreadcrumbItem, BreadcrumbItemProps } from '@nextui-org/react';

/**
 * パンくずリストのコンポーネント
 * 
 * 中身はBreadcrumbItemそのもの（import文削減用)
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
const MaiBreadcrumbItem = BreadcrumbItem;

namespace MaiBreadcrumbItem {
    export type props = BreadcrumbItemProps;
};

export {
    MaiBreadcrumbItem
}
