// MaiH2
'use strict';
import { HTMLAttributes, ReactNode } from 'react';

import { MaiHeadings } from './mai-headings';

const MaiH2 = (props: MaiH2.Props) => {
    const { children, ...headingProps } = props;
    
    return (
        <MaiHeadings
        { ...headingProps }
        children={ children as string }
        level={ 2 }
        />
    );
};

namespace MaiH2 {
    export type Props = HTMLAttributes<HTMLHeadingElement> & {
        endContent?: ReactNode;
        startContent?: ReactNode;
    };
};

export {
    MaiH2
};
