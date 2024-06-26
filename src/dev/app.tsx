// App
'use strict';
import React from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import { Twitter } from 'react-bootstrap-icons';
import 'tailwindcss/tailwind.css';
import '@mai-ui/../fonts.css';
import SyntaxHighlighterStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';

import type { MaiUI } from '@mai-ui/types/mai-ui';
import {
    MaiButton,
    MaiCodeBlock,
    MaiH1,
    MaiH2,
    MaiH3,
    MaiH4,
    MaiH5,
    MaiH6,
    MaiHeadings,
    MaiLink,
    MaiSNSLink
} from '@mai-ui/components';

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
            <main className={ S.container }>
                <MaiH1>Mai UI</MaiH1>

                <section>
                    <MaiH2>MaiButton</MaiH2>

                    <section>
                        <MaiH3>MaiButton Colors</MaiH3>

                        <div>
                            <Tabs variant='underlined' aria-label='MaiButton Colors'>
                                <Tab key='preview' title='preview' className='flex gap-4'>
                                    {maiButtonColors.map((c) => (
                                        <MaiButton color={ c } key={`mai-button-colors-${ c }`}>{ c }</MaiButton>
                                    ))}  
                                </Tab>

                                <Tab key='code' title='code'>
                                    
                                </Tab>
                            </Tabs>
                        </div>

                        <MaiH3>MaiButton Variants</MaiH3>                       

                        <div>
                            <Tabs variant='underlined' aria-label='MaiButton Variants'>
                                <Tab key='preview' title='preview'  className='flex gap-4'>
                                    {maiButtonVariants.map((v) => (
                                        <MaiButton color='primary' variant={ v } key={`mai-button-variants-${ v }`}>{ v }</MaiButton>
                                    ))}
                                </Tab>
                                <Tab key='code' title='code'></Tab>
                            </Tabs>
                        </div>

                        <MaiH3>MaiButton as Link</MaiH3>  

                        <div>
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
                        </div>
                    </section>
                    
                    <MaiH2>MaiCodeBlock</MaiH2>

                    <section>
                        <MaiH3>MaiCodeBlock Usage</MaiH3>

                        <div>
                            <Tabs variant='underlined' aria-label='MaiCodeBlock Usage'>
                                <Tab key='preview' title='preview'>
                                    <MaiCodeBlock language='html' style={SyntaxHighlighterStyle}>{ codeBlockText1 }</MaiCodeBlock>
                                </Tab>

                                <Tab key='code' title='code'></Tab>
                            </Tabs>
                        </div>

                        <MaiH3>MaiCodeBlock with file name</MaiH3>

                        <div>
                            <Tabs variant='underlined' aria-label='MaiCodeBlock with file name'>
                                <Tab key='preview' title='preview'>
                                    <MaiCodeBlock filename='App.js' language='javascript'>{ codeBlockText2 }</MaiCodeBlock>
                                </Tab>

                                <Tab key='code' title='code'></Tab>
                            </Tabs>
                        </div>
                    </section>

                    <MaiH2>MaiHeadings</MaiH2>

                    <section>
                        <MaiH3>MaiHeadings Usage</MaiH3>

                        <div>
                            <Tabs variant='underlined' aria-label='MaiHeadings Usage'>
                                <Tab key='preview' title='preview'>
                                    <MaiHeadings id='_' level={ 1 }>Header 1</MaiHeadings><br/>
                                    <MaiHeadings id='_' level={ 2 }>Header 2</MaiHeadings><br/>
                                    <MaiHeadings id='_' level={ 3 }>Header 3</MaiHeadings><br/>
                                    <MaiHeadings id='_' level={ 4 }>Header 4</MaiHeadings><br/>
                                    <MaiHeadings id='_' level={ 5 }>Header 5</MaiHeadings><br/>
                                    <MaiHeadings id='_' level={ 6 }>Header 6</MaiHeadings>
                                </Tab>

                                <Tab key='code' title='code'></Tab>
                            </Tabs>
                        </div>
                        
                        <MaiH3>MaiHeadings for individual import</MaiH3>

                        <div>
                            <Tabs variant='underlined' aria-label='MaiHeadings for individual import'>
                                <Tab key='preview' title='preview'>
                                    <MaiH1 id='_'>Header 1</MaiH1><br/>
                                    <MaiH2 id='_'>Header 2</MaiH2><br/>
                                    <MaiH3 id='_'>Header 3</MaiH3><br/>
                                    <MaiH4 id='_'>Header 4</MaiH4><br/>
                                    <MaiH5 id='_'>Header 5</MaiH5><br/>
                                    <MaiH6 id='_'>Header 6</MaiH6>
                                </Tab>

                                <Tab key='code' title='code'></Tab>
                            </Tabs>
                        </div>
                        
                        <MaiH3>MaiHeadings with icon</MaiH3>

                        <div>
                            <Tabs variant='underlined' aria-label='MaiHeadings with icon'>
                                <Tab key='preview' title='preview'>
                                    <MaiH3 startContent={ <Twitter/> }>Twitter</MaiH3><br/>
                                </Tab>

                                <Tab key='code' title='code'></Tab>
                            </Tabs>
                        </div>
                    </section>
                    
                    <MaiH2>MaiLink</MaiH2>

                    <section>
                        <MaiH3>MaiLink Usage</MaiH3>

                        <div>
                            <Tabs variant='underlined' aria-label='MaiLink Usage'>
                                <Tab key='preview' title='preview'  className='flex gap-4'>
                                    <MaiLink href='/'>MaiLink</MaiLink>

                                    <MaiLink href='http://localhost:3000'>localhost</MaiLink>

                                    <MaiLink href='https://www.google.com/'>Google</MaiLink>

                                    <MaiLink href='mailto://contact@localhost:3000'>Contact us</MaiLink>
                                </Tab>

                                <Tab key='code' title='code'></Tab>
                            </Tabs>
                        </div>
                        
                        <MaiH3>MaiLink Colors</MaiH3>
                            
                        <div>
                            <Tabs variant='underlined' aria-label='MaiLink Colors'>
                                <Tab key='preview' title='preview'  className='flex gap-4'>
                                    { maiLinkColors.map(c => (
                                        <MaiLink color={ c } key={`mai-link-colors-${ c }`} href='/'>{ c }</MaiLink>
                                    ))}
                                </Tab>

                                <Tab key='code' title='code'></Tab>
                            </Tabs>
                        </div>
                    </section>

                    <MaiH2>MaiSNSLink</MaiH2>

                    <section>
                        <MaiH3>MaiSNSLink Usage</MaiH3>

                        <div>
                        <Tabs variant='underlined' aria-label='MaiSNSLink Usage'>
                            <Tab key='preview' title='preview'  className='flex gap-4'>
                                <MaiSNSLink.Twitter />

                                <MaiSNSLink.Twitter isX/>

                                <MaiSNSLink.Instagram />

                                <MaiSNSLink.Pixiv />
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                        </div>
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
