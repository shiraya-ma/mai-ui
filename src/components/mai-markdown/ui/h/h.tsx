// H
'use strict';
import React, { HTMLAttributes } from 'react';

import { MaiHeadings } from '../../../../components';

const H = (level: MaiHeadings.HeadingLevel) => (props: H.Props) => {
    const { children } = props;
    
    return (
        <MaiHeadings
        className='[&+*]:!block [&+*]:p-0'
        level={ level  }
        >
            { children as string }
        </MaiHeadings>
    );
};

namespace H {    
    export type Props = HTMLAttributes<HTMLHeadingElement> & {};
};

export {
    H
};
