// PreferThemeObserver
'use strict';
import React from 'react';

import { usePreferThemeObserver } from './use-prefer-theme-observer'

const PreferThemeObserver: React.FC<PreferThemeObserver.Props> = (props) => {
    const {} = props;

    const { refPreferThemeObserver } = usePreferThemeObserver();
    
    return (
        <div
            className='fixed top-0 left-0 -z-10 hidden'
            id='preferThemeObserver'
            ref={ refPreferThemeObserver }>
                <style>
                    {`@media (prefers-color-scheme: dark) {
  div#preferThemeObserver {
    display: block
  }
}`}
                </style>
            </div>
    );
};

namespace PreferThemeObserver {
    export type Props = {};
};

export {
    PreferThemeObserver
};
