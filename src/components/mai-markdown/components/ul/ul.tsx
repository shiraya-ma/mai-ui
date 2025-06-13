'use strict';
/* eslint-disable react-refresh/only-export-components */
import React, { type OlHTMLAttributes } from 'react';
import { cn } from '@heroui/theme';

const Ul: React.FC<OlHTMLAttributes<{}>> = (props) => {
  const {
    node: _, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...listProps
  } = props as OlHTMLAttributes<{}> & {node?: undefined};

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
