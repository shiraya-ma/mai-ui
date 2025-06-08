'use client';
import React from "react";

import { MaiCodeBlockStyleContext, MaiCodeBlockStyleProviderProps } from "./_internal";

const MaiCodeBlockStyleProvider: React.FC<MaiCodeBlockStyleProvider.Props> = (props) => {
  const {
    children,
    style,
  } = props;

  return (
    <MaiCodeBlockStyleContext.Provider
      children={children} 
      value={style}
    />
  );
};
MaiCodeBlockStyleProvider.displayName = "MaiCodeBlockStyleProvider";

namespace MaiCodeBlockStyleProvider {
  export type Props = MaiCodeBlockStyleProviderProps;
};

export {
  MaiCodeBlockStyleProvider,
};
