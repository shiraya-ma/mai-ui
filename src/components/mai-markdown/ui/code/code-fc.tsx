// CodeFC
'use strict';
import React, { ReactNode, useContext } from 'react';

import { PreContext } from '../pre/pre-context';
import { CodePresenter } from './code-presenter';

const CodeFC: React.FC<CodeFC.Props> = (props) => {
    const { children } = props;

    const { inPre } = useContext(PreContext);
    
    return (
        <CodePresenter inPre={ inPre }>
            { children }
        </CodePresenter>
    );
};

namespace CodeFC {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    CodeFC
};
