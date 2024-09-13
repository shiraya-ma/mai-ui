'use strict';

export const usage = `import React from "react";

import { MaiArticle, MaiH1 } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <>
      <MaiArticle.Container>
        <MaiH1>Title</MaiH1>

        <MaiArticle.Thumbnail src='https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg' />

        <MaiArticle.Info publishedAt={ publishedAt } updatedAt={ updatedAt } />

        <MaiArticle.Divider />

        main contents...
      </MaiArticle.Container>
    </>
  );
};

`;
