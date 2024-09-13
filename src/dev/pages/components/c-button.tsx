// CButton
'use strict';
import React from 'react';

import {
    MaiButton,
    MaiLink
} from '@mai-ui/components';

import { Case, CPage } from '../../components';

import * as codes from './codes/button';

const CButton: React.FC<CButton.Props> = (props) => {
    const {} = props;
    
    return (
        <CPage
            title="MaiButton"
            description="A component that extends NextUI's Button.

Initial values of some parameters have been changed."
            seeMore='https://nextui.org/docs/components/button'>
                <Case
                preview={(
                    <>
                        <MaiButton>Button</MaiButton>
                    </>
                )}
                previewDirection='row'
                code={ codes.usage }/>

                <Case
                title='Colors'
                preview={(
                    <>
                        <MaiButton color='default'>Default</MaiButton>
                        
                        <MaiButton color='primary'>Primary</MaiButton>

                        <MaiButton color='secondary'>Secondary</MaiButton>
                        
                        <MaiButton color='success'>Success</MaiButton>
                        
                        <MaiButton color='warning'>Warn</MaiButton>

                        <MaiButton color='danger'>Danger</MaiButton>
                    </>
                )}
                previewDirection='row'
                code={ codes.colors }/>

                <Case
                title='Button as Link'
                preview={(
                    <>
                        <MaiButton
                        href='#'
                        as={ MaiLink }>Home</MaiButton>
                        
                        <MaiButton
                        href='https://www.google.com'
                        as={ MaiLink }>Google</MaiButton>
                    </>
                )}
                previewDirection='row'
                code={ codes.buttonAsLink }/>
            </CPage>
    );
};

namespace CButton {
    export type Props = {};
};

export {
    CButton
};
