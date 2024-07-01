'use strict';

import { visit } from "unist-util-visit";

import { heading4Footnotes } from './rehype-heading-4-footnotes';

export function maiRehype () {
    return (tree: any) => {
        visit(tree, 'element', heading4Footnotes);
    };
};
