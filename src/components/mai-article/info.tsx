// Info
'use strict';
import React, { ReactNode } from 'react';

const Info: React.FC<Info.Props> = (props) => {
    const { children } = props;
    
    return (
        <>
            { children }
        </>
    );
};

namespace Info {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    Info
};
