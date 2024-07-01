// Pre
'use strict';
import React, { HTMLAttributes } from 'react';

import { PreFC } from './pre-fc';
import { PreContext } from './pre-context';

const Pre = (props: Pre.Props) => {
    const { children } = props;

    return (
        <PreContext.Provider value={{ inPre: true }}>
            <PreFC>
                { children }
            </PreFC>
        </PreContext.Provider>
    );
};

namespace Pre {
    export type Props = HTMLAttributes<HTMLPreElement> & {};
};

export {
    Pre
};
