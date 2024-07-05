// MaiButtonPresenter
'use client';
import React, { ReactNode } from 'react';
import { Button, ButtonProps } from '@nextui-org/react';

import { MaiUI } from '../../types/mai-ui';


const MaiButtonPresenter: React.FC<MaiButtonPresenter.Props> = (props) => {
    const { color, variant, ...btnProps } = props;
    
    return (
        <Button
        { ...btnProps }
        color={ color ?? 'primary' }
        variant={ variant ?? 'shadow' }
        />
    );
};

namespace MaiButtonPresenter {
    export type Props = ButtonProps & {
        children?: ReactNode;
    
        color?: MaiUI.ButtonColor;
    
        variant?: MaiUI.ButtonVariant;
    };    
};

export {
    MaiButtonPresenter
}