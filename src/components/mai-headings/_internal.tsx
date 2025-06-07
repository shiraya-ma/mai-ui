'use client';
import { type ReactNode, type HtmlHTMLAttributes, type PropsWithChildren, type ReactElement, createContext, useContext } from 'react';
import { cn } from '@heroui/theme';
import { isArray } from 'lodash';

import { generateIDFromChildren } from '@/libs';
import { MaiHeadingsInner } from './mai-headings-inner';

/** @internal */
export const MaiHeadingsStyleContext = createContext<MaiHeadingsStyleContextProps | undefined>(undefined);

/** @internal */
export function useMaiHeadings (props: MaiHeadingsProps, level: MaiHeadingsLevel) {
  const {
    children: usedChildren,
    className: userClassName,
    classNames: userClassNames,
    color: userColor,
    id: userId,
    ...headingsProps
  } = props;
  const context = useContext(MaiHeadingsStyleContext) || {};
  const contextStyle = context[level] || {};

  const children = _fixChildren(usedChildren);
  const id = userId || children && generateIDFromChildren(children);

  const classNames: MaiHeadingsClassNames = {
    base: cn(contextStyle.base, userClassName || userClassNames?.base),
    text: cn(
      contextStyle.text,
      userColor === 'primary'   ? 'text-primary' :
      userColor === 'secondary' ? 'text-secondary' :
      userColor === 'success'   ? 'text-success' :
      userColor === 'danger'    ? 'text-danger' :
      userColor === 'warning'   ? 'text-warning' :
                                  'text-foreground',
      userClassNames?.text,
    ),
    link: cn(contextStyle.link, userClassNames?.link),
    icon: {
      base  : cn(contextStyle.icon?.base, userClassNames?.icon?.base),
      anchor: cn(contextStyle.icon?.anchor, userClassNames?.icon?.anchor),
    },
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
export function useMaiHeadingsStyleContext (props: PropsWithChildren<Partial<{context: MaiHeadingsStyleContextProps}>>) {
  const {
    context: userContext,
    ...maiHeadingsStyleProps
  } = props;

  const topLayerContext = useContext(MaiHeadingsStyleContext) || {};

  const LEVELS: MaiHeadingsLevel[] = [1, 2, 3, 4, 5, 6];

  const context: MaiHeadingsStyleContextProps = {
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
  };
  
  LEVELS.forEach(level => {
    context[level] = {
      base: cn(topLayerContext[level]?.base, userContext?.[level]?.base),
      text: cn(topLayerContext[level]?.text, userContext?.[level]?.text),
      link: cn(topLayerContext[level]?.link, userContext?.[level]?.link),
      icon: {
        base: cn(topLayerContext[level]?.icon?.base, userContext?.[level]?.icon?.base),
        anchor: cn(topLayerContext[level]?.icon?.anchor, userContext?.[level]?.icon?.anchor),
      },
    }
  });

  return {
    context,
    ...maiHeadingsStyleProps
  };
};

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

/** @internal */
export type MaiHeadingsLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type MaiHeadingsStyleContextProps = {
  [level in MaiHeadingsLevel]?: MaiHeadingsClassNames;
};
