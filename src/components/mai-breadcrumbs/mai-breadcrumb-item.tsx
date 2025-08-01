'use strict';
import React from 'react';
import { BreadcrumbItem, type BreadcrumbItemProps } from '@heroui/breadcrumbs';

/**
 * Breadcrumb list item component
 * 
 * Essentially the same as BreadcrumbItem (for import reduction)
 */
const MaiBreadcrumbItem: React.FC<MaiBreadcrumbItem.Props> = BreadcrumbItem;
MaiBreadcrumbItem.displayName = 'MaiBreadcrumbItem';

namespace MaiBreadcrumbItem {
  export type Props = BreadcrumbItemProps;
};

export {
  MaiBreadcrumbItem,
};
