'use strict';
import React from "react";
import { cn } from "@heroui/theme";

/**
 * @see https://icons.getbootstrap.jp/icons/twitter-x/
 * @internal 
 */
const TwitterX: React.FC<TwitterX.Props> = (props) => {
  const { className, classNames, ...svgProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={cn(
        'bi bi-twitter-x',
        classNames?.base? classNames.base: className
      )}
      viewBox="0 0 16 16"
      {...svgProps}
      data-slot="base"
    >
      <path
        className={classNames?.twitter}
        d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
        data-slot="twitter"
      />
    </svg>
  );
};

namespace TwitterX {
  export type Props = React.SVGProps<SVGSVGElement> & {
    classNames?: Partial<{
      base   : string;
      twitter: string;
    }>;
  };
};

export {
  TwitterX,
};
