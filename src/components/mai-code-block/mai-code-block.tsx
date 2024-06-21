// MaiCodeBlock
'use strict';
import React from 'react';

import { MaiCodeBlockPresenter } from './mai-code-block-presenter';

export const MaiCodeBlock: React.FC<MaiCodeBlockProps> = (props) => {
    const {
        children,
        filename,
        language
    } = props;
    
    return (
        <MaiCodeBlockPresenter
        children={ children }
        filename={ filename }
        language={ language }
        />
    );
};

export type MaiCodeBlockProps = {
    children?: string;
    filename?: string;
    language?: string;
};