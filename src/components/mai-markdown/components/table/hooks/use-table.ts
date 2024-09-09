// useTable
'use client';
import { ReactNode, useContext, useMemo } from "react";

import { type Table } from '../table';
import { TableIndexContext } from "../table-index-context";

export function useTable (children: Node[]) {
    const [ childThead, childTBody ] = children;
    const { getIndex } = useContext(TableIndexContext);
    
    const tableIndex = useMemo(() => getIndex(), []);

    const columns: Column[] = useMemo(() => {
        const tr = childThead.props.children as Node;

        const ths = tr.props.children as Node[];

        const columns: Column[] = ths.map(th => {
            const props = th.props;

            const children = props.children as ReactNode;

            const align: Align = props.style?.textAlign ?? 'start';

            return {
                align,
                children
            };
        });

        return columns;
    }, [ childThead ]);

    const rows: Row[] = useMemo(() => {
        const trs = childTBody.props.children as Node[];

        const rows: Row[] = trs.map((tr, i) => {
            const props = tr.props;
            const key = `table-row-${ tableIndex }-${ i }`;

            const tds = props.children as Node[];

            const children: ReactNode[] = tds.map(td => {
                const props = td.props;

                return props.children as ReactNode;
            });

            return {
                key,
                children
            };
        });

        return rows;
    }, [ childTBody ]);

    return {
        columns,
        rows,
        tableIndex
    };    
};

export type Node = {
    key: string;
    props: {
        children?: Node | Node[] | ReactNode;
        style?: {
            textAlign: Align;
        };
    };
};

type Align = Table.Align;

type Column = Table.ColumnProps;

type Row = Table.Row;
