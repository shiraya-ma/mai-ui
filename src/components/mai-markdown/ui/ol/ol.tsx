// OL
'use strict';
import React, { OlHTMLAttributes } from 'react';

const OL = (props: OL.Props) => {
    const { children } = props;
    
    return (
        <ol
        className='
        pl-4
        list-decimal
        [&_ol]:list-[upper-roman]
        [&_ol_ol]:list-[lower-roman]
        [&_ol_ol_ol]:list-[upper-alpha]
        [&_ol_ol_ol_ol]:list-[lower-alpha]
        '
        >
            { children }
        </ol>
    );
};

namespace OL {
    export type Props = OlHTMLAttributes<{}> & {};
};

export {
    OL
};
