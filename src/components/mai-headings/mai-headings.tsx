// MaiHeadings
'use strict';
import React, { HTMLAttributes } from 'react';

import { MaiHeadingsPresenter } from './mai-headings-presenter';

const MaiHeadings: React.FC<MaiHeadings.Props> = (props) => {
    const { level, ...headingProps } = props;
    
    return (
        <MaiHeadingsPresenter
        { ...headingProps }
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
