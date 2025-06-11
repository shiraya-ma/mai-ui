'use strict';
import { Plugin } from 'unified';
import { visitParents } from 'unist-util-visit-parents';
import { Element, Root } from 'hast';

/** @internal */
export const rehypeOnlyChildAnchor: Plugin<[], Root> = () => {
  return (tree) => {
    visitParents(tree, 'element', (node: Element, ancestors) => {
      // <p> 以外は無視
      if (node.tagName !== 'p') return;

      // 親が root（トップレベル）じゃなければスキップ
      const parent = ancestors[ancestors.length - 1];
      if (!parent || parent.type !== 'root') return;

      const children = node.children;

      if (
        children.length === 1 &&
        children[0].type === 'element' &&
        (children[0] as Element).tagName === 'a'
      ) {
        const aElement = children[0] as Element;

        if (!aElement.properties) aElement.properties = {};
        aElement.properties['data-is-only-child'] = 'true';
      }
    });
  };
};
