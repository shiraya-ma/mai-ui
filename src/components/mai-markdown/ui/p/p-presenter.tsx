// PPresenter
'use strict';
import React, { ReactNode } from 'react';

const PPresenter: React.FC<PPresenter.Props> = (props) => {
    const { children, removeParagraph } = props;
    
    return removeParagraph? 
    (
        <>
            { children }
        </>
    )
    :(
        <p>
            { children }
        </p>
    );
};

namespace PPresenter {
    export type Props = {
        children?: ReactNode;
        removeParagraph?: boolean;
    };
};

export {
    PPresenter
};
