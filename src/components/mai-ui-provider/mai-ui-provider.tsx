// MaiUIProvider
'use client';
import React, { PropsWithChildren } from 'react';
import { NextUIProvider, NextUIProviderProps } from '@nextui-org/react';

import { ThemeContext } from '../../libs/theme';

import { useThemeContext } from './hooks';
import { PrefereThemeOvserver } from './prefere-theme-ovserver';

/**
 * MaiUIでテーマなどのコンテキストを提供するプロバイダーコンポーネント
 * 
 * ReactRouterDOMやNext.jsなどでルーティングの最適化を行う場合、  
 * propsにナビゲーション関数を渡す。  
 * (MaiLinkクリック時に呼び出される)
 * 
 * @example
 * import React, { PropsWithChildren }  from 'react';
 * import { useNavigate } from 'react-router-dom';
 * import { MaiUIProvider } from '@shiraya-ma/mai-ui';
 * 
 * export const App: React.FC<PropsWithChildren> = (props) => {
 *      const { children } = props;
 * 
 *      const navigate = useNavigate();
 * 
 *      return (
 *          <MaiUIProvider navigate={ navigate }>
 *              { children }
 *          </MaiUIProvider>
 *      );
 * };
 * 
 * @param props 
 * @returns 
 */
const MaiUIProvider: React.FC<MaiUIProvider.Props> = (props) => {
    const { children, ...nextUIProviderProps } = props;

    const { context } = useThemeContext();
    
    return (
        <ThemeContext.Provider value={ context }>
            <NextUIProvider
            { ...nextUIProviderProps }
            >
                { children }

                <PrefereThemeOvserver />
            </NextUIProvider>
        </ThemeContext.Provider>
    );
};

namespace MaiUIProvider {
    export type Props = NextUIProviderProps & {}
};

export {
    MaiUIProvider
};
