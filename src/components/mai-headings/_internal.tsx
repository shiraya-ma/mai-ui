'use client';
import { type ReactNode, type HtmlHTMLAttributes } from 'react';

import { MaiHeadingsInner } from './mai-headings-inner';

export type MaiHeadingsProps = HtmlHTMLAttributes<HTMLHeadingElement> & {
  color?: "primary" | "secondary" | "success" | "danger" | "foreground" | "warning";
  classNames?: MaiHeadingsClassNames
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export type MaiHeadingsClassNames = MaiHeadingsInner.ClassNames & Partial<{
  base: string;
}>;
