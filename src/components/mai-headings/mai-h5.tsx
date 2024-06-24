// MaiH5
'use strict';
import { HTMLAttributes } from 'react';

import { MaiHeadings } from './mai-headings';

const MaiH5 = (props: MaiH5.Props) => {
    const { children, ...headingProps } = props;
    
    return (
        <MaiHeadings
        { ...headingProps }
        children={ children as string }
        level={ 5 }
        />
    );
};

namespace MaiH5 {
    export type Props = HTMLAttributes<HTMLHeadingElement> & {};
};

export {
    MaiH5
};
