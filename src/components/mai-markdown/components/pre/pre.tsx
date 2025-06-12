'use strict';
/* eslint-disable react-refresh/only-export-components */
import React, { type HTMLAttributes } from 'react';

import { MaiCodeBlock } from '@/components';
import { reactNodeToString } from '@/libs';

const Pre: React.FC<HTMLAttributes<HTMLPreElement>> = (props) => {
  const preProps = props as HTMLAttributes<HTMLPreElement> & Partial<{
    'data-filename': string;
    'data-language': string;
  }>;

  const children = preProps.children;
  const filename = preProps['data-filename'];
  const language = preProps['data-language'];

  return (
    <MaiCodeBlock
      children={reactNodeToString(children)}
      filename={filename}
      language={language}
    />
  );
};

export {
  Pre as pre,
};
