// MaiCodeBlock
'use strict';
import React from 'react';

import { MaiCodeBlockPresenter } from './mai-code-block-presenter';

export const MaiCodeBlock: React.FC<MaiCodeBlockProps> = (props) => {
    const {
        children
    } = props;
    
    return (
        <MaiCodeBlockPresenter
        children={ children }
        />
    );
};

export type MaiCodeBlockProps = {
    children: string;
};