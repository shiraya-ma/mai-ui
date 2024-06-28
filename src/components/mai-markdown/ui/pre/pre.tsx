// Pre
'use strict';
import React, { HTMLAttributes } from 'react';

import { MaiCodeBlock } from '../../../../components';
import { getProps } from './helpers';

const Pre = (props: Pre.Props) => {
    const { children } = props;

    const { filename, fixedChildren, language } = getProps(children);

    return (
        <MaiCodeBlock filename={ filename } language={ language }>
            { fixedChildren }
        </MaiCodeBlock>
    );
};

namespace Pre {
    export type Props = HTMLAttributes<HTMLPreElement> & {};
};

export {
    Pre
};
