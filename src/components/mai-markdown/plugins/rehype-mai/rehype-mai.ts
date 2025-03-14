/* eslint-disable */
'use strict';
import { visit } from "unist-util-visit";

import { heading4Footnotes } from './rehype-heading-4-footnotes';

export function rehypeMai () {
    return (tree: any) => {
        visit(tree, 'element', heading4Footnotes);
    };
};
