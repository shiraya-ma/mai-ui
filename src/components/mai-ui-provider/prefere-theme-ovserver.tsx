// PrefereThemeOvserver
'use strict';
import React from 'react';

import { useObservePreferTheme } from './hooks';

const PrefereThemeOvserver: React.FC<PrefereThemeOvserver.Props> = (props) => {
    const {} = props;

    const { refObserver } = useObservePreferTheme();
    
    return (
        <div
        className='fixed top-0 left-0 w-0 h-0 hidden dark:block'
        ref={ refObserver }
        />
    );
};

namespace PrefereThemeOvserver {
    export type Props = {};
};

export {
    PrefereThemeOvserver
};
