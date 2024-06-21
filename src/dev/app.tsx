// App
'use strict';
import React from 'react';
import { Navbar, Tab, Tabs } from '@nextui-org/react';
import 'tailwindcss/tailwind.css';
import '@mai-ui/../fonts.css';

import type { MaiUI } from '@mai-ui/types/mai-ui';
import { MaiButton, MaiCodeBlock, MaiLink } from '@mai-ui/components';

import './global.scss';
import S from './style.module.scss';

import { codeBlockText1 } from './_code-block-text-1';
import { codeBlockText2 } from './_code-blocl-text-2';

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

                        <Tabs variant='underlined' aria-label='MaiButton Colors'>
                            <Tab key='preview' title='preview' className='flex gap-4'>
                                {maiButtonColors.map((c) => (
                                    <MaiButton color={ c } key={`mai-button-colors-${ c }`}>{ c }</MaiButton>
                                ))}  
                            </Tab>

                            <Tab key='code' title='code'>
                                
                            </Tab>
                        </Tabs>

                        <h3 className={ S.h3 }>Variants</h3>                         

                        <Tabs variant='underlined' aria-label='MaiButton Variants'>
                            <Tab key='preview' title='preview'  className='flex gap-4'>
                                {maiButtonVariants.map((v) => (
                                    <MaiButton color='primary' variant={ v } key={`mai-button-variants-${ v }`}>{ v }</MaiButton>
                                ))}
                            </Tab>
                            <Tab key='code' title='code'></Tab>
                        </Tabs>

                        <h3 className={ S.h3 }>Link Button</h3>

                        <Tabs variant='underlined' aria-label='MaiButton LinkButton'>
                            <Tab key='preview' title='preview'  className='flex gap-4'>
                                <MaiButton
                                as={ MaiLink }
                                color='primary'
                                href='https://www.google.com/'
                                variant='shadow'
                                >Google</MaiButton>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                    </section>

                    
                    <h2 className={ S.h2 }>MaiCodeBlock</h2>

                    <section>
                        <h3 className={ S.h3 }>Usage</h3>

                        <Tabs variant='underlined' aria-label='MaiCodeBlock Usage'>
                            <Tab key='preview' title='preview'>
                                <MaiCodeBlock language='html'>{ codeBlockText1 }</MaiCodeBlock>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>

                        <h3 className={ S.h3 }>with file name</h3>

                        <Tabs variant='underlined' aria-label='MaiCodeBlock with file name'>
                            <Tab key='preview' title='preview'>
                                <MaiCodeBlock filename='App.js' language='javascript'>{ codeBlockText2 }</MaiCodeBlock>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                    </section>

                    
                    <h2 className={ S.h2 }>MaiLink</h2>

                    <section>
                        <h3 className={ S.h3 }>Usage</h3>

                        <Tabs variant='underlined' aria-label='MaiLink Usage'>
                            <Tab key='preview' title='preview'  className='flex gap-4'>
                                <MaiLink href='/'>MaiLink</MaiLink>

                                <MaiLink href='http://localhost:3000'>localhost</MaiLink>

                                <MaiLink href='https://www.google.com/'>Google</MaiLink>

                                <MaiLink href='mailto://contact@localhost:3000'>Contact us</MaiLink>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                        
                        <h3 className={ S.h3 }>Colors</h3>

                        <Tabs variant='underlined' aria-label='MaiLink Colors'>
                            <Tab key='preview' title='preview'  className='flex gap-4'>
                                { maiLinkColors.map(c => (
                                    <MaiLink color={ c } key={`mai-link-colors-${ c }`} href='/'>{ c }</MaiLink>
                                ))}
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                    </section>
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
