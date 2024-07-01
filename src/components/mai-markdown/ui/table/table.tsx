// Table
'use strict';
import React, { ReactNode, useEffect } from 'react';
import { Table as NextTable } from '@nextui-org/react';
import { TableFC } from './table-fc';

const Table = (props: Table.Props) => {
    const { children } = props;

    // return (
    //     <table>
    //         { children }
    //     </table>
    // );

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
