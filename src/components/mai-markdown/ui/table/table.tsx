// Table
'use strict';
import React, { ReactNode } from 'react';
import { TableFC } from './table-fc';

const Table = (props: Table.Props) => {
    const { children } = props;

    return (
        <TableFC>
            { children }
        </TableFC>
    );
};

namespace Table {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    Table
};
