// MaiUIProvider
'use client';
import React from 'react';
// import { NextUIProvider, type NextUIProviderProps } from '@nextui-org/react';

// import { ContentSecurityPolicyProvider } from '../../features/csp';
// import { ExternalLinkModal, ExternalLinkProvider } from '../../features/external-link';
// import { PreferThemeObserver, ThemeContextProvider } from '../../features/theme';
// import { NavigateContextProvider } from '../../features/navigate';

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
    const {} = props;
    // const { children, navigate, ...nextUIProviderProps } = props;
    
    // return (
    //     <ContentSecurityPolicyProvider>
    //         <ThemeContextProvider>
    //             <ExternalLinkProvider>
    //                 <NavigateContextProvider navigate={ navigate }>
    //                     <NextUIProvider
    //                     navigate={ navigate }
    //                     { ...nextUIProviderProps }>
    //                         { children }

    //                         <ExternalLinkModal />

    //                         <PreferThemeObserver />
    //                     </NextUIProvider>
    //                 </NavigateContextProvider>
    //             </ExternalLinkProvider>
    //         </ThemeContextProvider>
    //     </ContentSecurityPolicyProvider>
    // );
    return <>{props.children}</>
};

namespace MaiUIProvider {
    export type Props = {
        children: React.ReactNode;
    }
    // export type Props = NextUIProviderProps & {}
};

export {
    MaiUIProvider
};
