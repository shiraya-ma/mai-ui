// MaiHeadingsPresenter
'use strict';
import React, { HTMLAttributes, ReactNode } from 'react';

const MaiHeadingsPresenter: React.FC<MaiHeadingsPresenter.Props> = (props) => {
    const { children, className, endContent, headingClassName, level, startContent, ...headingsProps } = props;
    
    return level === 1? (
        <h1
        { ...headingsProps }
        className={ headingClassName(
            'my-8 text-4xl text-center',
        )}
        >{ startContent }{ children }{ endContent }</h1>
    ):
    level === 2? (
        <h2
        { ...headingsProps }
        className={ headingClassName(
            'my-6 text-3xl border-mint-300 border-l-[1ch] border-b-4 bg-mint-100 px-2 !text-chocolate-700',
        )}
        >{ startContent }{ children }{ endContent }</h2>
    ):
    level === 3? (
        <h3
        { ...headingsProps }
        className={ headingClassName(
            'my-4 p-2 border-b-1 border-mint-300 text-2xl',
        )}
        >{ startContent }{ children }{ endContent }</h3>
    ):
    level === 4? (
        <h4
        { ...headingsProps }
        className={ headingClassName(
            'my-2 text-xl',
        )}
        >{ startContent }{ children }{ endContent }</h4>
    ):
    level === 5? (
        <h5
        { ...headingsProps }
        className={ headingClassName(
            'my-2 text-l',
        )}
        >{ startContent }{ children }{ endContent }</h5>
    ):
    (
        <h6
        { ...headingsProps }
        className={ headingClassName(
            'text-l',
        )}
        >{ startContent }{ children }{ endContent }</h6>
    );
};

namespace MaiHeadingsPresenter {
    export type Props = HTMLAttributes<HTMLHeadingElement> & {
        children: string;
        endContent?: ReactNode;
        level: HeadingLevel;
        startContent?: ReactNode;

        headingClassName: (className: string) => string;
    };

    export type HeadingLevel =  1 | 2 | 3 | 4 | 5 | 6;
};

export {
    MaiHeadingsPresenter
};
