// PrePresenter
'use strict';
import React, { ReactNode } from 'react';

import { MaiCodeBlock } from './../../../';

const PrePresenter: React.FC<PrePresenter.Props> = (props) => {
    const { children, filename, language } = props;
    
    return (
        <MaiCodeBlock filename={ filename } language={ language }>
            { children }
        </MaiCodeBlock>
    );
};

namespace PrePresenter {
    export type Props = {
        children: string;
        filename?: string;
        language?: string;
    };
};

export {
    PrePresenter
};
