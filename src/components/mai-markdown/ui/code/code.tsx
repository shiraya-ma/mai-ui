// Code
'use strict';
import React, { HTMLAttributes } from 'react';

const Code = (props: Code.Props) => {
    const { children } = props;
    
    return (
        <>{ children }</>
    );
};

namespace Code {
    export type Props = HTMLAttributes<HTMLElement> & {};
};

export {
    Code
};
