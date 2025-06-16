'use strict';
/* eslint-disable react-refresh/only-export-components */
import React, { type HTMLAttributes } from 'react';
import { cn } from '@heroui/theme';
import { Code as HeroCode, type CodeProps as HeroCodeProps } from '@heroui/code';

import { trimNodeFromProps } from '../../internal';

const Code: React.FC<HTMLAttributes<HTMLElement>> = (props) => {
  const {
    className: userClassName,
    ...codeProps
  } = trimNodeFromProps<
    HTMLAttributes<HTMLElement> &
    Partial<{node: undefined, 'data-inline': string}>
  >(props);

  return codeProps['data-inline'] === 'true'?
    (<HeroCode className={cn('font-code', userClassName)} {...codeProps as HeroCodeProps}/>):
    (<>{codeProps.children}</>);
};

export {
  Code as code,
};
