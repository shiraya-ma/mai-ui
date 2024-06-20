// MaiUiProvider
'use strict';
import React, { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';

import { ThemeContext } from '../../libs/theme';

import { useThemeContext } from './hooks';
import { PrefereThemeOvserver } from './prefere-theme-ovserver';

const MaiUiProvider: React.FC<MaiUiProvider.Props> = (props) => {
    const { children } = props;

    const { context } = useThemeContext();
    
    return (
        <ThemeContext.Provider value={ context }>
            <NextUIProvider>
                { children }

                <PrefereThemeOvserver />
            </NextUIProvider>
        </ThemeContext.Provider>
    );
};

namespace MaiUiProvider {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    MaiUiProvider
};
