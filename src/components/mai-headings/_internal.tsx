'use client';
import { type ReactNode, type HtmlHTMLAttributes, type PropsWithChildren, type ReactElement } from 'react';
import { isArray } from 'lodash';

import { MaiHeadingsInner } from './mai-headings-inner';

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
