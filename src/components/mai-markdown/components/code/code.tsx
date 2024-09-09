// Code
'use strict';
import React, { type HTMLAttributes } from 'react';
import {
    Code as NextCode
} from '@nextui-org/react';

import { useMarkdownCode } from '../../hooks';

const CodeFC: React.FC<Code.Props> = (props) => {
    const { children } = props;

    const { inPre } = useMarkdownCode();

    return inPre? (
        <>{ children }</>
    ): (
        <NextCode className='font-code'>{ children }</NextCode>
    );
};

const Code = (props: Code.Props) => (<CodeFC { ...props } />);



namespace Code {
    export type Props = HTMLAttributes<HTMLElement> & {};
};

export {
    Code
};
