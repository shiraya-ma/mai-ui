'use client';
import React from 'react';

import { usePreferThemeObserver } from './internal';

/** @internal */
const PreferThemeObserver: React.FC<PreferThemeObserver.Props> = (props) => {
  usePreferThemeObserver(props);
  
  return (
    <div
      className='absolute size-0 top-0 left-0 -z-10 hidden'
      data-testid='PreferThemeObserver'
    />
  );
};

PreferThemeObserver.displayName = 'PreferThemeObserver';

namespace PreferThemeObserver {
  export type Props = {
    disabledTheme?: boolean;
  };
};

export {
  PreferThemeObserver
};
