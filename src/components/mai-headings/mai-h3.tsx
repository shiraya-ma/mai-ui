// MaiH3
'use strict';
import { HTMLAttributes, ReactNode } from 'react';

import { MaiHeadings } from './mai-headings';

const MaiH3 = (props: MaiH3.Props) => {
    const { children, ...headingProps } = props;
    
    return (
        <MaiHeadings
        { ...headingProps }
        children={ children as string }
        level={ 3 }
        />
    );
};

namespace MaiH3 {
    export type Props = HTMLAttributes<HTMLHeadingElement> & {
        endContent?: ReactNode;
        startContent?: ReactNode;
    };
};

export {
    MaiH3
};
