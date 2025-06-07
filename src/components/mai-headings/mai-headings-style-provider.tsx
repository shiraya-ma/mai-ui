'use client';
import React, { PropsWithChildren } from 'react';

import { MaiHeadingsStyleContext, useMaiHeadingsStyleContext, type MaiHeadingsStyleContextProps } from './_internal';

const MaiHeadingsStyleProvider: React.FC<MaiHeadingsStyleProvider.Props> = (props) => {
  const {
    children,
    context,
  } = useMaiHeadingsStyleContext(props);

  return (
    <MaiHeadingsStyleContext.Provider value={context || {}}>
      {children}
    </MaiHeadingsStyleContext.Provider>
  );
};
MaiHeadingsStyleProvider.displayName = 'MaiHeadingsStyleProvider';

namespace MaiHeadingsStyleProvider {
  export type Props = PropsWithChildren<{
    context?: MaiHeadingsStyleContextProps;
  }>;
};

export {
  MaiHeadingsStyleProvider,
};
