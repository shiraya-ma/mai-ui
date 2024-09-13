'use strict';

export const usage = `import React from "react";

import { MaiCodeBlock } from "@shiraya-ma/mai-ui";jj

import { codeBlockText1 } from './_code-block-text-1';

export default function App() {
  return (
    <MaiCodeBlock language='html'>
        { codeBlockText1 }
    </MaiCodeBlock>
  );
};

`;

export const withFilename = `import React from "react";
import { MaiCodeBlock } from "@shiraya-ma/mai-ui";

import { codeBlockText1 } from './_code-block-text-1';

export default function App() {
  return (
    <MaiCodeBlock filename='index.html' language='html'>
        { codeBlockText1 }
    </MaiCodeBlock>
  );
};

`;

export const changeStyle = `import React from "react";
import { MaiCodeBlock } from "@shiraya-ma/mai-ui";
import darcula from 'react-syntax-highlighter/dist/esm/styles/hljs/darcula';

import { codeBlockText2 } from './_code-block-text-2';

export default function App() {
  return (
    <MaiCodeBlock filename='app.tsx' language='tsx' style={ darcula }>
        { codeBlockText2 }
    </MaiCodeBlock>
  );
};

`;

