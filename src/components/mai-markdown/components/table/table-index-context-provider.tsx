// TableIndexContextProvider
'use strict';
import React, { ReactNode } from 'react';

import { TableIndexContext } from './table-index-context';
import { useTableIndexContext } from './hooks';

const TableIndexContextProvider: React.FC<TableIndexContextProvider.Props> = (props) => {
    const { children } = props;

    const { tableIndexContext } = useTableIndexContext();
    
    return (
        <TableIndexContext.Provider value={tableIndexContext}>
            { children }
        </TableIndexContext.Provider>
    );
};

namespace TableIndexContextProvider {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    TableIndexContextProvider
};
