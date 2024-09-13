// ThemeSwitcher
'use strict';
import React from 'react';
import { Button } from '@nextui-org/react';

import { isPreferThemedark, useTheme } from '../../features/theme';

const ThemeSwitcher: React.FC<ThemeSwitcher.Props> = (props) => {
    const {} = props;

    const { theme, updateTheme } = useTheme();

    const nextDark = !theme.isDark;
    // const nextDark = true;

    const handlePress = (e: any) => {
        const shiftKey = e.shiftKey as boolean;
        
        if (shiftKey) {
            console.debug('swith to system.');

            updateTheme({
                isDark: isPreferThemedark(),
                isSystem: true
            });
        }

        else if (!shiftKey) {
            console.debug('swith to', nextDark? 'dark': 'light');

            updateTheme({
                isDark: nextDark,
                isSystem: false
            });
        }
    };
    
    return (
        <Button
        onPress={ handlePress }>to { nextDark? 'dark': 'light' }</Button>
    );
};

namespace ThemeSwitcher {
    export type Props = {};
};

export {
    ThemeSwitcher
};
