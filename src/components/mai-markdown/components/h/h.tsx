// H
'use strict';
import React, { type HTMLAttributes } from 'react';

import { MaiHeadings } from '../../../mai-headings';

const H = (level: number) => (props: H.Props) => {
    const { children } = props;
    return (
        <MaiHeadings
        children={ children as string }
        level={ level }/>
    );
};

namespace H {
    export type Props = HTMLAttributes<HTMLHeadingElement> & {};
};

export {
    H
};
