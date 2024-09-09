'use string';

import { createContext } from "react";

const TableIndexContext = createContext<TableIndexContext.Props>({
    getIndex: () => -1
});

namespace TableIndexContext {
    export type Props = {
        getIndex: () => number;
    };
};

export {
    TableIndexContext
};
