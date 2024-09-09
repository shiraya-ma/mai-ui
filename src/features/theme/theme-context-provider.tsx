// ThemeContextProvider
'use strict';
import React, { ReactNode, useEffect } from 'react';

import { ThemeContext, ThemeUpdaterContext } from './theme-context';
import { useThemeContext } from './use-theme-context';

const ThemeContextProvider: React.FC<ThemeContextProvider.Props> = (props) => {
    const { children } = props;

    const { theme, updateTheme } = useThemeContext();

    return (
        <ThemeContext.Provider value={ theme }>
            <ThemeUpdaterContext.Provider value={ updateTheme }>
                { children }
            </ThemeUpdaterContext.Provider>
        </ThemeContext.Provider>
    );
};

namespace ThemeContextProvider {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    ThemeContextProvider
};
