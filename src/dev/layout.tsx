// Layout
'use strict';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Navbar,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react';

import { MaiLink, MaiUIProvider } from '..';

import {
    ThemeSwitcher
} from './components';

const Layout: React.FC<Layout.Props> = (props) => {
    const { children } = props;

    const navigate = useNavigate();
    
    return (
        <MaiUIProvider navigate={ navigate }>
            <Navbar
            className='bg-transparent backdrop-saturate-100
            [&>header]:w-screen [&>header]:max-w-[100ch]' 
            isBordered>
                <NavbarContent>
                    <NavbarItem className='flex gap-4 grow'>
                        <MaiLink href='/'>HOME</MaiLink>
                        
                        <MaiLink href='/components'>COMPONENTS</MaiLink>
                        
                        <MaiLink href='/temp'>TEMP</MaiLink>
                    </NavbarItem>
                    
                    <NavbarItem>
                        <ThemeSwitcher />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            <main className='flex flex-col mx-auto w-full max-w-[100ch]'>
                { children }
            </main>
        </MaiUIProvider>
    );
};

namespace Layout {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    Layout
};
