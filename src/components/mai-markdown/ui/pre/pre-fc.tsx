// PreFC
'use strict';
import React, { ReactNode } from 'react';
import { useProps } from './hooks';
import { PrePresenter } from './pre-presenter';

const PreFC: React.FC<PreFC.Props> = (props) => {
    const { children } = props;

    const { filename, fixedChildren, language } = useProps(children);
    
    return (
        <PrePresenter
        filename={ filename }
        language={ language }
        >
            { fixedChildren }
        </PrePresenter>
    );
};

namespace PreFC {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    PreFC
};
