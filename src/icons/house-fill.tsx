'use strict';
import React from "react";
import { cn } from "@heroui/theme";

/**
 * @see https://icons.getbootstrap.jp/icons/house-fill/ 
 * @internal 
 */
const HouseFill: React.FC<HouseFill.Props> = (props) => {
  const { className, classNames, ...svgProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={cn(
        'bi bi-house-fill',
        classNames?.base? classNames.base: className
      )}
      viewBox="0 0 16 16"
      {...svgProps}
      data-slot="base"
    >
      <path
        className={classNames?.roof}
        d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"
        data-slot="roof"
      />
      <path
        className={classNames?.house}
        d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"
        data-slot="house"
      />
    </svg>
  );
};

namespace HouseFill {
  export type Props = React.SVGProps<SVGSVGElement> & {
    classNames?: Partial<{
      base : string;
      house: string;
      roof : string;
    }>;
  };
};

export {
  HouseFill,
};
