'use strict';
/* eslint-disable react-refresh/only-export-components */
import React from 'react';

import {
  getKeyValue,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Table as TableWrapper,
  type TableProps as TableWrapperProsp,
} from '@heroui/table';

import { parseProps, type TableProps } from './_internal';

/** @internal */
const Table: React.FC<TableProps> = (props) => {
  const { columns, rows, ...tableProps } = parseProps(props);

  return (
    <TableWrapper {...tableProps as TableWrapperProsp}>
      <TableHeader>
        {columns.map(column=> (<TableColumn key={column} children={column}/>))}
      </TableHeader>

      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            {column => (<TableCell>{getKeyValue(row, column)}</TableCell>)}
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

export {
  Table as table,
};
