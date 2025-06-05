'use strict';
import React, { type ReactNode } from 'react';
import { cn } from '@heroui/theme';

import { Link45deg } from '@/icons';
import { MaiLink } from '../mai-link';

/** @internal */
const MaiHeadingsInner: React.FC<MaiHeadingsInner.Props> = (props) => {
  const {
    children,
    color,
    id,
    className,
    classNames,

    startIcon,
    endIcon,
  } = props;

  return (
    <>
      <span
        className={cn(
          classNames?.text? classNames.text: className,
        )}
        data-slot="text"
      >
        {startIcon}
        {children}
        {endIcon}
      </span>

      {id && (
        <MaiLink
          className={cn(
            'align-text-bottom invisible group-hover/headings:visible',
            classNames?.link,
          )}
          href={`#${id}`}
          color={color}
          data-slot="link"
        >
          <Link45deg
            classNames={classNames?.icon}
            data-slot="icon"
          />
        </MaiLink>
      )}
    </>
  );
};
MaiHeadingsInner.displayName = 'MaiHeadingsInner';

namespace MaiHeadingsInner {
  export type Props = Partial<{
    children: string | number | null | undefined;
    id: string;
    className: string;
    classNames: ClassNames;
    color: "primary" | "secondary" | "success" | "danger" | "foreground" | "warning";

    startIcon: ReactNode;
    endIcon: ReactNode;
  }>;

  export type ClassNames = Partial<{
    text: string;
    link: string;
    icon: Link45deg.ClassNames;
  }>;
};

export {
  MaiHeadingsInner
};

