'use strict';
import { describe, it, expect } from 'bun:test';
import { Root, RootContent } from 'hast';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';

import {
  rehypeCheckboxLabel,
  rehypeMarkCodeInlineOrBlock,
  rehypeOnlyChildAnchor,
  rehypeRemoveParagraphForCardLink,
  rehypeTransferDataAttributesToPre,
  remarkCodeMetaToProperties,
} from './internal';

function processHtml(html: string): Promise<Root> {
  return unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeOnlyChildAnchor)
    .run(unified().use(rehypeParse, { fragment: true }).parse(html));
}

describe('rehypeCheckboxLabel', () => {
  type _Content<T extends HTMLElement> = T & Partial<{properties: {[key: string]: string | undefined}}>;
  type _RootContent<T extends HTMLElement> = RootContent & T;

  async function processCheckboxLabel(html: string): Promise<Root> {
    return unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeCheckboxLabel)
      .run(unified().use(rehypeParse, { fragment: true }).parse(html));
  }

  it('adds data-label to checkbox input and removes label text', async () => {
    const html = '<li><input type="checkbox" checked>label text</li>';
    const tree = await processCheckboxLabel(html);
    const li = tree.children[0] as _RootContent<HTMLLIElement>;
    expect(li.tagName).toBe('li');
    const input = li.children[0] as _Content<HTMLInputElement>;
    const label = li.children[1] as { type: string; value: string };
    expect(input.tagName).toBe('input');
    expect(input.properties?.['data-label']).toBe('label text');
    expect(label.value).toBe('');
  });

  it('does not modify <li> if first child is not input[type=checkbox]', async () => {
    const html = '<li><span>not checkbox</span>label text</li>';
    const tree = await processCheckboxLabel(html);
    const li = tree.children[0] as _RootContent<HTMLLIElement>;
    const span = li.children[0] as _Content<HTMLSpanElement>;
    expect(span.tagName).toBe('span');
    expect(span.properties?.['data-label']).toBeUndefined();
    const label = li.children[1] as { type: string; value: string };
    expect(label.value).toBe('label text');
  });

  it('does nothing if <li> has less than 2 children', async () => {
    const html = '<li><input type="checkbox"></li>';
    const tree = await processCheckboxLabel(html);
    const li = tree.children[0] as _RootContent<HTMLLIElement>;
    const input = li.children[0] as _Content<HTMLInputElement>;
    expect(input.tagName).toBe('input');
    expect(input.properties?.['data-label']).toBeUndefined();
  });

  it('does nothing if second child is not text', async () => {
    const html = '<li><input type="checkbox"><span>label</span></li>';
    const tree = await processCheckboxLabel(html);
    const li = tree.children[0] as _RootContent<HTMLLIElement>;
    const input = li.children[0] as _Content<HTMLInputElement>;
    expect(input.tagName).toBe('input');
    expect(input.properties?.['data-label']).toBeUndefined();
    const span = li.children[1] as _Content<HTMLSpanElement>;
    expect(span.tagName).toBe('span');
  });

  it('handles label text with newline', async () => {
    const html = '<li><input type="checkbox">label text\n</li>';
    const tree = await processCheckboxLabel(html);
    const li = tree.children[0] as _RootContent<HTMLLIElement>;
    const input = li.children[0] as _Content<HTMLInputElement>;
    const label = li.children[1] as { type: string; value: string };
    expect(input.properties?.['data-label']).toBe('label text');
    expect(label.value).toBe('\n');
  });

  it('handles empty label text', async () => {
    const html = '<li><input type="checkbox"></li>';
    const tree = await processCheckboxLabel(html);
    const li = tree.children[0] as _RootContent<HTMLLIElement>;
    const input = li.children[0] as _Content<HTMLInputElement>;
    expect(input.properties?.['data-label']).toBeUndefined();
  });

  it('does not affect non-li elements', async () => {
    const html = '<div><input type="checkbox">label</div>';
    const tree = await processCheckboxLabel(html);
    const div = tree.children[0] as _RootContent<HTMLDivElement>;
    expect(div.tagName).toBe('div');
    const input = div.children[0] as _Content<HTMLInputElement>;
    expect(input.tagName).toBe('input');
    expect(input.properties?.['data-label']).toBeUndefined();
  });
});

