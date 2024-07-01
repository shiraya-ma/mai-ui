// TablePresenter
'use strict';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import React, { ReactNode } from 'react';

// import {} from './style';
// import * as S from './style';
// import S from './style.module.scss';

const TablePresenter: React.FC<TablePresenter.Props> = (props) => {
    const { columns, rows, index } = props;

    // console.debug(columns);
    console.debug(rows);
    
    // return (
    //     <></>
    // );

    return (
        <Table
        isStriped
        aria-label={`auto generated table ${ index }`}
        >
            <TableHeader>
                {columns.map((c, i) => (
                    <TableColumn
                    align={ c.align }
                    key={`table-column-${ index }-${ i }`}
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
                            key={`table-cell-${ index }-${ i }`}
                            >
                                { c }
                            </TableCell>
                        ))}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

namespace TablePresenter {
    export type Props = {
        columns: ColumnProps[];
        rows: Row[];
        index: number;
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
    TablePresenter
};
