'use strict';

export const usage = `import React from "react";

import { MaiInstagramLink, MaiPixivLink, MaiTwitterLink } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <>
      <MaiSNSLink.Instagram
      size='lg'/>

      <MaiSNSLink.Pixiv
      size='lg'/>

      <MaiSNSLink.Twitter
      size='lg'/>
    </>
  );
};

`;

export const individualImport = `import React from "react";

import { MaiButton } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <>
      <MaiInstagramLink
      color='primary'
      size='lg'/>

      <MaiPixivLink
      color='primary'
      size='lg'/>

      <MaiTwitterLink
      color='primary'
      size='lg'/>
    </>
  );
};

`;

export const withChilren = `import React from "react";

import { MaiButton } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <>
      <MaiInstagramLink
      color='secondary'
      size='lg'>
        Instagram
      </MaiInstagramLink>

      <MaiPixivLink
      color='secondary'
      size='lg'>
        pixiv
      </MaiPixivLink>

      <MaiTwitterLink
      color='secondary'
      size='lg'>
        Twitter
      </MaiTwitterLink>
    </>
  );
};

`;

export const twitterIcon = `import React from "react";

import { MaiTwitterLink } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <>
        <MaiTwitterLink color='success' size='lg' />
                        
        <MaiTwitterLink color='success' size='lg' isX/>
    </>
  );
};

`;
