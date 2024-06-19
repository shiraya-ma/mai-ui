// MaiButton
'use strict';
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
    export type Props = /** ButtonProps & */ {
        children?: React.ReactNode;

        color?: MaiUI.Color;

        variant?: MaiUI.ButtonVariant;
    };
};

export {
    MaiButton
};
