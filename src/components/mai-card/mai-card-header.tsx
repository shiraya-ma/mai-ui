// MaiCardHeader
'use strict';
import React, { ReactNode } from 'react';

const MaiCardHeader: React.FC<MaiCardHeader.Props> = (props) => {
    const { children } = props;
    
    return (
        <>
            { children }
        </>
    );
};

namespace MaiCardHeader {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    MaiCardHeader
};
