// CMarkdown
'use strict';
import React from 'react';

import {
    MaiMarkdown
} from '@mai-ui/components';

import { Case, CPage } from '../../components';

import { markdownText } from './texts';

import * as codes from './codes/code-block';

const CMarkdown: React.FC<CMarkdown.Props> = (props) => {
    const {} = props;
    
    return (
        <CPage
        title="MaiMakrdown"
        description="hogehoge">
            <Case
            preview={(
                <>
                    <MaiMarkdown>
                        { markdownText }
                    </MaiMarkdown>
                </>
            )}
            code={ codes.usage }/>
        </CPage>
    );
};

namespace CMarkdown {
    export type Props = {};
};

export {
    CMarkdown
};
