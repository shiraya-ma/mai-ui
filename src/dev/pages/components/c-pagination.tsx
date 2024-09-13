// CPagination
'use strict';
import React from 'react';

import {
    MaiPagination
} from '@mai-ui/components';

import { Case, CPage } from '../../components';

import * as codes from './codes/pagination';

const CPagination: React.FC<CPagination.Props> = (props) => {
    const {} = props;
    
    return (
        <CPage
            title="MaiPagination"
            description="A component that extends NextUI's Pagination.

The default background color is changed."
            seeMore='https://nextui.org/docs/components/pagination'>
                <Case
                preview={(
                    <>
                        <MaiPagination total={10} initialPage={1} />
                    </>
                )}
                previewDirection='row'
                code={ codes.usage }/>
            </CPage>
    );
};

namespace CPagination {
    export type Props = {};
};

export {
    CPagination
};
