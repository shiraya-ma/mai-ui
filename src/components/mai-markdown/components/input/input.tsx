// Input
'use strict';
import React, { type InputHTMLAttributes } from 'react';
import { Checkbox, Input as NextInput } from '@nextui-org/react';

const Input = (props: Input.Props) => {
    const { checked, type, value } = props;
    
    return type === 'checkbox'? (
        <Checkbox isSelected={ checked } onSelect={() => {}}/>
    ): (
        <NextInput value={ JSON.stringify(value) } />
    );
};

namespace Input {
    export type Props = InputHTMLAttributes<{}> & {};
};

export {
    Input
};
