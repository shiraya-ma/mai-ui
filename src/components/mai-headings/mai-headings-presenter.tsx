// MaiHeadingsPresenter
'use strict';
import React, { HTMLAttributes } from 'react';

import { margeClassNames } from '@mai-ui/libs';

const MaiHeadingsPresenter: React.FC<MaiHeadingsPresenter.Props> = (props) => {
    const { children, className, level, ...headingsProps } = props;
    
    return level === 1? (
        <h1
        { ...headingsProps }
        className={ margeClassNames([className]) }
        >{ children }</h1>
    ):
    level === 2? (
        <h2
        { ...headingsProps }
        className={ margeClassNames([className]) }
        >{ children }</h2>
    ):
    level === 3? (
        <h3
        { ...headingsProps }
        className={ margeClassNames([className]) }
        >{ children }</h3>
    ):
    level === 4? (
        <h4
        { ...headingsProps }
        className={ margeClassNames([className]) }
        >{ children }</h4>
    ):
    level === 5? (
        <h5
        { ...headingsProps }
        className={ margeClassNames([className]) }
        >{ children }</h5>
    ):
    (
        <h6
        { ...headingsProps }
        className={ margeClassNames([className]) }
        >{ children }</h6>
    );
};

namespace MaiHeadingsPresenter {
    export type Props = HTMLAttributes<HTMLHeadingElement> & {
        children: string;
        level: HeadingLevel;
    };

    export type HeadingLevel =  1 | 2 | 3 | 4 | 5 | 6;
};

export {
    MaiHeadingsPresenter
};
