'use strict';
/* eslint-disable react-refresh/only-export-components */
import React, { type OlHTMLAttributes } from 'react';
import { cn } from '@heroui/theme';

import { trimNodeFromProps } from '../../internal';

const Ul: React.FC<OlHTMLAttributes<{}>> = (props) => {
  const {
    ...listProps
  } = trimNodeFromProps(props);

  return (
    <ul
      className={cn(
        'pl-4 list-inside list-disc',
        '[&_ul]:list-[circle]',
        '[&_ul_ul]:list-[square]',
      )}
      {...listProps}
    />
  );
};

export {
  Ul as ul,
};
