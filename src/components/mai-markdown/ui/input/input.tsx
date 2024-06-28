// Input
'use strict';
import React, { InputHTMLAttributes } from 'react';
import { Checkbox, Input as NextInput } from '@nextui-org/react';

const Input = (props: Input.Props) => {
    const { type, value } = props;
    
    return type === 'checkbox'? (
        <Checkbox isSelected={ props.checked } onSelect={() => {}}/>
    )
    : (
        <NextInput value={ value as any }/>
    );
};

namespace Input {
    export type Props = InputHTMLAttributes<{}> & {};
};

export {
    Input
};
