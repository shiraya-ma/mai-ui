// Divider
'use strict';
import React, { ReactNode } from 'react';

const Divider: React.FC<Divider.Props> = (props) => {
    const { children } = props;
    
    return (
        <>
            { children }
        </>
    );
};

namespace Divider {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    Divider
};
