// CLink
'use strict';
import React from 'react';

import {
    MaiLink
} from '@mai-ui/components';

import { Case, CPage } from '../../components';

import * as codes from './codes/link';

const CLink: React.FC<CLink.Props> = (props) => {
    const {} = props;
    
    return (
         <CPage
        title="MaiLink"
        description="A component that extends NextUI's Link.

It adds behavior when external links are clicked,
display a confirmation modal before opening the page."
        seeMore='https://nextui.org/docs/components/link'>
            <Case
            preview={(
                <>
                    <MaiLink href='#'>Default Link</MaiLink>
                </>
            )}
            previewDirection='row'
            code={ codes.usage }/>

            <Case
            title='Colors'
            preview={(
                <>
                    <MaiLink href='#' color='foreground'>Foreground</MaiLink>
                    
                    <MaiLink href='#' color='primary'>Primary</MaiLink>

                    <MaiLink href='#' color='secondary'>Secondary</MaiLink>
                    
                    <MaiLink href='#' color='success'>Success</MaiLink>
                    
                    <MaiLink href='#' color='warning'>Warn</MaiLink>

                    <MaiLink href='#' color='danger'>Danger</MaiLink>
                </>
            )}
            previewDirection='row'
            code={ codes.colors }/>

            <Case
            title='External Link'
            preview={(
                <>
                    <MaiLink href='https://www.google.com'>Google</MaiLink>
                </>
            )}
            previewDirection='row'
            code={ codes.externalLink }/>
        </CPage>
    );
};

namespace CLink {
    export type Props = {};
};

export {
    CLink
};
