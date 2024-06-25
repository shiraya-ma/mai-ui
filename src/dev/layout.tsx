// Layout
'use strict';
import React, { ReactNode } from 'react';
import {
    Navbar,
    NavbarContent,
    NavbarItem
} from '@nextui-org/react';
import { MaiLink } from '..';

// import {} from './style';
// import * as S from './style';

const Layout: React.FC<Layout.Props> = (props) => {
    const { children } = props;
    
    return (
        <>
            <Navbar className='backdrop-saturate-100 dark:bg-transparent' isBordered shouldHideOnScroll>
                <NavbarContent className="sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <MaiLink href='/'>HOME</MaiLink>
                    </NavbarItem>
                    
                    <NavbarItem>
                        <MaiLink href='/temp'>TEMP</MaiLink>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            { children }
        </>
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
