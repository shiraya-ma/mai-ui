// Ul
'use strict';
import React, { type OlHTMLAttributes } from 'react';

const Ul = (props: Ul.Props) => {
    const { children } = props;
    
    return (
        <ul
        className='
        pl-4
        list-inside
        list-disc
        [&_ul]:list-[circle]
        [&_ul_ul]:list-[square]
        '>
            { children}
        </ul>
    );
};

namespace Ul {
    export type Props = OlHTMLAttributes<{}> & {};
};

export {
    Ul
};
