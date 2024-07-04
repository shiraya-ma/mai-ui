// Container
'use strict';
import React, { ReactNode } from 'react';

const Container: React.FC<Container.Props> = (props) => {
    const { children } = props;
    
    return (
        <>
            { children }
        </>
    );
};

namespace Container {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    Container
};
