'use client';
import { type RefObject, useEffect, useState } from 'react';

/** @internal */
export function useAnchorIsOnlyChild (refAnchor: RefObject<HTMLAnchorElement | null>) {
  const [ isOnlyChild, setIsOnlyChild ] = useState<boolean>(false);

  useEffect(() => {
    const anchor = refAnchor.current;
    if (typeof window === 'undefined' || !anchor) return;

    const parent = anchor.parentElement;

    const isOnlyChild = parent?.childElementCount === 1 && parent.firstElementChild === anchor;
    setIsOnlyChild(isOnlyChild);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isOnlyChild;
};
