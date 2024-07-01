// CodePresenter
'use strict';
import { Code } from '@nextui-org/react';
import React, { ReactNode } from 'react';

const CodePresenter: React.FC<CodePresenter.Props> = (props) => {
    const { children, inPre } = props;

    return inPre? (
        <>
            { children }
        </>
    )
    : (
        <Code className='font-code'>
            { children }
        </Code>
    );
};

namespace CodePresenter {
    export type Props = {
        children?: ReactNode;
        inPre?: boolean;
    };
};

export {
    CodePresenter
};
