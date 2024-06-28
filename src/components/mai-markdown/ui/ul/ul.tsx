// UL
'use strict';
import React, { OlHTMLAttributes } from 'react';

const UL = (props: UL.Props) => {
    const { children } = props;
    
    return (
        <ul className='pl-4 list-disc'>
            { children }
        </ul>
    );
};

namespace UL {
    export type Props = OlHTMLAttributes<HTMLUListElement> & {};
};

export {
    UL
};
