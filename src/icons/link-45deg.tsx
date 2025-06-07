'use strict';
import React from "react";
import { cn } from "@heroui/theme";

/**
 * @see https://icons.getbootstrap.jp/icons/link-45deg/
 * @internal 
 */
const Link45deg: React.FC<Link45deg.Props> = (props) => {
  const { className, classNames, ...svgProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={cn(
        'bi bi-link-45deg',
        classNames?.base? classNames.base: className
      )}
      viewBox="0 0 16 16"
      data-slot="base"
      {...svgProps}
    >
      <path
        className={classNames?.anchor}
        d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"
        data-slot="anchor"
      />
      <path
        className={classNames?.anchor}
        d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"
        data-slot="anchor"
      />
    </svg>
  );
};

namespace Link45deg {
  export type Props = React.SVGProps<SVGSVGElement> & {
    classNames?: ClassNames;
  };

  export type ClassNames = Partial<{
    base  : string;
    anchor: string;
  }>;
};

export {
  Link45deg,
};
