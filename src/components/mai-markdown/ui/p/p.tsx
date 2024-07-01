// P
'use strict';
import React, { ReactNode } from 'react';
import { PFC } from './p-fc';

const P = (props: P.Props) => {
    const { children } = props;
    
    return (
        <PFC>
            { children }
        </PFC>
    );
};

namespace P {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    P
};
