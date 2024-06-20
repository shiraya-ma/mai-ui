// MaiButtonPresenter
'use client';
import React, { ReactNode } from 'react';
import { Button, ButtonProps } from '@nextui-org/react';

import { MaiUI } from '../../types/mai-ui';


export const MaiButtonPresenter: React.FC<MaiButtonPresenterProps> = (props) => {
    const {} = props;
    
    return (
        <Button
        { ...props }
        />
    );
};

export type MaiButtonPresenterProps = ButtonProps & {
    children?: ReactNode;

    color?: MaiUI.ButtonColor;

    variant?: MaiUI.ButtonVariant;
};