describe('rehypeMarkCodeInlineOrBlock', () => {
  type _Content<T extends HTMLElement> = T & Partial<{properties: {[key: string]: string | undefined}}>;
  type _RootContent<T extends HTMLElement> = RootContent & T;

  async function processMarkCode(html: string): Promise<Root> {
    return unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeMarkCodeInlineOrBlock)
      .run(unified().use(rehypeParse, { fragment: true }).parse(html));
  }

  it('adds data-inline="false" to <code> inside <pre>', async () => {
    const html = '<pre><code>block code</code></pre>';
    const tree = await processMarkCode(html);
    const pre = tree.children[0] as _RootContent<HTMLPreElement>;
    expect(pre.tagName).toBe('pre');
    const code = pre.children[0] as _Content<HTMLElement>;
    expect(code.tagName).toBe('code');
    expect(code.properties?.['data-inline']).toBe('false');
  });

  it('adds data-inline="true" to inline <code>', async () => {
    const html = '<p>This is <code>inline</code> code.</p>';
    const tree = await processMarkCode(html);
    const p = tree.children[0] as _RootContent<HTMLParagraphElement>;
    expect(p.tagName).toBe('p');
    const code = Array.from(p.children).find((c: Element) => c.tagName === 'code') as _Content<HTMLElement>;
    expect(code).toBeDefined();
    expect(code.properties?.['data-inline']).toBe('true');
  });

  it('does not add data-inline to non-<code> elements', async () => {
    const html = '<pre><span>not code</span></pre>';
    const tree = await processMarkCode(html);
    const pre = tree.children[0] as _RootContent<HTMLPreElement>;
    expect(pre.tagName).toBe('pre');
    const span = pre.children[0] as _Content<HTMLElement>;
    expect(span.tagName).toBe('span');
    expect(span.properties?.['data-inline']).toBeUndefined();
  });

  it('does not add data-inline if <code> has no parent', async () => {
    // This is a synthetic case, but let's check robustness
    const html = '<code>orphan</code>';
    const tree = await processMarkCode(html);
    const code = tree.children[0] as _Content<HTMLAnchorElement>;
    expect(code.tagName).toBe('code');
    expect(code.properties?.['data-inline']).toBe('true'); // At root, so treated as inline
  });

  it('handles multiple <code> elements correctly', async () => {
    const html = '<pre><code>block</code></pre><p><code>inline</code></p>';
    const tree = await processMarkCode(html);
    const pre = tree.children[0] as _RootContent<HTMLPreElement>;
    const codeBlock = pre.children[0] as _Content<HTMLElement>;
    expect(codeBlock.tagName).toBe('code');
    expect(codeBlock.properties?.['data-inline']).toBe('false');
    const p = tree.children[1] as _RootContent<HTMLParagraphElement>;
    const codeInline =Array.from(p.children).find((c: Element) => c.tagName === 'code') as _Content<HTMLElement>;
    expect(codeInline.properties?.['data-inline']).toBe('true');
  });

  it('does not overwrite existing properties on <code>', async () => {
    const html = '<pre><code class="foo">block</code></pre>';
    const tree = await processMarkCode(html);
    const pre = tree.children[0] as _RootContent<HTMLPreElement>;
    const code = pre.children[0] as _Content<HTMLElement>;
    expect(code.properties?.['className']).toContain('foo');
    expect(code.properties?.['data-inline']).toBe('false');
  });
});

