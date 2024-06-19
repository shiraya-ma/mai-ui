// MaiButton
'use client';
import React from 'react';
import { Button, ButtonProps } from '@nextui-org/react';

const MaiButton: React.FC<MaiButton.Props> = (props) => {
    const { ...btnProps } = props;
    
    return (
        <Button
        { ...btnProps }
        />
    );
};

namespace MaiButton {
    export type Props = {
        color?: MaiUI.Color;

        variant?: MaiUI.ButtonVariant;
    } & ButtonProps;
};

export {
    MaiButton
};
