// CPage
'use strict';
import React, { ReactNode } from 'react';

import { Page } from './page';

const CPage: React.FC<CPage.Props> = (props) => {
    const { ...pageProps } = props;
    
    return (
        <Page
        breadcrumbItems={[
            { href: '/components', children:'Components' },
            { children: pageProps.title }
        ]}
        { ...pageProps }/>
    );
};

namespace CPage {
    export type Props = {
        title: string;
        description?: string;
        seeMore?: string;
        children?: ReactNode;
    };
};

export {
    CPage
};