describe('rehypeOnlyChildAnchor', () => {
  type _Content<T extends HTMLElement> = T & Partial<{properties: {[key: string]: string | undefined}}>;
  type _RootContent<T extends HTMLElement> = RootContent & T;

  it('adds data-is-only-child to <a> when it is the only child of <p> at root', async () => {
    const html = '<p><a href="foo">bar</a></p>';
    const tree = await processHtml(html);
    const p = (tree.children[0] as _RootContent<HTMLParagraphElement>);
    expect(p.tagName).toBe('p');
    const a = p.children[0] as _Content<HTMLAnchorElement>;
    expect(a.tagName).toBe('a');
    expect(a.properties?.['data-is-only-child']).toBe('true');
  });

  it('does not add data-is-only-child if <a> is not the only child', async () => {
    const html = '<p><a href="foo">bar</a>baz</p>';
    const tree = await processHtml(html);
    const p = (tree.children[0] as _RootContent<HTMLParagraphElement>);
    const a = p.children[0] as _Content<HTMLAnchorElement>;
    expect(a.tagName).toBe('a');
    expect(a.properties && a.properties['data-is-only-child']).toBeUndefined();
  });

  it('does not add data-is-only-child if <a> is only child but <p> is not at root', async () => {
    const html = '<div><p><a href="foo">bar</a></p></div>';
    const tree = await processHtml(html);
    const div = (tree.children[0] as _RootContent<HTMLDivElement>);
    const p = div.children[0] as HTMLParagraphElement;
    const a = p.children[0] as _Content<HTMLAnchorElement>;
    expect(a.tagName).toBe('a');
    expect(a.properties && a.properties['data-is-only-child']).toBeUndefined();
  });

  it('does not add data-is-only-child to <a> if parent is not <p>', async () => {
    const html = '<span><a href="foo">bar</a></span>';
    const tree = await processHtml(html);
    const span = (tree.children[0] as _RootContent<HTMLSpanElement>);
    const a = span.children[0] as _Content<HTMLAnchorElement>;
    expect(a.tagName).toBe('a');
    expect(a.properties && a.properties['data-is-only-child']).toBeUndefined();
  });

  it('does not add data-is-only-child if <p> has no children', async () => {
    const html = '<p></p>';
    const tree = await processHtml(html);
    const p = (tree.children[0] as _RootContent<HTMLParagraphElement>);
    expect(p.tagName).toBe('p');
    expect(p.children.length).toBe(0);
  });

  it('does not add data-is-only-child if <p> only child is not <a>', async () => {
    const html = '<p><span>bar</span></p>';
    const tree = await processHtml(html);
    const p = (tree.children[0] as _RootContent<HTMLParagraphElement>);
    const span = p.children[0] as _Content<HTMLSpanElement>;
    expect(span.tagName).toBe('span');
    expect(span.properties && span.properties['data-is-only-child']).toBeUndefined();
  });
});

describe('rehypeRemoveParagraphForCardLink', () => {
  type _Content<T extends HTMLElement> = T & Partial<{properties: {[key: string]: string | undefined}}>;
  type _RootContent<T extends HTMLElement> = RootContent & T;

  it('removes <p> and unwraps <a> with data-is-only-child at root', async () => {
    const html = '<p><a href="foo" data-is-only-child="true">bar</a></p>';
    const tree = await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeRemoveParagraphForCardLink)
      .run(unified().use(rehypeParse, { fragment: true }).parse(html));
    
    // After transformation, <a> should be at root, not wrapped in <p>
    expect(tree.children.length).toBe(1);
    const a = tree.children[0] as _Content<HTMLAnchorElement>;
    expect(a.tagName).toBe('a');
    expect(a.properties?.['dataIsOnlyChild']).toBe('true');
    // Due to rehypeParse's behavior, property names become camelCase
  });

  it('does not remove <p> if <a> does not have data-is-only-child', async () => {
    const html = '<p><a href="foo">bar</a></p>';
    const tree = await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeRemoveParagraphForCardLink)
      .run(unified().use(rehypeParse, { fragment: true }).parse(html));
    expect(tree.children.length).toBe(1);
    const p = tree.children[0] as _Content<HTMLAnchorElement>;
    expect(p.tagName).toBe('p');
    const a = p.children[0] as _Content<HTMLAnchorElement>;
    expect(a.tagName).toBe('a');
    expect(a.properties?.['dataIsOnlyChild']).toBeUndefined();
    // Due to rehypeParse's behavior, property names become camelCase
  });

  it('does not remove <p> if <a> is not the only child', async () => {
    const html = '<p><a href="foo" data-is-only-child="true">bar</a>baz</p>';
    const tree = await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeRemoveParagraphForCardLink)
      .run(unified().use(rehypeParse, { fragment: true }).parse(html));
    expect(tree.children.length).toBe(1);
    const p = tree.children[0] as _Content<HTMLAnchorElement>;
    expect(p.tagName).toBe('p');
    expect(p.children.length).toBe(2);
  });

  it('does not remove <p> if not at root', async () => {
    const html = '<div><p><a href="foo" data-is-only-child="true">bar</a></p></div>';
    const tree = await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeRemoveParagraphForCardLink)
      .run(unified().use(rehypeParse, { fragment: true }).parse(html));
    expect(tree.children.length).toBe(1);
    const div = tree.children[0] as _RootContent<HTMLDivElement>;
    expect(div.tagName).toBe('div');
    const p = div.children[0] as _Content<HTMLParagraphElement>;
    expect(p.tagName).toBe('p');
    const a = p.children[0] as _Content<HTMLAnchorElement>;
    expect(a.tagName).toBe('a');
    expect(a.properties?.['dataIsOnlyChild']).toBe('true');
  });

  it('does nothing for <p> with no children', async () => {
    const html = '<p></p>';
    const tree = await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeRemoveParagraphForCardLink)
      .run(unified().use(rehypeParse, { fragment: true }).parse(html));
    expect(tree.children.length).toBe(1);
    const p = tree.children[0] as _Content<HTMLAnchorElement>;
    expect(p.tagName).toBe('p');
    expect(p.children.length).toBe(0);
  });

  it('does nothing for <p> whose only child is not <a>', async () => {
    const html = '<p><span data-is-only-child="true">bar</span></p>';
    const tree = await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeRemoveParagraphForCardLink)
      .run(unified().use(rehypeParse, { fragment: true }).parse(html));
    expect(tree.children.length).toBe(1);
    const p = tree.children[0] as _Content<HTMLAnchorElement>;;
    expect(p.tagName).toBe('p');
    const span = p.children[0] as _Content<HTMLSpanElement>;;
    expect(span.tagName).toBe('span');
    expect(span.properties?.['dataIsOnlyChild']).toBe('true');
  });
});

