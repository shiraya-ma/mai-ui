// App
'use strict';
import React from 'react';
import 'tailwindcss/tailwind.css';

import { MaiButton } from '../components';

import './global.scss';
import S from './style.module.scss';

const App: React.FC<App.Props> = (props) => {
    const {} = props;

    const maiButtonColors: MaiUI.Color[] = [
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
    
    return (
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
                </section>
            </section>
        </main>
    );
};

namespace App {
    export type Props = {};
};

export {
    App
};
