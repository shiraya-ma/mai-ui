'use strict';
import { createRoot } from 'react-dom/client';

import 'tailwindcss/tailwind.css';
import '@mai-ui/../fonts.css';

import { App } from './app';

createRoot(document.querySelector('div#root') as HTMLDivElement).render( <App /> );
