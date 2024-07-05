// MaiCardFooter
'use strict';
import { forwardRef } from 'react';
import { CardFooter, CardFooterProps } from '@nextui-org/react';

const MaiCardFooter = forwardRef<"div", MaiCardFooter.Props>((props) => {
    const { ...cardFooterProps } = props;
    
    return (
        <CardFooter
        { ...cardFooterProps }
        />
    );
});

namespace MaiCardFooter {
    export type Props = CardFooterProps & {};
};

export {
    MaiCardFooter
};
