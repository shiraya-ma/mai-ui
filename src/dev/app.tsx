// App
'use strict';
import React from 'react';
import { Image, Tab, Tabs } from '@nextui-org/react';
import { Twitter } from 'react-bootstrap-icons';

import 'tailwindcss/tailwind.css';
import '@mai-ui/../fonts.css';
import SyntaxHighlighterStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';

import type { MaiUI } from '@mai-ui/types/mai-ui';
import {
    MaiArticle,
    MaiBreadcrumbItem,
    MaiBreadcrumbs,
    MaiButton,
    MaiCard,
    MaiCardBody,
    MaiCardFooter,
    MaiCardHeader,
    MaiCodeBlock,
    MaiH1,
    MaiH2,
    MaiH3,
    MaiH4,
    MaiH5,
    MaiH6,
    MaiHeadings,
    MaiLink,
    MaiMarkdown,
    MaiPagination,
    MaiSkeleton,
    MaiSNSLink
} from '@mai-ui/components';

import './global.scss';
import S from './style.module.scss';

import { codeBlockText1 } from './_code-block-text-1';
import { codeBlockText2 } from './_code-blocl-text-2';
import { markdownText } from './_markdown-text';

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

    const publishedAt = new Date();

    const updatedAt = new Date();
    updatedAt.setDate(publishedAt.getDate() + 1);
    
    return (
        <main className={ S.container }>
            <MaiBreadcrumbs>
                <MaiBreadcrumbItem href='/temp'>temp</MaiBreadcrumbItem>
            </MaiBreadcrumbs>

            <MaiArticle.Container>
                <MaiArticle.Thumbnail />

                <MaiH1>Mai UI</MaiH1>

                <MaiArticle.Info
                publishedAt={ publishedAt.toISOString() }
                updatedAt={ updatedAt.toISOString() }
                />

                <MaiArticle.Divider />

                <section>
                    <MaiH2>MaiBreadcrumbs</MaiH2>

                    <section>
                        <MaiH3>MaiBreadcrumbs Usage</MaiH3>

                        <Tabs variant='underlined' aria-label='MaiBreadcrumbs Usage'>
                            <Tab key='preview' title='preview'>
                                <div className={ S.preview }>
                                    <MaiBreadcrumbs homeHref='/'>
                                        <MaiBreadcrumbItem href='/temp'>hogehoge</MaiBreadcrumbItem>

                                        <MaiBreadcrumbItem href='/temp'>fugafuga</MaiBreadcrumbItem>
                                        
                                        <MaiBreadcrumbItem href='/temp'>piyopiyo</MaiBreadcrumbItem>
                                    </MaiBreadcrumbs>
                                </div>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                    </section>

                    <MaiH2>MaiButton</MaiH2>

                    <section>
                        <MaiH3>MaiButton Colors</MaiH3>

                        <Tabs variant='underlined' aria-label='MaiButton Colors'>
                            <Tab key='preview' title='preview'>
                                <div className={ S.preview }>
                                    {maiButtonColors.map((c) => (
                                        <MaiButton color={ c } key={`mai-button-colors-${ c }`}>{ c }</MaiButton>
                                    ))}
                                </div>
                            </Tab>

                            <Tab key='code' title='code'>
                                
                            </Tab>
                        </Tabs>

                        <MaiH3>MaiButton Variants</MaiH3>                       

                        <Tabs variant='underlined' aria-label='MaiButton Variants'>
                            <Tab key='preview' title='preview'>
                                <div className={ S.preview }>
                                    {maiButtonVariants.map((v) => (
                                        <MaiButton color='primary' variant={ v } key={`mai-button-variants-${ v }`}>{ v }</MaiButton>
                                    ))}
                                </div>
                            </Tab>
                            <Tab key='code' title='code'></Tab>
                        </Tabs>

                        <MaiH3>MaiButton as Link</MaiH3>  

                        <Tabs variant='underlined' aria-label='MaiButton LinkButton'>
                            <Tab key='preview' title='preview' >
                                <div className={ S.preview }>
                                    <MaiButton
                                    as={ MaiLink }
                                    color='primary'
                                    href='https://www.google.com/'
                                    variant='shadow'
                                    >Google</MaiButton>
                                </div>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                    </section>

                    <MaiH2>MaiCard</MaiH2>

                    <section>
                        <MaiH3>MaiCard Colors</MaiH3>

                        <Tabs variant='underlined' aria-label='MaiCard Colors'>
                            <Tab key='preview' title='preview'>
                                <div className={ S.preview }>
                                    <MaiCard className="max-w-[400px]">
                                        <MaiCardHeader className="flex gap-3">
                                            <Image
                                            alt="nextui logo"
                                            height={40}
                                            radius="sm"
                                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                            width={40}
                                            />

                                            <div className="flex flex-col">
                                                <p className="text-md">NextUI</p>
                                                <p className="text-small text-default-500">nextui.org</p>
                                            </div>
                                        </MaiCardHeader>

                                        <MaiCardBody>
                                            <p>Make beautiful websites regardless of your design experience.</p>
                                        </MaiCardBody>

                                        <MaiCardFooter>
                                            <MaiLink
                                            showAnchorIcon
                                            href="https://github.com/nextui-org/nextui"
                                            >
                                            Visit source code on GitHub.
                                            </MaiLink>
                                        </MaiCardFooter>
                                    </MaiCard>
                                </div>
                            </Tab>

                            <Tab key='code' title='code'>
                                
                            </Tab>
                        </Tabs>

                        <MaiH3>MaiButton Variants</MaiH3>                       

                        <Tabs variant='underlined' aria-label='MaiButton Variants'>
                            <Tab key='preview' title='preview'>
                                <div className={ S.preview }>
                                    {maiButtonVariants.map((v) => (
                                        <MaiButton color='primary' variant={ v } key={`mai-button-variants-${ v }`}>{ v }</MaiButton>
                                    ))}
                                </div>
                            </Tab>
                            <Tab key='code' title='code'></Tab>
                        </Tabs>

                        <MaiH3>MaiButton as Link</MaiH3>  

                        <Tabs variant='underlined' aria-label='MaiButton LinkButton'>
                            <Tab key='preview' title='preview' >
                                <div className={ S.preview }>
                                    <MaiButton
                                    as={ MaiLink }
                                    color='primary'
                                    href='https://www.google.com/'
                                    variant='shadow'
                                    >Google</MaiButton>
                                </div>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                    </section>
                    
                    <MaiH2>MaiCodeBlock</MaiH2>

                    <section>
                        <MaiH3>MaiCodeBlock Usage</MaiH3>

                        <Tabs variant='underlined' aria-label='MaiCodeBlock Usage'>
                            <Tab key='preview' title='preview'>
                                <div className={ S.preview }>
                                    <MaiCodeBlock language='html' style={SyntaxHighlighterStyle}>{ codeBlockText1 }</MaiCodeBlock>
                                </div>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>

                        <MaiH3>MaiCodeBlock with file name</MaiH3>

                        <Tabs variant='underlined' aria-label='MaiCodeBlock with file name'>
                            <Tab key='preview' title='preview'>
                                <div className={ S.preview }>
                                <MaiCodeBlock filename='App.js' language='javascript'>{ codeBlockText2 }</MaiCodeBlock>
                                </div>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                    </section>

                    <MaiH2>MaiHeadings</MaiH2>

                    <section>
                        <MaiH3>MaiHeadings Usage</MaiH3>

                        <Tabs variant='underlined' aria-label='MaiHeadings Usage'>
                            <Tab key='preview' title='preview'>
                                <div className={ S.preview } data-col={ true }>
                                    <MaiHeadings id='_' level={ 1 }>Header 1</MaiHeadings>
                                    <MaiHeadings id='_' level={ 2 }>Header 2</MaiHeadings>
                                    <MaiHeadings id='_' level={ 3 }>Header 3</MaiHeadings>
                                    <MaiHeadings id='_' level={ 4 }>Header 4</MaiHeadings>
                                    <MaiHeadings id='_' level={ 5 }>Header 5</MaiHeadings>
                                    <MaiHeadings id='_' level={ 6 }>Header 6</MaiHeadings>                                    
                                </div>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                        
                        <MaiH3>MaiHeadings for individual import</MaiH3>
                        
                        <Tabs variant='underlined' aria-label='MaiHeadings for individual import'>
                                <Tab key='preview' title='preview'>
                                    <div className={ S.preview } data-col={ true }>
                                        <MaiH1 id='_'>Header 1</MaiH1>
                                        <MaiH2 id='_'>Header 2</MaiH2>
                                        <MaiH3 id='_'>Header 3</MaiH3>
                                        <MaiH4 id='_'>Header 4</MaiH4>
                                        <MaiH5 id='_'>Header 5</MaiH5>
                                        <MaiH6 id='_'>Header 6</MaiH6>
                                    </div>
                                </Tab>

                                <Tab key='code' title='code'></Tab>
                            </Tabs>
                        
                        <MaiH3>MaiHeadings with icon</MaiH3>
                        
                        <Tabs variant='underlined' aria-label='MaiHeadings with icon'>
                            <Tab key='preview' title='preview'>
                                <div className={ S.preview } data-col="true">
                                    <MaiH3 startContent={ <Twitter/> }>Twitter</MaiH3>
                                </div>                                
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>

                    </section>
                    
                    <MaiH2>MaiLink</MaiH2>

                    <section>
                        <MaiH3>MaiLink Usage</MaiH3>

                        <Tabs variant='underlined' aria-label='MaiLink Usage'>
                            <Tab key='preview' title='preview' >
                                <div className={ S.preview }>
                                    <MaiLink href='/'>MaiLink</MaiLink>

                                    <MaiLink href='http://localhost:3000'>localhost</MaiLink>

                                    <MaiLink href='https://www.google.com/'>Google</MaiLink>

                                    <MaiLink href='mailto://contact@localhost:3000'>Contact us</MaiLink>
                                </div>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                        
                        <MaiH3>MaiLink Colors</MaiH3>

                        <Tabs variant='underlined' aria-label='MaiLink Colors'>
                            <Tab key='preview' title='preview' >
                                <div className={ S.preview }>
                                    { maiLinkColors.map(c => (
                                        <MaiLink color={ c } key={`mai-link-colors-${ c }`} href='/'>{ c }</MaiLink>
                                    ))}
                                </div>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>                            
                    </section>

                    <MaiH2>MaiMarkdown</MaiH2>

                    <section>
                        <MaiH3>Usage</MaiH3>
                        
                        <Tabs variant='underlined' aria-label='MaiMarkdown Usage'>
                            <Tab key='preview' title='preview'>
                                <div className={ S.preview }>
                                    <MaiMarkdown>
                                        { markdownText }
                                    </MaiMarkdown>
                                </div>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                    </section>

                    <MaiH2>MaiPagination</MaiH2>

                    <section>
                        <MaiH3>MaiPagination Usage</MaiH3>

                        <Tabs variant='underlined' aria-label='MaiPagination Usage'>
                            <Tab key='preview' title='preview'>
                                <div className={ S.preview }>
                                    <MaiPagination
                                    total={ 10 }
                                    initialPage={ 1 }
                                    />
                                </div>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                    </section>

                    <MaiH2>MaiSkeleton</MaiH2>

                    <section>
                        <MaiH3>MaiSkeleton Usage</MaiH3>

                        <Tabs variant='underlined' aria-label='MaiSkeleton Usage'>
                            <Tab key='preview' title='preview'>
                                <div className={ S.preview }>
                                    <MaiSkeleton
                                    className='w-64 h-40'
                                    />
                                </div>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                    </section>

                    <MaiH2>MaiSNSLink</MaiH2>

                    <section>
                        <MaiH3>MaiSNSLink Usage</MaiH3>

                        <Tabs variant='underlined' aria-label='MaiSNSLink Usage'>
                            <Tab key='preview' title='preview' >
                                <div className={ S.preview }>
                                    <MaiSNSLink.Twitter />

                                    <MaiSNSLink.Twitter isX/>

                                    <MaiSNSLink.Instagram />

                                    <MaiSNSLink.Pixiv />
                                </div>
                            </Tab>

                            <Tab key='code' title='code'></Tab>
                        </Tabs>
                    </section>
                </section>
            </MaiArticle.Container>
        </main>
    );
};

namespace App {
    export type Props = {};
};

export {
    App
};
