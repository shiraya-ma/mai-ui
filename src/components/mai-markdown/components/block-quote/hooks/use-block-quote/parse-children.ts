/* eslint-disable */
'use client';
import { type ReactElement, type ReactNode } from "react";

export function parseChildren (children: ReactNode) {
    const DEFAULT = {
        fixedChildren: children,
        quoteType: 'DEFAULT'
    };

    const target: ReactElement = (children as any)[1];

    if (typeof target === 'string' || (target.props as any).children === undefined) {
        return DEFAULT;
    }

    const targetChildren = (target.props as any).children as ReactNode;

    const REG_ALERT_TAG = /^\[\!\S+[^\]]\]/;

    if (typeof targetChildren === 'string') {

        const matchedAlertTag = targetChildren.match(REG_ALERT_TAG);

        if (!matchedAlertTag) {
            return DEFAULT;
        }

        const quoteType = matchedAlertTag[0].substring(2, matchedAlertTag[0].length - 1);

        const fixedChildren = targetChildren.replace(REG_ALERT_TAG, '').replace(/^\n/, '');

        return {
            fixedChildren,
            quoteType
        };
    }

    else if (targetChildren instanceof Array && typeof targetChildren[0] === 'string') {
        const [ first, ...children] = targetChildren;

        const matchedAlertTag = first.match(REG_ALERT_TAG);

        if (!matchedAlertTag) {
            return DEFAULT;
        }

        const quoteType = matchedAlertTag[0].substring(2, matchedAlertTag[0].length - 1);

        const fixedFirst = first.replace(REG_ALERT_TAG, '').replace(/^\n/, '');

        const fixedChildren = [
            fixedFirst,
            ...children
        ] as ReactNode;

        return {
            fixedChildren,
            quoteType
        };
    }

    return DEFAULT;
};
