'use strict';

export const usage = `import React from "react";
import { Divider, Image } from '@nextui-org/react';
import { MaiCard, MaiCardBody, MaiCardFooter, MaiCardHeader, MaiLink } from '@shiraya-ma/mai-ui';

export default function App() {
  return (
    <MaiCard className="max-w-[400px]">
      <MaiCardHeader className="flex gap-3">
          <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
          />

          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
      </MaiCardHeader>

      <Divider/>

      <MaiCardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </MaiCardBody>

      <Divider/>

      <MaiCardFooter>
        <MaiLink
        showAnchorIcon
        href="https://github.com/nextui-org/nextui"
        >
        Visit source code on GitHub.
        </MaiLink>
      </MaiCardFooter>
  </MaiCard>
  );
};

`;

