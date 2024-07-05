// MaiCardBody
'use strict';
import { HTMLAttributes, forwardRef } from 'react';
import { CardBody } from '@nextui-org/react';

const MaiCardBody = forwardRef<"div", MaiCardBody.Props>((props, ref) => {
    const { ...cardBodyProps } = props;
    
    return (
        <CardBody
        { ...cardBodyProps }
        />
    );
});

namespace MaiCardBody {
    export type Props = HTMLAttributes<HTMLDivElement> & {};
};

export {
    MaiCardBody
};
