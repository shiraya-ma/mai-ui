// MaiHeadings
'use strict';
import React, { HTMLAttributes } from 'react';

import { MaiHeadingsPresenter } from './mai-headings-presenter';
import { useHeadingClassName, useHeadingID } from './hooks';

const MaiHeadings: React.FC<MaiHeadings.Props> = (props) => {
    const { className, id, level, ...headingProps } = props;

    const { headingClassName } = useHeadingClassName(className);
    const { headingID } = useHeadingID(headingProps.children);
    
    return (
        <MaiHeadingsPresenter
        { ...headingProps }
        className={ headingClassName }
        id={ id ?? headingID }
        level={ level }
        />
    );
};

namespace MaiHeadings {
    export type Props = HTMLAttributes<HTMLHeadingElement> & {
        children: string;
        level: MaiHeadingsPresenter.HeadingLevel;
    };
};

export {
    MaiHeadings
};
