/* eslint-disable */
// Table
'use strict';
import React, { ReactNode } from 'react';
import {
    Table as NextTable,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from '@nextui-org/react';

import { useTable } from './hooks';

const TableFC: React.FC<Table.Props> = (props) => {
    const { children } = props;

    const { columns, rows, tableIndex } = useTable(children as any);

    return (
        <NextTable
        aria-label={`auto generated table${ tableIndex }`}
        isStriped>
            <TableHeader>
                {columns.map((c, i) => (
                    <TableColumn
                    align={ c.align }
                    key={`table-column-${ tableIndex }-${ i }`}
                    >
                        { c.children }
                    </TableColumn>
                ))}
            </TableHeader>

            <TableBody items={ rows }>
                {(row) => (
                    <TableRow
                    key={ row.key }
                    >
                        {row.children.map((c, i) => (
                            <TableCell
                            key={`table-cell-${ tableIndex }-${ i }`}
                            >
                                { c }
                            </TableCell>
                        ))}
                    </TableRow>
                )}
            </TableBody>
        </NextTable>
    );
};

const Table = (props: Table.Props) => (<TableFC { ...props } />);

namespace Table {
    export type Props = {
        children?: ReactNode;
    };

    export type Align = 'center' | 'end' | 'start';

    export type ColumnProps = {
        align: Align;
        children: ReactNode;
    };

    export type Row = {
        key: string;
        children: ReactNode[];
    };
};

export {
    Table
};
