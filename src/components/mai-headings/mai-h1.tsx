// MaiH1
'use strict';
import { HTMLAttributes, ReactNode } from 'react';

import { MaiHeadings } from './mai-headings';

const MaiH1 = (props: MaiH1.Props) => {
    const { children, ...headingProps } = props;
    
    return (
        <MaiHeadings
        { ...headingProps }
        children={ children as string }
        level={ 1 }
        />
    );
};

namespace MaiH1 {
    export type Props = HTMLAttributes<HTMLHeadingElement> & {
        endContent?: ReactNode;
        startContent?: ReactNode;
    };
};

export {
    MaiH1
};
