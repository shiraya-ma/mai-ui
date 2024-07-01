// PFC
'use strict';
import React, { ReactNode } from 'react';
import { PPresenter } from './p-presenter';
import { useRemoveParagraph } from './hooks';

const PFC: React.FC<PFC.Props> = (props) => {
    const { children } = props;

    const { removeParagraph } = useRemoveParagraph(children);
    
    return (
        <PPresenter
        removeParagraph={ removeParagraph }
        >
            { children }
        </PPresenter>
    );
};

namespace PFC {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    PFC
};
