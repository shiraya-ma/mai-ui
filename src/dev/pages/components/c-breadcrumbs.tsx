// CBreadcrumbs
'use strict';
import React from 'react';

import {
    MaiBreadcrumbItem,
    MaiBreadcrumbs
} from '@mai-ui/components';

import { Case, CPage } from '../../components';

import * as codes from './codes/breadcrumbs';

const CBreadcrumbs: React.FC<CBreadcrumbs.Props> = (props) => {
    const {} = props;
    
    return (
        <CPage
            title="MaiBreadcrumbs"
            description="A component that extends NextUI's Breadcrumbs.

Since home items are included by default, only items under home need to be added."
            seeMore='https://nextui.org/docs/components/breadcrumbs'>
                <Case
                preview={(
                    <>
                        <MaiBreadcrumbs>
                            <MaiBreadcrumbItem href='#'>Components</MaiBreadcrumbItem>
                            
                            <MaiBreadcrumbItem href='#'>MaiBreadcrumbs</MaiBreadcrumbItem>
                        </MaiBreadcrumbs>
                    </>
                )}
                previewDirection='row'
                code={ codes.usage }/>
            </CPage>
    );
};

namespace CBreadcrumbs {
    export type Props = {};
};

export {
    CBreadcrumbs
};
