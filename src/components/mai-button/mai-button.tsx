// MaiButton
'use strict';
import React from 'react';
import { Button, ButtonProps } from '@nextui-org/react';

import { MaiUI } from '../../types/mai-ui';

export const MaiButton: React.FC<MyButtonProps> = (props) => {
    const { ...btnProps } = props;
    
    return (
        <Button
        { ...btnProps }
        />
    );
};

export type MyButtonProps = /** ButtonProps & */ {
    children?: React.ReactNode;

    color?: MaiUI.Color;

    variant?: MaiUI.ButtonVariant;
};
