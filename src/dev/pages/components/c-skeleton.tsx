// CSkeleton
'use strict';
import React from 'react';

import {
    MaiCard,
    MaiSkeleton
} from '@mai-ui/components';

import { Case, CPage } from '../../components';

import * as codes from './codes/skeleton';

const CSkeleton: React.FC<CSkeleton.Props> = (props) => {
    const {} = props;
    
    return (
        <CPage
            title="MaiSkeleton"
            description="A component that extends NextUI's Skeleton.

The default background color is changed."
            seeMore='https://nextui.org/docs/components/skeleton'>
                <Case
                preview={(
                    <>
                        <MaiCard className="w-[200px] space-y-5 p-4" radius="lg">
                            <MaiSkeleton className="rounded-lg">
                                <div className="h-24 rounded-lg bg-default-300"></div>
                            </MaiSkeleton>

                            <div className="space-y-3">
                                <MaiSkeleton className="w-3/5 rounded-lg">
                                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                                </MaiSkeleton>

                                <MaiSkeleton className="w-4/5 rounded-lg">
                                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                                </MaiSkeleton>

                                <MaiSkeleton className="w-2/5 rounded-lg">  
                                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                                </MaiSkeleton>
                            </div>
                        </MaiCard>
                    </>
                )}
                previewDirection='row'
                code={ codes.usage }/>
            </CPage>
    );
};

namespace CSkeleton {
    export type Props = {};
};

export {
    CSkeleton
};
