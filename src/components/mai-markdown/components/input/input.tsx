'use strict';
/* eslint-disable react-refresh/only-export-components */
import React, { type InputHTMLAttributes } from 'react';
import { Checkbox as HeroCheckbox } from '@heroui/checkbox';
import { Input as HeroInput } from '@heroui/input';

/** @internal */
const Input: React.FC<InputHTMLAttributes<{}>> = (props) => {
  const {
    checked,
    type,
    value,
    'data-label': dataLabel,
    'data-testid': dataTestID,
  } = props as InputHTMLAttributes<{}> & {[key: string]: string | undefined};
  
  return type === 'checkbox'? (
    <HeroCheckbox isSelected={checked || false} onSelect={() => undefined} lineThrough data-testid={dataTestID}>
      {dataLabel}
    </HeroCheckbox>
  ): (
    <HeroInput value={JSON.stringify(value)} label={dataLabel} data-testid={dataTestID}/>
  );
};

export {
  Input as input,
};
