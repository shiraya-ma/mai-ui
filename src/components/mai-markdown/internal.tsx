'use strict';
import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import { visitParents } from 'unist-util-visit-parents';
import { Element, Root } from 'hast';

/** @internal */
export const rehypeMarkCodeInlineOrBlock: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'code' || !parent) return;

      // ブロックコードの典型パターン：<pre><code>
      const isBlock =
        parent.type === 'element' &&
        parent.tagName === 'pre';

      node.properties = {
        ...node.properties,
        'data-inline': (!isBlock).toString(), // "true" か "false"
      };
    });
  };
};

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

/** @internal */
export const rehypeRemoveParagraphForCardLink: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (!parent || node.tagName !== 'p') return;

      // 子が1つだけで、それがaタグ
      if (
        parent.type === 'root' && 
        node.children.length === 1 &&
        node.children[0].type === 'element' &&
        node.children[0].tagName === 'a'
      ) {
        const anchor = node.children[0] as Element;
        if (anchor.properties?.['data-is-only-child'] === 'true' || anchor.properties?.['dataIsOnlyChild'] === 'true') {
          // <p>を<a>に置き換える
          parent.children.splice(index!, 1, anchor);
        }
      }
    });
  };
};

/** @internal */
export const remarkCodeMetaToProperties: Plugin<[], Root> = () => {
  type Node = Partial<{
    data: Partial<{
      hChildren: object;
      hProperties: object;
    }>;
    lang: string;
    value: string;
    type: string;
  }>;

  return (tree) => {
    visit(tree, 'code', (node: Node) => {
      const lang   = node.lang;
      if (!lang) return;

      let filename = '';
      let language = '';

      if (lang.includes(':')) {
        [language, filename] = lang.split(':');
      } else if (lang.includes('.')) {
        filename = lang;
        language = lang.split('.').pop()!;
      } else {
        language = lang;
      }

      node.data = {
        ...node.data,
        hProperties: {
          ...node.data?.hProperties,
          ...(filename && { 'data-filename': filename }),
          ...(language && { 'data-language': language }),
        },
        hChildren: [
          {
            type: 'text',
            value: node.value,
          },
        ],
      };
    });
  };
};
