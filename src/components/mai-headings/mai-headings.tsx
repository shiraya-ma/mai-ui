// MaiHeadings
'use strict';
import React, { HTMLAttributes } from 'react';

import { MaiHeadingsPresenter } from './mai-headings-presenter';
import { useHeadingID } from './hooks';

const MaiHeadings: React.FC<MaiHeadings.Props> = (props) => {
    const { id, level, ...headingProps } = props;

    const { headingID } = useHeadingID(headingProps.children);
    
    return (
        <MaiHeadingsPresenter
        { ...headingProps }
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
