'use client';
import { ReactNode } from "react";

export function parseChildren (children: ReactNode) {
    const DEFAULT = {
        fixedChildren: children,
        quoteType: 'DEFAULT'
    };

    const REG_ALERT_TAG = /^\[\!\S+[^\]]\]/;

    const target: Node = (children as any)[1];

    if (typeof target === 'string') {
        return DEFAULT;
    }

    const targetChildren = target.props.children as Node | (string | Node)[];

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

    else if (targetChildren instanceof Array) {
        const first = targetChildren[0];

        if (typeof first === 'string') {
            const matchedAlertTag = first.match(REG_ALERT_TAG);

            if (!matchedAlertTag) {
                return DEFAULT;
            }

            const quoteType = matchedAlertTag[0].substring(2, matchedAlertTag[0].length - 1);

            const fixedFirst = first.replace(REG_ALERT_TAG, '').replace(/^\n/, '');

            const fixedChildren = [
                fixedFirst,
                targetChildren[1],
                targetChildren[2]
            ] as ReactNode;

            return {
                fixedChildren,
                quoteType
            };
        }

        return DEFAULT;
    }

    return DEFAULT;
};

type Node = string | {
    key: string;
    props: {
        children: string | Node[];
    };
};
