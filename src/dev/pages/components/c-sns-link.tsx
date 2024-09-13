// CSNSLink
'use strict';
import React from 'react';

import {
    MaiInstagramLink,
    MaiPixivLink,
    MaiSNSLink,
    MaiTwitterLink
} from '@mai-ui/components';

import { Case, CPage } from '../../components';

import * as codes from './codes/sns-link';

const CSNSLink: React.FC<CSNSLink.Props> = (props) => {
    const {} = props;
    
    return (
        <CPage
            title="MaiSNSLink"
            description="SNS link button component.

It is implemented by MaiButton and MaiLink,
Option is similar to MaiButton."
            seeMore='/components/mai-button'>
                <Case
                preview={(
                    <>
                        <MaiSNSLink.Instagram
                        size='lg'/>

                        <MaiSNSLink.Pixiv
                        size='lg'/>

                        <MaiSNSLink.Twitter
                        size='lg'/>
                    </>
                )}
                previewDirection='row'
                code={ codes.usage }/>
                
                <Case
                title='Individual Import'
                preview={(
                    <>
                        <MaiInstagramLink
                        color='primary'
                        size='lg'/>

                        <MaiPixivLink
                        color='primary'
                        size='lg'/>

                        <MaiTwitterLink
                        color='primary'
                        size='lg'/>
                    </>
                )}
                previewDirection='row'
                code={ codes.individualImport }/>

                <Case
                title='With children'
                preview={(
                    <>
                        <MaiInstagramLink
                        color='secondary'
                        size='lg'>
                            Instagram
                        </MaiInstagramLink>

                        <MaiPixivLink
                        color='secondary'
                        size='lg'>
                            pixiv
                        </MaiPixivLink>

                        <MaiTwitterLink
                        color='secondary'
                        size='lg'>
                            Twitter
                        </MaiTwitterLink>
                    </>
                )}
                previewDirection='row'
                code={ codes.withChilren }/>

                <Case
                title='Twitter icon'
                preview={(
                    <>
                        <MaiTwitterLink color='success' size='lg' />
                        
                        <MaiTwitterLink color='success' size='lg' isX/>
                    </>
                )}
                previewDirection='row'
                code={ codes.twitterIcon }/>
            </CPage>
    );
};

namespace CSNSLink {
    export type Props = {};
};

export {
    CSNSLink
};
