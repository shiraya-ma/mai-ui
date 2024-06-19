// MaiButton
'use client';
import React from 'react';

import { MaiButtonPresenter, MaiButtonPresenterProps } from './mai-button-presenter';

export const MaiButton: React.FC<MyButtonProps> = (props) => {
    const { ...btnProps } = props;
    
    return (
        <MaiButtonPresenter
        { ...btnProps }
        />
    );
};

export type MyButtonProps = MaiButtonPresenterProps;
