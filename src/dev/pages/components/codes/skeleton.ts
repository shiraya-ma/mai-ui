'use strict';

export const usage = `import React from "react";
import { MaiCard, MaiSkeleton } from '@shiraya-ma/mai-ui';

export default function App() {
  return (
    <MaiCard className="w-[200px] space-y-5 p-4" radius="lg">
      <MaiSkeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </MaiSkeleton>

      <div className="space-y-3">
        <MaiSkeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </MaiSkeleton>

        <MaiSkeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </MaiSkeleton>

        <MaiSkeleton className="w-2/5 rounded-lg">  
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </MaiSkeleton>
      </div>
    </MaiCard>
  );
};

`;

