// MaiHeadings
'use strict';
import React, { HTMLAttributes, ReactNode } from 'react';

import { MaiHeadingsPresenter } from './mai-headings-presenter';
import { useHeadingClassName, useHeadingID } from './hooks';

const MaiHeadings: React.FC<MaiHeadings.Props> = (props) => {
    const { className, id, level, ...headingProps } = props;

    const { headingClassName } = useHeadingClassName(className);
    const { headingID } = useHeadingID(headingProps.children);
    
    return (
        <MaiHeadingsPresenter
        { ...headingProps }
        headingClassName={ headingClassName }
        id={ id ?? headingID }
        level={ level }
        />
    );
};

namespace MaiHeadings {
    export type Props = HTMLAttributes<HTMLHeadingElement> & {
        children: string;
        endContent?: ReactNode;
        level: MaiHeadingsPresenter.HeadingLevel;
        startContent?: ReactNode;
    };
};

export {
    MaiHeadings
};
