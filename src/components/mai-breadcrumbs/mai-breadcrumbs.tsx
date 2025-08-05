'use strict';
import React from 'react';
import { extendVariants } from '@heroui/system';
import { cn } from '@heroui/theme';
import { Breadcrumbs, type BreadcrumbsProps } from '@heroui/breadcrumbs';

import { HouseFill } from '@/icons';
import { MaiBreadcrumbItem } from './mai-breadcrumb-item';

const ExtendedBreadcrumbs = extendVariants(Breadcrumbs, {
  variants: {
    variant: {
      glassy: {
        list: 'w-fit border-1 bg-opacity-25 backdrop-blur-sm py-2 px-3',
      },
    },
  },
}) as React.FC<MaiBreadcrumbs.Props>;

/**
 * Wrapper component for breadcrumbs.
 * 
 * Adds a glassmorphism variant. 
 * Use MaiBreadcrumbItem or BreadcrumbItem as child elements.
 * 
 * @example
 * 'use strict'
 * import { BreadcrumbItem } from '@heroui/react';
 * import { MaiBreadcrumbs, MaiBreadcrumbItem } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *  return (
 *    <MaiBreadcrumbs
 *      homeHref='/'
 *      showHomeIcon
 *    >
 *      <MaiBreadcrumbItem href="/foo">foo</MaiBreadcrumbItem>
 *      <BreadcrumbItem href="/bar">bar</BreadcrumbItem>
 *    </MaiBreadcrumbs>
 *  );
 * };
 */
const MaiBreadcrumbs: React.FC<MaiBreadcrumbs.Props> = (props) => {
  const {
    children,
    classNames: userClassNames,
    color,
    homeRef,
    radius,
    showHomeIcon,
    variant,
    ...breadcrumbsProps
  } = props;
  const { base, ...classNames } = userClassNames || {};

  return (
    <ExtendedBreadcrumbs
      color={color}
      data-color={color}
      variant={variant}
      data-variant={variant}
      radius={radius}
      data-radius={radius}
      classNames={{
        list: cn(
          variant === 'glassy'?
            color === 'primary'? 'bg-primary-400 border-primary-400': 
            color === 'secondary'? 'bg-secondary-400 border-secondary-400':
            color === 'success'? 'bg-success-400 border-success-400':
            color === 'danger'? 'bg-danger-400 border-danger-400':
            color === 'warning'? 'bg-warning-500 border-warning-400':
            'bg-white/25 border-white' // foreground or undefined
            : undefined,
          variant  === 'glassy'?
            radius === 'sm'? 'rounded-md':
            radius === 'none'? 'rounded-none':
            radius === 'lg'? 'rounded-xl':
            radius === 'full'? 'rounded-full':
            'rounded-lg' // none or undefined
            : undefined,
          base,
        ),
        ...classNames
      }}
      {...breadcrumbsProps}
    >
      {homeRef && (
        <MaiBreadcrumbItem href={homeRef}>
          {showHomeIcon && (<>
            <HouseFill />
            &nbsp;
          </>)}
          HOME
        </MaiBreadcrumbItem>
      )}

      {children}
    </ExtendedBreadcrumbs>
  );
};

namespace MaiBreadcrumbs {
	export type Props = Omit<BreadcrumbsProps, 'variant'> & {
		homeRef?: string;
    showHomeIcon?: boolean;
    variant?: 'bordered' | 'solid' | 'light' | 'glassy';
	};
};

export {
	MaiBreadcrumbs,
};
