// MaiBuredcrumbs
'use strict';
import React, { ReactNode } from 'react';

const MaiBuredcrumbs: React.FC<MaiBuredcrumbs.Props> = (props) => {
    const { children } = props;
    
    return (
        <>
            { children }
        </>
    );
};

namespace MaiBuredcrumbs {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    MaiBuredcrumbs
};
