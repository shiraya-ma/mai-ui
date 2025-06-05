'use client';
import { type ReactNode, type HtmlHTMLAttributes, type PropsWithChildren, type ReactElement } from 'react';
import { cn } from '@heroui/theme';
import { isArray } from 'lodash';

import { generateIDFromChildren } from '@/libs';
import { MaiHeadingsInner } from './mai-headings-inner';

/** @internal */
export function useMaiHeadings (props: MaiHeadingsProps) {
  const {
    children: usedChildren,
    className: userClassName,
    classNames: userClassNames,
    color: userColor,
    id: userId,
    ...headingsProps
  } = props;

  const children = _fixChildren(usedChildren);
  const id = userId || children && generateIDFromChildren(children);

  const classNames = {
    base: userClassName || userClassNames?.base,
    text: cn(
      userColor === 'primary'   ? 'text-primary' :
      userColor === 'secondary' ? 'text-secondary' :
      userColor === 'success'   ? 'text-success' :
      userColor === 'danger'    ? 'text-danger' :
      userColor === 'warning'   ? 'text-warning' :
                                  'text-foreground',
      userClassNames?.text,
    ),
    link: userClassNames?.link,
    icon: userClassNames?.icon,
  };

  const color = userColor || 'foreground';

  return {
    children,
    classNames,
    color,
    id,
    ...headingsProps
  };
}

/** @internal */
export function _fixChildren (children: ReactNode): string | undefined {
  if (isArray(children)) {
    return children.map(child => _fixChildren(child)).join(' ')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }
  else if (children === undefined || children === null) {
    return undefined;
  }
  else if (typeof children === 'boolean') {
    return String(children);
  }

  const simpleTypes = ['string', 'number', 'bigint', 'boolean'];
  if (simpleTypes.includes(typeof children)) {
    return String(children).trim();
  }

  const child = children as ReactElement & {props: PropsWithChildren<{}>}

  if (typeof child === 'object' && 'props' in child && 'children' in child.props) {
    return _fixChildren(child.props.children) || '';;
  }

  return '';
};

export type MaiHeadingsProps = HtmlHTMLAttributes<HTMLHeadingElement> & {
  color?: "primary" | "secondary" | "success" | "danger" | "foreground" | "warning";
  classNames?: MaiHeadingsClassNames
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export type MaiHeadingsClassNames = MaiHeadingsInner.ClassNames & Partial<{
  base: string;
}>;
