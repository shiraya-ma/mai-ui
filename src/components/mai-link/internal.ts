'use client';

/** @internal */
export function _isExternalHref (href?: string) {
  if (!href || typeof window === 'undefined') return false;

  if (!URL.canParse(href)) return false;

  const url = new URL(href);
  const currentURL = new URL(window.location.href);

  return url.origin !== currentURL.origin;
};
