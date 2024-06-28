// A
'use strict';
import React, { HTMLAttributes } from 'react';

const A = (props: A.Props) => {
    const { node, ...anchorProps } = props;
    
    return (
        <a
        { ...anchorProps }
        />
    );
};

namespace A {
    export type Props = HTMLAttributes<HTMLAnchorElement> & {
        node?: any;
    };
};

export {
    A
};
