'use strict';
import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import { visitParents } from 'unist-util-visit-parents';
import { Element, ElementContent, Root } from 'hast';

/** @internal */
export const rehypeAlertBlockquote: Plugin<[], Root> = () => {
  return (tree) => {
    visitParents(tree, 'element', (node, ancestors) => {
      if (node.type !== 'element' || node.tagName !== 'blockquote') return;

      const parent = ancestors[ancestors.length - 1];
      if (!parent || parent.type !== 'root') return;

      const quote = node;

      const bqChildren = quote.children.filter(child => child.type === 'element');
      if (!bqChildren.length) return;

      const firstChildElement = bqChildren[0]; // bqChildren is guaranteed to have at least one element here
      if (firstChildElement.type !== 'element' || firstChildElement.tagName !== 'p') return;

      const pFirstText = firstChildElement.children.find(child => child.type === 'text');
      if (!pFirstText || pFirstText.type !== 'text') return;

      const alertTagRegex = /^(\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\n?)((.|\n)*)/;
      const matches = pFirstText.value.match(alertTagRegex);
      if (!matches || matches.length < 3 ) return;

      const [
        _,    // eslint-disable-line @typescript-eslint/no-unused-vars
        __,   // eslint-disable-line @typescript-eslint/no-unused-vars
        quoteLevel,
        alertText = undefined,
      ] = matches;

      const alertLevel = quoteLevel === 'NOTE'? 'primary':
                         quoteLevel === 'TIP'? 'secondary':
                         quoteLevel === 'IMPORTANT'? 'success':
                         quoteLevel === 'WARNING'? 'warning':
                         quoteLevel === 'CAUTION'? 'danger':
                         undefined;

      if (!alertLevel) return;

      quote.properties['dataAlertLevel'] = alertLevel;

      if (alertText) {
        pFirstText.value = alertText;
      }
      else {
        quote.children = quote.children.filter(child => child !== firstChildElement);
      }
    });
  };
};

/** @internal */
export const rehypeAutoAriaLabelForTable: Plugin<[], Root> = () => {
  return (tree) => {
    visitParents(tree, 'element', (node: Element, ancestors) => {
      const parent = ancestors.at(-1);
      if (!parent || parent.type !== 'root') return;

      if (node.type !== 'element' || node.tagName !== 'table') return;

      const table = node;

      if (table.properties.ariaLabel || table.properties['aria-label']) return;

      table.properties['aria-label'] = 'generated table';
    });
  };
};

/** @internal */
export const rehypeCheckboxLabel: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'li') return;

      const liCh = node.children;
      const input: ElementContent | undefined = liCh[0];
      const label: ElementContent | undefined = liCh[1];

      if (
        liCh.length >= 2 &&
        input && input.type === 'element' && input.tagName === 'input' &&
        input.properties.type === 'checkbox' &&
        label && label.type === 'text'
      ) {
        const regex = /^(.*)(\n?)$/;
        const checkbox = input;
        const labelText = label.value.match(regex)?.[1] || '';

        checkbox.properties['data-label'] = labelText;
        label.value = label.value.replace(regex, '$2');
      }
    });
  };
};

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
export const rehypeUnwrapFootnoteParagraphs: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node) => {
      const attrs = ['data-footnotes', 'dataFootnotes'];
      if (node.tagName !== 'section' || !node.properties || !attrs.some(attr => attr in node.properties)) return;

      const list = node.children.find(node => node.type === 'element' && node.tagName === 'ol') as Element;
      if (!list) return;

      const items = list.children.filter(node => node.type === 'element' && node.tagName === 'li') as Element[];
      if (!items.length) return;

      items.forEach(item => {
        const paragraph = item.children.find(node => node.type === 'element' && node.tagName === 'p') as Element;
        if (!paragraph) return;

        const nodes = paragraph.children as Element[];

        item.children = [
          ...nodes,
        ];
      });
    });
  };
};

/** @internal */
export const rehypeTransferDataAttributesToPre: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'pre') return;

      const code = node.children.find(
        (child): child is Element => child.type === 'element' && child.tagName === 'code'
      );

      if (!code || !code.properties) return;

      // codeのdata-属性だけ抽出してpreに付与
      for (const [key, value] of Object.entries(code.properties)) {
        if (key.startsWith('data')) {
          if (!node.properties) node.properties = {};
          node.properties[key] = value;
        }
      }
    });
  };
};

/** @internal */
export const rehypeUnwrapImages: Plugin<[], Root> = () => {
  return (tree) => {
    visitParents(tree, 'element', (node: Element, ancestors) => {
      const parent = ancestors[ancestors.length - 1];
      if (!parent || parent.type !== 'root') return;

      if (node.type !== 'element' || node.tagName !== 'p') return;

      const p = node;
      if (p.children.length === 1) {
        const img = p.children.find(child => child.type === 'element' && child.tagName === 'img');
        if (!img) return;
        parent.children = parent.children.map(node => node !== p? node: img);
        return;
      }
      
      if (p.children.length > 1 && p.children.filter(child => child.type === 'element').some(child => child.type === 'element' && child.tagName === 'img')) {
        const div = p;
        div.tagName= 'div';
        div.properties.className = 'flex gap-4';
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

/** @internal */
export function trimNodeFromProps<T> (props: T): T {
  const {
    node: _,    // eslint-disable-line @typescript-eslint/no-unused-vars
    ...userProps
  } = props as PropsWithNode<T>;

  return {
    ...userProps as T
  };
};

/** @internal */
export type PropsWithNode<T> = T & { node?: undefined };
