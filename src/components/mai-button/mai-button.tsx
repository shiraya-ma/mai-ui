// MaiButton
'use client';
import React from 'react';

import { MaiButtonPresenter } from './mai-button-presenter';

const MaiButton: React.FC<MaiButton.Props> = (props) => {
    const { ...btnProps } = props;
    
    return (
        <MaiButtonPresenter
        { ...btnProps }
        />
    );
};

namespace MaiButton {
    export type Props = MaiButtonPresenter.Props & {};
};

export {
    MaiButton
};
