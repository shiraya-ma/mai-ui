// useTableProps
'use client';
import React, { ReactNode, useMemo } from "react";
import type { TablePresenter } from "./table-presenter";

export function useTableProps (children: Node[], tableIndex: number) {
    const [ childThead, childTBody ] = children;

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
        rows
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

type Align = TablePresenter.Align;

type Column = TablePresenter.ColumnProps;

type Row = TablePresenter.Row;
