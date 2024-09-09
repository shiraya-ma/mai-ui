'use strict';
import type { ReactNode } from "react";

export type MaiHedingProps = {
    children: string;
    className?: string;
    color?: 'foreground' | 'primary' | 'secondary' | 'success' | 'warn' | 'danger';
    endIcon?: ReactNode;
    startIcon?: ReactNode;
};

export type MaiHeadingsProps = MaiHedingProps & { level: number };
