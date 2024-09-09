// ContentSecurityPolicyProvider
'use strict';
import React, { ReactNode } from 'react';

import { useContentSecurityPolicyContext } from './use-content-security-policy-context';
import { ContentSecurityPolicyContext } from './content-security-policy-context';

const ContentSecurityPolicyProvider: React.FC<ContentSecurityPolicyProvider.Props> = (props) => {
    const { children } = props;

    const { csp } = useContentSecurityPolicyContext();
    
    return (
        <ContentSecurityPolicyContext.Provider value={ csp }>
            { children }
        </ContentSecurityPolicyContext.Provider>
    );
};

namespace ContentSecurityPolicyProvider {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    ContentSecurityPolicyProvider
};
