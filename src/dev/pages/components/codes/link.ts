'use strict';

export const usage = `import React from "react";

import { MaiLink } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <MaiLink href='#'>Default Link</MaiLink>
  );
};

`;

export const colors = `import React from "react";

import { MaiLink } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <>
      <MaiLink href='#' color='foreground'>Foreground</MaiLink>
                          
      <MaiLink href='#' color='primary'>Primary</MaiLink>

      <MaiLink href='#' color='secondary'>Secondary</MaiLink>
      
      <MaiLink href='#' color='success'>Success</MaiLink>
      
      <MaiLink href='#' color='warning'>Warn</MaiLink>

      <MaiLink href='#' color='danger'>Danger</MaiLink>
    </>
  );
};

`;

export const externalLink = `import React from "react";

import { MaiLink } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <MaiLink href='https://www.google.com'>Google</MaiLink>
  );
};

`;
