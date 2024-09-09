// MaiUIProvider
'use client';
import React from 'react';
import { NextUIProvider, NextUIProviderProps } from '@nextui-org/react';

import { NavigateContext, ThemeContext } from '../../libs';
import { ExternalLinkModal, ExternalLinkProvider } from '../../features/external-link';

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
    const { children, navigate, ...nextUIProviderProps } = props;

    const { context } = useThemeContext();
    
    return (
        <ThemeContext.Provider value={ context }>
            <ExternalLinkProvider>
                <NavigateContext.Provider value={{ navigate }}>
                    <NextUIProvider
                    { ...nextUIProviderProps }>
                        { children }

                        <ExternalLinkModal />

                        <PrefereThemeOvserver />
                    </NextUIProvider>
                </NavigateContext.Provider>
            </ExternalLinkProvider>
        </ThemeContext.Provider>
    );
};

namespace MaiUIProvider {
    export type Props = NextUIProviderProps & {}
};

export {
    MaiUIProvider
};
