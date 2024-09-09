// P
'use strict';
import React, { type HTMLAttributes } from 'react';
import { useParagraph } from './hooks';

const PFC: React.FC<P.Props> = (props) => {
    const { children, removeParagraph, ...pProps } = useParagraph(props);

    return removeParagraph? 
    (
        <>{ children }</>
    )
    :(
        <p { ...pProps }>{ children }</p>
    );
};

const P = (props: P.Props) => (<PFC { ...props } />);

namespace P {
    export type Props = HTMLAttributes<HTMLParagraphElement> & {};
};

export {
    P
};
