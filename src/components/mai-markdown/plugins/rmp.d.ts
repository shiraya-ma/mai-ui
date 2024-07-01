import {} from 'react';

declare namespace RMP.Node {
    export type EHeading = {} & Element;

    export type Element = {
        tagName: string;
        properties: any;
    } & Node;

    export type Code = {
        meta: string | null;
        lang: string | null;
        value: string;
    } & Node;

    export type Node = {
        type: string;
        children: Node[];
        value?: string;
        position: Position?;
    };

    export type LinkNode = {
        title: string | null;
        url: string;
    } & Node;

    export type ParagraphNode = {} & Node;

    type Position = {
        end: PositionData;
        start: PositionData;
    };

    type PositionData = {
        line: number;
        column: number;
        offset: number;
    };
};

declare namespace RMP.Visiter {
    export type CodeHadnler =  (node: RMP.Node.Code) => void;

    export type EHandler = (node: RMP.Node.Element) => void;

    export type EHeadingHandler = (node: RMP.Node.EHeading) => void;

    export type Handler = (node: RMP.Node.Node) => void;
    
    export type ParagraphHandler = (node: RMP.Node.ParagraphNode) => void;
};
