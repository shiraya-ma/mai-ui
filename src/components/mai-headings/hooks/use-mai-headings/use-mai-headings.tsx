// useMaiHeadings
'use client';
import { useMemo } from 'react';
import { Link } from '@nextui-org/react';
import { Link45deg } from 'react-bootstrap-icons';

import type { MaiHeadingsProps } from '../../props-types';

export function useMaiHeadings (props: MaiHeadingsProps) {
    const { children, className, color, endIcon, level, startIcon, ..._props } = props;

    const id = useMemo(() => children.trim().replace(/\s+/g, '-').toLowerCase(), [ children ]);

    const fixedChildren = (<>
        <span>
            { startIcon }
            { children }
            { endIcon }
        </span>

        <Link href={`#${ id }`} className='align-text-bottom invisible'>
            <Link45deg />
        </Link>

    </>);

    const fixedLevel = useMemo(() => {
        const floored = Math.floor(level);

        if (floored < 1) {
            return 1;
        }

        else if (6 < floored) {
            return 6;
        }

        return floored;
    }, [ level ]);

    const fixedClassName = useMemo(() => {
        const common = 'font-heading [&>a]:hover:visible';

        const L = fixedLevel;

        const C = color;

        const byColor = 
        L === 2? undefined:
        C === 'primary'? '[&>*]:text-primary':
        C === 'secondary'? '[&>*]:text-secondary':
        C === 'success'? '[&>*]:text-success':
        C === 'warn'? '[&>*]:text-warning':
        C === 'danger'? '[&>*]:text-danger':
        '[&>*]:text-foreground';

        const byLevel = 
        L === 1? '[&>*]:text-4xl my-8'
        : L === 2? '[&>*]:text-3xl my-6 border-mint-300 border-l-[1ch] border-b-4 bg-mint-100 px-2 [&>*]:text-chocolate-700'
        : L === 3? '[&>*]:text-2xl my-4 p-2 border-b-1 border-mint-300 '
        : L === 4? '[&>*]:text-xl my-2'
        : L === 5? '[&>*]:text-large'
        : '[&>*]:text-mdedium';

        const _class = [
            common,
            byColor,
            byLevel,
            className
        ]
        .filter(t => typeof t === 'string')
        .join(' ');

        return _class;
    }, [ className, color, fixedLevel ]);
    
    return {
        children: fixedChildren,
        className: fixedClassName,
        id,
        level: fixedLevel,
        ..._props
    };
};
