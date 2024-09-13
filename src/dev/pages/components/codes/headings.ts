'use strict';

export const usage = `import React from "react";

import { MaiHeadings } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <>
        <MaiHeadings level={ 1 }>Headings 1</MaiHeadings>
        
        <MaiHeadings level={ 2 }>Headings 2</MaiHeadings>
        
        <MaiHeadings level={ 3 }>Headings 3</MaiHeadings>
        
        <MaiHeadings level={ 4 }>Headings 4</MaiHeadings>
        
        <MaiHeadings level={ 5 }>Headings 5</MaiHeadings>
        
        <MaiHeadings level={ 6 }>Headings 6</MaiHeadings>
    </>
  );
};

`;


export const inidividual = `import React from "react";

import { MaiH1, MaiH2, MaiH3, MaiH4, MaiH5, MaiH6 } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <>
        <MaiH1>Indivisual Headings 1</MaiH1>
                        
        <MaiH2>Indivisual Headings 2</MaiH2>
        
        <MaiH3>Indivisual Headings 3</MaiH3>
        
        <MaiH4>Indivisual Headings 4</MaiH4>
        
        <MaiH5>Indivisual Headings 5</MaiH5>
        
        <MaiH6>Indivisual Headings 6</MaiH6>
    </>
  );
};

`;

export const colors = `import React from "react";

import { MaiH3 } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <>
        <MaiH3 color='foreground'>Foreground</MaiH3>
        
        <MaiH3 color='primary'>Primary</MaiH3>
        
        <MaiH3 color='secondary'>Secondary</MaiH3>
        
        <MaiH3 color='success'>Success</MaiH3>
        
        <MaiH3 color='warn'>Warn</MaiH3>
        
        <MaiH3 color='danger'>Danger</MaiH3>
    </>
  );
};

`;

