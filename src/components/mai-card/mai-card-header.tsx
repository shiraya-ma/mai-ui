// MaiCardHeader
'use strict';
import { HTMLAttributes, forwardRef } from 'react';
import { CardHeader } from '@nextui-org/react';

const MaiCardHeader = forwardRef<HTMLDivElement, MaiCardHeader.Props>((props, ref) => {
    const { ...cardHeaderProps } = props;
    
    return (
        <CardHeader
        { ...cardHeaderProps }
        />
    );
});

namespace MaiCardHeader {
    export type Props = HTMLAttributes<HTMLDivElement> & {};
};

export {
    MaiCardHeader
};
