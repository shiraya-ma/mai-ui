// ExternalLinkProvider
'use strict';
import React, { ReactNode } from 'react';

import { ExternalLinkContext, ExternalLinkOpenerContext } from './external-link-context';
import { useExternalLinkContext } from './use-external-link-context';

const ExternalLinkProvider: React.FC<ExternalLinkProvider.Props> = (props) => {
    const { children } = props;

    const { externalLinkHref, openExternalLinkModal } = useExternalLinkContext();
    
    return (
        <ExternalLinkContext.Provider value={ externalLinkHref }>
            <ExternalLinkOpenerContext.Provider value={ openExternalLinkModal }>
                { children }
            </ExternalLinkOpenerContext.Provider>
        </ExternalLinkContext.Provider>
    );
};

namespace ExternalLinkProvider {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    ExternalLinkProvider
};
