'use client';
import { _isExternalHref } from "./internal";

import type { MaiLink } from "./mai-link";

/** @internal */
export function useMaiLink (props: MaiLink.Props) {
  const { href, isExternal: userIsExternal, ...linkProps } = props;

  const isExternal = userIsExternal ?? _isExternalHref(href);

  return {
    href,
    isExternal,
    ...linkProps
  };
};
