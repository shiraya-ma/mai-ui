'use strict';
/* eslint-disable react-refresh/only-export-components */
import React, { type OlHTMLAttributes } from 'react';
import { cn } from '@heroui/theme';

import { trimNodeFromProps } from '../../internal';

/** @internal */  
const Ol: React.FC<OlHTMLAttributes<{}>> = (props) => {
  const {
    ...listProps
  } = trimNodeFromProps(props);
  
  return (
    <ol
      className={cn(
        'pl-4 list-inside list-decimal',
        '[&_ol]:list-[upper-roman]',
        '[&_ol_ol]:list-[lower-roman]',
        '[&_ol_ol_ol]:list-[upper-alpha]',
        '[&_ol_ol_ol_ol]:list-[lower-alpha]',
      )}
      {...listProps}
    />
  );
};

export {
  Ol as ol,
};
