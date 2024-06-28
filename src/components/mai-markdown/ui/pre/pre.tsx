// Pre
'use strict';
import React, { HTMLAttributes } from 'react';

import { MaiCodeBlock } from '../../../../components';

const Pre = (props: Pre.Props) => {
    const { children } = props;
    
    return (
        <MaiCodeBlock>
            { children?.toString() ?? '' }
        </MaiCodeBlock>
    );
};

namespace Pre {
    export type Props = HTMLAttributes<HTMLPreElement> & {};
};

export {
    Pre
};
