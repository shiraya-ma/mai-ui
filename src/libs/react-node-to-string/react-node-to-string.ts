'use strict;'
import { type PropsWithChildren, type ReactElement, type ReactNode } from "react";
import { isArray } from "lodash";

/** @internal */
export function reactNodeToString (children: ReactNode): string | undefined {
  if (isArray(children)) {
    return children.map(child => reactNodeToString(child)).join(' ')
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
    return reactNodeToString(child.props.children) || '';;
  }

  return '';
};
