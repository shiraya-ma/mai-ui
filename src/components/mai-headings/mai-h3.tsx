// MaiH3
'use strict';
import { HTMLAttributes } from 'react';

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
    export type Props = HTMLAttributes<HTMLHeadingElement> & {};
};

export {
    MaiH3
};
