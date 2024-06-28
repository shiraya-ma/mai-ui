// AFC
'use strict';
import React, { ReactNode } from 'react';

import { APresenter } from './a-presenter';
import { useOGPCard } from './hooks';

const AFC: React.FC<AFC.Props> = (props) => {
    const { children, href } = props;

    const {
        color,
        fixedChildren,
        fixedHref,
        ogpData
    } = useOGPCard(href, children);
    
    return (
        <APresenter
        color={ color as 'foreground' | 'primary' }
        href={ fixedHref }
        ogp={ ogpData }
        >
            { fixedChildren }
        </APresenter>
    );
};

namespace AFC {
    export type Props = {
        children?: ReactNode;
        href: string;
    };
};

export {
    AFC
};
