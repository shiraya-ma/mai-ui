// TableFC
'use strict';
import React, { ReactNode, useContext } from 'react';
import { TablePresenter } from './table-presenter';
import { useTableProps } from './use-table-props';
import { TableIndexContext } from './table-index-context';

const TableFC: React.FC<TableFC.Props> = (props) => {
    const { children } = props;

    const { getIndex } = useContext(TableIndexContext);

    const tableIndex = getIndex();

    const { columns, rows } = useTableProps(children as any, tableIndex);
    
    return (
        <TablePresenter
        columns={ columns }
        rows={ rows }
        index={ tableIndex }
        />
    );
};

namespace TableFC {
    export type Props = {
        children: ReactNode;
    };
};

export {
    TableFC
};
