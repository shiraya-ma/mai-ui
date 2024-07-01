// Code
'use strict';
import React, { HTMLAttributes, useContext } from 'react';

import { CodeFC } from './code-fc';
import { PreContext } from '../pre/pre-context';

const Code = (props: Code.Props) => {
    const { children } = props;
    
    return (
        <CodeFC>
            { children }
        </CodeFC>
    );
};

namespace Code {
    export type Props = HTMLAttributes<HTMLElement> & {};
};

export {
    Code
};