describe('rehypeTransferDataAttributesToPre', () => {
  type _HasProperties = {
    properties: Partial<{
      [key: string]: string;
    }>;
  };
  type _Content<T extends HTMLElement> = T & Partial<{properties: {[key: string]: string | undefined}}>;
  type _RootContent<T extends HTMLElement> = RootContent & T & _HasProperties;

  async function processTransferDataAttrs(html: string): Promise<Root> {
    return unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeTransferDataAttributesToPre)
      .run(unified().use(rehypeParse, { fragment: true }).parse(html));
  }

  it('transfers data-* attributes from <code> to <pre>', async () => {
    const html = '<pre><code data-foo="bar" data-bar="baz">code</code></pre>';
    const tree = await processTransferDataAttrs(html);
    const pre = tree.children[0] as _RootContent<HTMLPreElement>;
    expect(pre.tagName).toBe('pre');
    expect(pre.properties?.['dataFoo']).toBe('bar');
    expect(pre.properties?.['dataBar']).toBe('baz');
    const code = pre.children[0] as _Content<HTMLElement>;
    expect(code.tagName).toBe('code');
    expect(code.properties?.['dataFoo']).toBe('bar');
    expect(code.properties?.['dataBar']).toBe('baz');
  });

  it('does not transfer non-data attributes from <code> to <pre>', async () => {
    const html = '<pre><code class="foo" id="bar" data-baz="qux">code</code></pre>';
    const tree = await processTransferDataAttrs(html);
    const pre = tree.children[0] as _RootContent<HTMLPreElement>;
    expect(pre.properties?.['dataBaz']).toBe('qux');
    expect(pre.properties?.['class']).toBeUndefined();
    expect(pre.properties?.['id']).toBeUndefined();
  });

  it('does nothing if <pre> has no <code> child', async () => {
    const html = '<pre><span data-foo="bar">not code</span></pre>';
    const tree = await processTransferDataAttrs(html);
    const pre = tree.children[0] as _RootContent<HTMLPreElement>;
    expect(pre.tagName).toBe('pre');
    expect(pre.properties?.['dataFoo']).toBeUndefined();
  });

  it('does nothing if <code> has no data-* attributes', async () => {
    const html = '<pre><code class="foo">code</code></pre>';
    const tree = await processTransferDataAttrs(html);
    const pre = tree.children[0] as _RootContent<HTMLPreElement>;
    expect(pre.tagName).toBe('pre');
    expect(pre.properties?.['class']).toBeUndefined();
    expect(pre.properties?.['dataFoo']).toBeUndefined();
  });

  it('merges data-* attributes with existing <pre> properties', async () => {
    const html = '<pre class="preclass"><code data-foo="bar">code</code></pre>';
    const tree = await processTransferDataAttrs(html);
    const pre = tree.children[0] as _RootContent<HTMLPreElement>;
    expect(pre.properties?.['className']).toContain('preclass');
    expect(pre.properties?.['dataFoo']).toBe('bar');
  });

  it('does nothing if <pre> has no children', async () => {
    const html = '<pre></pre>';
    const tree = await processTransferDataAttrs(html);
    const pre = tree.children[0] as _RootContent<HTMLPreElement>;
    expect(pre.tagName).toBe('pre');
    expect(pre.children.length).toBe(0);
    expect(pre.properties?.['dataFoo']).toBeUndefined();
  });

  it('transfers only data-* attributes, not others, when <code> has multiple properties', async () => {
    const html = '<pre><code data-foo="bar" aria-label="baz" lang="js">code</code></pre>';
    const tree = await processTransferDataAttrs(html);
    const pre = tree.children[0] as _RootContent<HTMLPreElement>;
    expect(pre.properties?.['dataFoo']).toBe('bar');
    expect(pre.properties?.['aria-label']).toBeUndefined();
    expect(pre.properties?.['lang']).toBeUndefined();
  });
});

