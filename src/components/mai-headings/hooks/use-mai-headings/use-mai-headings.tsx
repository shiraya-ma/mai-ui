// useMaiHeadings
'use client';
import { useMemo } from 'react';
import { Link } from '@nextui-org/react';
import { Link45deg } from 'react-bootstrap-icons';

import { classNames as fnClassNames } from '../../../../libs';

import type { MaiHeadingsProps, MaiHeadingClassNames } from '../../props-types';

export function useMaiHeadings (props: MaiHeadingsProps) {
    const { children, className, classNames, color, endIcon, level: _level, startIcon, ..._props } = props;

    const level = useMemo(() => {
        const floored = Math.floor(_level);

        if (floored < 1) {
            return 1;
        }

        else if (6 < floored) {
            return 6;
        }

        return floored;
    }, [ _level ]);

    const fixedClassNames = useMemo((): MaiHeadingClassNames => {
        const base = fnClassNames(
            'block -mt-[var(--navbar-height)] pt-[var(--navbar-height)]',
            className,
            classNames?.base
        );

        const textByLevel = 
            level === 1? 'text-4xl my-8'
            : level === 2? 'text-3xl my-6 border-mint-300 border-l-[1ch] border-b-4 bg-mint-100 px-2 text-chocolate-700'
            : level === 3? 'text-2xl my-4 p-2 border-b-1 border-mint-300 '
            : level === 4? 'text-xl my-2'
            : level === 5? 'text-large'
            : level === 6? 'text-mdedium'
            : undefined;

        const textByColor = 
            level === 2? undefined
            : color === 'primary'? 'text-primary'
            : color === 'secondary'? 'text-secondary'
            : color === 'success'? 'text-success'
            : color === 'warn'? 'text-warning'
            : color === 'danger'? 'text-danger'
            : '[&>*]:text-foreground';

        const text = fnClassNames(
            'block font-heading [&_a]:hover:visible',
            textByLevel,
            textByColor,
            classNames?.text
        );

        const anchor = fnClassNames(
            (level !== 2? 'text-inherit': undefined),
            'align-text-bottom invisible',
            classNames?.anchor
        );

        return {
            base,
            text,
            anchor
        };
    }, [ className, classNames, color, level ]);

    // const fixedClassName = useMemo(() => {
    //     // const common = 'font-heading [&>a]:hover:visible';
    //     const common = {}

    //     const L = fixedLevel;

    //     const byLevel = undefined;
    //     // L === 1? '[&>*]:text-4xl my-8'
    //     // : L === 2? '[&>*]:text-3xl my-6 border-mint-300 border-l-[1ch] border-b-4 bg-mint-100 px-2 [&>*]:text-chocolate-700'
    //     // : L === 3? '[&>*]:text-2xl my-4 p-2 border-b-1 border-mint-300 '
    //     // : L === 4? '[&>*]:text-xl my-2'
    //     // : L === 5? '[&>*]:text-large'
    //     // : '[&>*]:text-mdedium';

    //     const C = color;

    //     const byColor = 
    //     L === 2? undefined:
    //     C === 'primary'? '[&>*]:text-primary':
    //     C === 'secondary'? '[&>*]:text-secondary':
    //     C === 'success'? '[&>*]:text-success':
    //     C === 'warn'? '[&>*]:text-warning':
    //     C === 'danger'? '[&>*]:text-danger':
    //     '[&>*]:text-foreground';

    //     const _className = fnClassNames(
    //         common,
    //         byLevel,
    //         byColor,
    //         className
    //     );

    //     return _className;
    // }, [ className, color, fixedLevel ]);

    const id = useMemo(() => children.trim().replace(/\s+/g, '-').toLowerCase(), [ children ]);

    const fixedChildren = (<>
        <span className={ fixedClassNames.text }>
            { startIcon }
            { children }
            { endIcon }

            <Link
            href={`#${ id }`}
            className={fixedClassNames.anchor }
            color={ level === 2? 'secondary': undefined }
            style={{
                fontSize: 'inherit'
            }}>
                <Link45deg />
            </Link>
        </span>
    </>);

    
    return {
        children: fixedChildren,
        className: fixedClassNames.base,
        id,
        level,
        ..._props
    };
};
