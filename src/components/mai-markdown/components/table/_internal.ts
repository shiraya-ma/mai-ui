'use string';
import { Children, type PropsWithChildren, type ReactElement, type ReactNode, type TableHTMLAttributes } from "react";

import { reactNodeToString } from "@/libs";
import { trimNodeFromProps } from "../../internal";

/** @internal */
export function parseChildren (children?: ReactNode) {
  if (!children) return undefined;

  try {
    const [ thead, tbody ] = Children.toArray(children) as [ Element, Element ];
    const [ theadRow ] = Children.toArray(thead.props.children) as [ Element ];
    const ths = Children.toArray(theadRow.props.children) as Element[];
    const columns = ths.map(th => reactNodeToString(th.props.children)) as TableColumnKey[];

    // tbody
    const tbodyRows = Children.toArray(tbody.props.children) as Element[];
    const rows: Array<TableRowProps> = tbodyRows.map(tr => {
      const tds = Children.toArray(tr.props.children) as Element[];
      // console.debug('tds:', tds);

      const items = {} as TableRowProps;
      tds.forEach((td, index) => {
        items[columns[index]] = reactNodeToString(td);
      });
      return items;
    });

    return {
      columns,
      rows,
    };
  } catch (e) {
    console.error(e);
    throw new Error('Invalid structure of table children');
  }
};

/** @internal */
export function parseProps (props: TableProps) {
  const {
    children,
    ...tableProps
  } = trimNodeFromProps(props);

  const { columns, rows } = parseChildren(children) || { columns: [], rows: []};

  return {
    columns,
    rows,
    ...tableProps
  };
};

/** @internal */
export type Element = ReactElement<PropsWithChildren>;

/** @internal */
export type TableProps = TableHTMLAttributes<HTMLTableElement>;

/** @internal */
export type TableColumnKey = string;

/** @internal */
export type TableRowProps = {
  [key: TableColumnKey]: ReactNode;
};
