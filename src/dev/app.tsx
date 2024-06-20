// App
'use strict';
import React from 'react';
import 'tailwindcss/tailwind.css';
import '@mai-ui/../fonts.css';

import type { MaiUI } from '@mai-ui/types/mai-ui';
import { MaiButton, MaiLink } from '@mai-ui/components';

import './global.scss';
import S from './style.module.scss';
import { Navbar } from '@nextui-org/react';

const App: React.FC<App.Props> = (props) => {
    const {} = props;

    const maiButtonColors: MaiUI.ButtonColor[] = [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger'
    ];

    const maiButtonVariants: MaiUI.ButtonVariant[] = [
        'solid',
        'faded',
        'bordered',
        'light',
        'flat',
        'ghost',
        'shadow'
    ];

    const maiLinkColors: MaiUI.LinkColor[] = [
        'foreground',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger'
    ];
    
    return (
        <>
            <Navbar className='backdrop-saturate-100 dark:bg-transparent' isBordered shouldHideOnScroll>

            </Navbar>

            <main className={ S.container }>
                <h1 className={ S.h1 }>Mai UI</h1>

                <section>
                    <h2 className={ S.h2 }>MaiButton</h2>

                    <section>
                        <h3 className={ S.h3 }>Colors</h3>

                        <section className='!flex-row gap-4'>
                            {maiButtonColors.map((c) => (
                                <MaiButton color={ c } key={`mai-button-colors-${ c }`}>{ c }</MaiButton>
                            ))}                 
                        </section>

                        <h3 className={ S.h3 }>Variants</h3>

                        <section className='!flex-row gap-4'>
                            {maiButtonVariants.map((v) => (
                                <MaiButton color='primary' variant={ v } key={`mai-button-variants-${ v }`}>{ v }</MaiButton>
                            ))}
                        </section>

                        <h3 className={ S.h3 }>Link Button</h3>

                        <section className='!flex-row gap-4'>
                            <MaiButton
                            as={ MaiLink }
                            color='primary'
                            href='https://www.google.com/'
                            variant='shadow'
                            >Google</MaiButton>
                        </section>
                    </section>

                    
                    <h2 className={ S.h2 }>MaiLink</h2>

                    <section>
                        <h3 className={ S.h3 }>Usage</h3>

                        <section className='!flex-row'>
                            <MaiLink href='/'>MaiLink</MaiLink>

                            <MaiLink href='http://localhost:3000'>localhost</MaiLink>

                            <MaiLink href='https://www.google.com/'>Google</MaiLink>

                            <MaiLink href='mailto://contact@localhost:3000'>Contact us</MaiLink>
                        </section>
                        
                        <h3 className={ S.h3 }>Colors</h3>

                        <section className='!flex-row'>
                            { maiLinkColors.map(c => (
                                <MaiLink color={ c } key={`mai-link-colors-${ c }`} href='/'>{ c }</MaiLink>
                            ))}
                        </section>
                    </section>

                    <code className='font-code'>
                        <pre>
{`<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>sample</title>
    </head>
    <body>
        <h1>sample</h1>

        <p>hello world!</p>
    </body>
</html>
`}                            
                        </pre>
                    </code>
                </section>
            </main>
        </>
    );
};

namespace App {
    export type Props = {};
};

export {
    App
};
