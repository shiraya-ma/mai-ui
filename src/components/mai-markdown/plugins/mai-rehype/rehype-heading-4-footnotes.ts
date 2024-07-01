'use strict';
import type { RMP } from '../rmp';

export const heading4Footnotes: RMP.Visiter.EHeadingHandler = (node) => {
    if (!/^h/.test(node.tagName) || node.properties?.id !== 'footnote-label') {
        return;
    }

    node.children[0]!.value = '脚注';
};
