'use client';

import { createContext } from "react";

const PreContext = createContext<PreContext.Props>({ inPre: false });

namespace PreContext {
    export type Props = {
        inPre?: boolean;
    };
};

export {
    PreContext
};
