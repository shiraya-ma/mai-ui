// App
'use strict';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './layout';
import { Components, NotFound, Root } from './pages';

const App: React.FC<{}> = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={ <Root /> }/>

                <Route path='/components/*' element={(
                    <Routes>
                        <Route path="/" element={ <Components.Root />} />
                        
                        <Route path="/mai-article" element={ <Components.CArticle />} />
                        
                        <Route path="/mai-breadcrumbs" element={ <Components.CBreadcrumbs />} />
                        
                        <Route path="/mai-button" element={ <Components.CButton />} />
                        
                        <Route path="/mai-card" element={ <Components.CCard />} />
                        
                        <Route path="/mai-code-block" element={ <Components.CCodeBlock />} />
                        
                        <Route path="/mai-headings" element={ <Components.CHeadings />} />
                        
                        <Route path="/mai-link" element={ <Components.CLink />} />
                        
                        <Route path="/mai-markdown" element={ <Components.CMarkdown />} />
                        
                        <Route path="/mai-pagination" element={ <Components.CPagination />} />
                        
                        <Route path="/mai-skeleton" element={ <Components.CSkeleton />} />
                        
                        <Route path="/mai-sns-link" element={ <Components.CSNSLink />} />
                    </Routes>
                )}/>

                <Route path='/temp' element={ <h1>temp</h1> }/>

                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </Layout>
    </BrowserRouter>
);

namespace App {
    export type Props = {};
};

export {
    App
};
