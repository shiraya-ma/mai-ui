// MaiH6
'use strict';
import { HTMLAttributes, ReactNode } from 'react';

import { MaiHeadings } from './mai-headings';

const MaiH6 = (props: MaiH6.Props) => {
    const { children, ...headingProps } = props;
    
    return (
        <MaiHeadings
        { ...headingProps }
        children={ children as string }
        level={ 6 }
        />
    );
};

namespace MaiH6 {
    export type Props = HTMLAttributes<HTMLHeadingElement> & {
        endContent?: ReactNode;
        startContent?: ReactNode;
    };
};

export {
    MaiH6
};
