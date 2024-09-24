// NavigateContextProvider
'use strict';
import React, { ReactNode } from 'react';
import { NavigateContext, type NavigateFunction } from './context';
import { useNavigateContext } from './use-navigate-context';

const NavigateContextProvider: React.FC<NavigateContextProvider.Props> = (props) => {
    const { children, navigate } = props;

    const { navigateContext } = useNavigateContext(navigate);
    
    return (
        <NavigateContext.Provider value={ navigateContext }>
            { children }
        </NavigateContext.Provider>
    );
};

namespace NavigateContextProvider {
    export type Props = {
        children?: ReactNode;
        navigate: NavigateFunction;
    };
};

export {
    NavigateContextProvider
};