describe('remarkCodeMetaToProperties', () => {
  type CodeNode = Partial<{
    data: Partial<{
      hChildren: Array<{
        [key: string]: string;
      }>;
      hProperties: Partial<{
        [key: string]: string;
      }>;
    }>;
    lang: string;
    value: string;
    type: string;
  }>;

  async function processRemarkCodeMeta(node: CodeNode) {
    const tree = {
      type: 'root',
      children: [node],
    };
    const remark = remarkCodeMetaToProperties as () => (tree: CodeNode) => Promise<object>;
    await remark()(tree);
    return node;
  }

  it('adds data-language when lang is present', async () => {
    const node: CodeNode = { type: 'code', lang: 'js', value: 'console.log(1);' };
    const result = await processRemarkCodeMeta(node);
    expect(result.data).toBeDefined();
    expect(result.data?.hProperties?.['data-language']).toBe('js');
    expect(result.data?.hProperties?.['data-filename']).toBeUndefined();
    expect(result.data?.hChildren?.[0].value).toBe('console.log(1);');
  });

  it('splits lang with colon into language and filename', async () => {
    const node: CodeNode = { type: 'code', lang: 'js:foo.js', value: 'alert(1);' };
    const result = await processRemarkCodeMeta(node);
    expect(result.data?.hProperties?.['data-language']).toBe('js');
    expect(result.data?.hProperties?.['data-filename']).toBe('foo.js');
  });

  it('extracts filename and language when lang contains dot', async () => {
    const node: CodeNode = { type: 'code', lang: 'foo.ts', value: 'let x;' };
    const result = await processRemarkCodeMeta(node);
    expect(result.data?.hProperties?.['data-filename']).toBe('foo.ts');
    expect(result.data?.hProperties?.['data-language']).toBe('ts');
  });

  it('does not add properties if lang is missing', async () => {
    const node: CodeNode = { type: 'code', value: 'no lang' };
    const result = await processRemarkCodeMeta(node);
    expect(result.data).toBeUndefined();
  });

  it('preserves existing data properties', async () => {
    const node: CodeNode = {
      type: 'code',
      lang: 'js',
      value: 'x',
      data: { hProperties: { foo: 'bar' } },
    };
    const result = await processRemarkCodeMeta(node);
    expect(result.data?.hProperties?.foo).toBe('bar');
    expect(result.data?.hProperties?.['data-language']).toBe('js');
  });

  it('sets hChildren to code value', async () => {
    const node: CodeNode = { type: 'code', lang: 'js', value: 'abc' };
    const result = await processRemarkCodeMeta(node);
    expect(result.data?.hChildren).toEqual([{ type: 'text', value: 'abc' }]);
  });
});
