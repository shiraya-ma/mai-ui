// Divider
'use strict';
import React, { HTMLAttributes } from 'react';
import { Divider as _Divier } from '@nextui-org/react';

const Divider: React.FC<Divider.Props> = (props) => {
    const { ...divProps } = props;
    
    return (
        <_Divier
        { ...divProps }
        />
    );
};

namespace Divider {
    export type Props = HTMLAttributes<HTMLDivElement> & {};
};

export {
    Divider
};
