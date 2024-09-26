'use strict';
import type { ReactElement } from "react";

export type MaiHedingProps = {
    children: string;
    className?: string;
    color?: 'foreground' | 'primary' | 'secondary' | 'success' | 'warn' | 'danger';
    endIcon?: ReactElement;
    startIcon?: ReactElement;

    classNames?: MaiHeadingClassNames;
};

export type MaiHeadingClassNames = {
    base?: string;
    text?: string;
    anchor?: string;
};

export type MaiHeadingsProps = MaiHedingProps & { level: number };
