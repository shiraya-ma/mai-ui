'use strict';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

import { MaiUIProvider } from '@mai-ui/components';
// import { MaiUIProvider } from '../../dist/components';

createRoot(document.querySelector('div#root') as HTMLDivElement).render((
    <StrictMode>
        <MaiUIProvider>
            <App />
        </MaiUIProvider>
    </StrictMode>
));
