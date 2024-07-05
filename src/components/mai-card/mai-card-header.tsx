// MaiCardHeader
'use strict';
import { HTMLAttributes, forwardRef } from 'react';
import { CardHeader } from '@nextui-org/react';

const MaiCardHeader = forwardRef<"div", MaiCardHeader.Props>((props) => {
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
