// NotFound
'use strict';
import React from 'react';
import { Page } from '../components';

import { MaiLink } from '@mai-ui/components';

const NotFound: React.FC<NotFound.Props> = (props) => {
    const {} = props;
    
    return (
        <Page
        title='404 not found.'>
            <MaiLink href='/'>Retrun to top.</MaiLink>
        </Page>
    );
};

namespace NotFound {
    export type Props = {};
};

export {
    NotFound
};
