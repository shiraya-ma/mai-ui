'use strict';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MaiUIProvider } from '@mai-ui/components';

import { App } from './app';
import { Layout } from './layout';
// import { MaiUIProvider } from '../../dist/components';

const Home: React.FC<{}> = () => (
    <>
        <h1>Mai UI</h1>

        <p>
            <a href='/temp'>to temp page.</a>
        </p>
    </>
);

createRoot(document.querySelector('div#root') as HTMLDivElement).render((
    <StrictMode>
        <MaiUIProvider>
            <Layout>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={ <Home/> }/>

                        <Route path='/temp' element={ <App /> }/>

                        <Route path="*" element={<h1>Not Found Page</h1>} />
                    </Routes>
                </BrowserRouter>
            </Layout>           
        </MaiUIProvider>
    </StrictMode>
));
