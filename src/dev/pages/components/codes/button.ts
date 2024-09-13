'use strict';

export const usage = `import React from "react";

import { MaiButton } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <MaiButton>Button</MaiButton>
  );
};

`;

export const colors = `import React from "react";

import { MaiButton } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <>
        <MaiButton color='default'>Default</MaiButton>
                            
        <MaiButton color='primary'>Primary</MaiButton>

        <MaiButton color='secondary'>Secondary</MaiButton>
        
        <MaiButton color='success'>Success</MaiButton>
        
        <MaiButton color='warning'>Warn</MaiButton>

        <MaiButton color='danger'>Danger</MaiButton>
    </>
  );
};

`;

export const buttonAsLink = `import React from "react";

import { MaiButton, MaiLink } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <>
        <MaiButton
        href='/'
        as={ MaiLink }>Home</MaiButton>
        
        <MaiButton
        href='https://www.google.com'
        as={ MaiLink }>Google</MaiButton>
    </>
  );
};

`;
