'use strict';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { NextUIProvider } from '@nextui-org/react';

createRoot(document.querySelector('div#root') as HTMLDivElement).render((
    <StrictMode>
        <NextUIProvider>
            <App />
        </NextUIProvider>
    </StrictMode>
));
