// MaiCardFooter
'use strict';
import { forwardRef } from 'react';
import { CardFooter, CardFooterProps } from '@nextui-org/react';

const MaiCardFooter = forwardRef<"div", MaiCardFooter.Props>((props, ref) => {
    const { ...cardFooterProps } = props;
    
    return (
        <CardFooter
        ref={ ref }
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
