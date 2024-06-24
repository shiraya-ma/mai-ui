// MaiH4
'use strict';
import { HTMLAttributes } from 'react';

import { MaiHeadings } from './mai-headings';

const MaiH4 = (props: MaiH4.Props) => {
    const { children, ...headingProps } = props;
    
    return (
        <MaiHeadings
        { ...headingProps }
        children={ children as string }
        level={ 4 }
        />
    );
};

namespace MaiH4 {
    export type Props = HTMLAttributes<HTMLHeadingElement> & {};
};

export {
    MaiH4
};
