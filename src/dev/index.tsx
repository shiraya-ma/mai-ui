'use strict';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

import { MaiUiProvider } from '@mai-ui/components';

createRoot(document.querySelector('div#root') as HTMLDivElement).render((
    <StrictMode>
        <MaiUiProvider>
            <App />
        </MaiUiProvider>
    </StrictMode>
));
