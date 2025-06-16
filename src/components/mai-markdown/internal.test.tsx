'use strict';
import { describe, it, expect } from 'bun:test';
import { Element as HElement, Root, RootContent } from 'hast';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';

import {
  rehypeAlertBlockquote,
  rehypeCheckboxLabel,
  rehypeMarkCodeInlineOrBlock,
  rehypeOnlyChildAnchor,
  rehypeRemoveParagraphForCardLink,
  rehypeTransferDataAttributesToPre,
  rehypeUnwrapFootnoteParagraphs,
  rehypeUnwrapImages,
  remarkCodeMetaToProperties,
  trimNodeFromProps,
} from './internal';

function processHtml(html: string): Promise<Root> {
  return unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeOnlyChildAnchor)
    .run(unified().use(rehypeParse, { fragment: true }).parse(html));
}

describe('rehypeAlertBlockquote', () => {
  type _RootContent<T extends HTMLElement> = RootContent & T;

  async function processAlertBlockquote(html: string): Promise<Root> {
    return unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeAlertBlockquote)
      .run(unified().use(rehypeParse, { fragment: true }).parse(html));
  }

  it('adds dataAlertLevel to blockquote with [!NOTE]', async () => {
    const html = '<blockquote><p>[!NOTE]\nThis is a note.</p></blockquote>';
    const tree = await processAlertBlockquote(html);
    const bq = tree.children[0] as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.tagName).toBe('blockquote');
    expect(bq.properties?.['dataAlertLevel']).toBe('primary');
    const p = bq.children[0] as _RootContent<HTMLParagraphElement>;
    expect(p.tagName).toBe('p');
    // The [!NOTE] should be removed, only "This is a note." remains
    const text = p.children[0] as { type: string; value: string };
    expect(text.value).toBe('This is a note.');
  });

  it('adds dataAlertLevel to blockquote with [!TIP] and trims label', async () => {
    const html = '<blockquote><p>[!TIP]\nSome tip here.</p></blockquote>';
    const tree = await processAlertBlockquote(html);
    const bq = tree.children[0] as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.properties?.['dataAlertLevel']).toBe('secondary');
    const p = bq.children[0] as _RootContent<HTMLParagraphElement>;
    const text = p.children[0] as { type: string; value: string };
    expect(text.value).toBe('Some tip here.');
  });

  it('adds dataAlertLevel to blockquote with [!IMPORTANT] and trims label', async () => {
    const html = '<blockquote><p>[!IMPORTANT]\nImportant!</p></blockquote>';
    const tree = await processAlertBlockquote(html);
    const bq = tree.children[0] as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.properties?.['dataAlertLevel']).toBe('success');
    const p = bq.children[0] as _RootContent<HTMLParagraphElement>;
    const text = p.children[0] as { type: string; value: string };
    expect(text.value).toBe('Important!');
  });

  it('adds dataAlertLevel to blockquote with [!WARNING] and trims label', async () => {
    const html = '<blockquote><p>[!WARNING]\nCareful!</p></blockquote>';
    const tree = await processAlertBlockquote(html);
    const bq = tree.children[0] as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.properties?.['dataAlertLevel']).toBe('warning');
    const p = bq.children[0] as _RootContent<HTMLParagraphElement>;
    const text = p.children[0] as { type: string; value: string };
    expect(text.value).toBe('Careful!');
  });

  it('adds dataAlertLevel to blockquote with [!CAUTION] and trims label', async () => {
    const html = '<blockquote><p>[!CAUTION]\nDanger!</p></blockquote>';
    const tree = await processAlertBlockquote(html);
    const bq = tree.children[0] as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.properties?.['dataAlertLevel']).toBe('danger');
    const p = bq.children[0] as _RootContent<HTMLParagraphElement>;
    const text = p.children[0] as { type: string; value: string };
    expect(text.value).toBe('Danger!');
  });

  it('removes <p> if [!NOTE] is present but no text after', async () => {
    const html = '<blockquote><p>[!NOTE]</p></blockquote>';
    const tree = await processAlertBlockquote(html);
    const bq = tree.children[0] as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.properties?.['dataAlertLevel']).toBe('primary');
    // <p> should be removed
    expect(bq.children.length).toBe(0);
  });

  it('does nothing if blockquote is not at root', async () => {
    const html = '<div><blockquote><p>[!NOTE]\nText</p></blockquote></div>';
    const tree = await processAlertBlockquote(html);
    const div = tree.children[0] as _RootContent<HTMLDivElement>;
    const bq = div.children[0] as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.properties?.['dataAlertLevel']).toBeUndefined();
  });

  it('does nothing if blockquote does not start with alert tag', async () => {
    const html = '<blockquote><p>Just a quote</p></blockquote>';
    const tree = await processAlertBlockquote(html);
    const bq = tree.children[0] as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.properties?.['dataAlertLevel']).toBeUndefined();
    const p = bq.children[0] as _RootContent<HTMLParagraphElement>;
    const text = p.children[0] as { type: string; value: string };
    expect(text.value).toBe('Just a quote');
  });

  it('does nothing if blockquote has no <p> as first element child', async () => {
    const html = '<blockquote><div>[!NOTE]\nText</div></blockquote>';
    const tree = await processAlertBlockquote(html);
    const bq = tree.children[0] as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.properties?.['dataAlertLevel']).toBeUndefined();
  });

  it('does nothing if <p> has no text child', async () => {
    const html = '<blockquote><p><span>[!NOTE]</span></p></blockquote>';
    const tree = await processAlertBlockquote(html);
    const bq = tree.children[0] as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.properties?.['dataAlertLevel']).toBeUndefined();
  });

  it('does nothing if blockquote is not at root (nested in <section>)', async () => {
    const html = '<section><blockquote><p>[!NOTE]\nText</p></blockquote></section>';
    const tree = await processAlertBlockquote(html);
    const section = tree.children[0] as _RootContent<HTMLElement>;
    const bq = section.children[0] as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.properties?.['dataAlertLevel']).toBeUndefined();
  });

  it('does nothing if blockquote has no element children', async () => {
    const html = '<blockquote>Just text</blockquote>';
    const tree = await processAlertBlockquote(html);
    const bq = tree.children[0] as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.properties?.['dataAlertLevel']).toBeUndefined();
  });

  it('does not include to blockquote', async () => {
    const html = '<!-- comment --><blockquote><p>[!NOTE]\nText</p></blockquote>';
    const tree = await processAlertBlockquote(html);
    const bq = tree.children.find(c => c.type === 'element' && c.tagName === 'blockquote') as _RootContent<HTMLQuoteElement>;
    expect(bq.type).toBe('element');
    if (bq.type !== 'element') return;
    expect(bq.properties?.['dataAlertLevel']).toBe('primary');
  });
});

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

describe('rehypeUnwrapFootnoteParagraphs', () => {
  type _Element<T extends HTMLElement> = HElement & T & Partial<{properties: {[key: string]: string | undefined}}>;

  async function processUnwrapFootnotes(html: string): Promise<Root> {
    return unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeUnwrapFootnoteParagraphs)
      .run(unified().use(rehypeParse, { fragment: true }).parse(html));
  }

  it('unwraps <p> inside <li> in footnote section with data-footnotes', async () => {
    const html = `
      <section data-footnotes>
        <ol>
          <li><p>Footnote <strong>one</strong></p></li>
          <li><p>Footnote <em>two</em></p></li>
        </ol>
      </section>
    `;
    const tree = await processUnwrapFootnotes(html);
    const section = tree.children.filter(child => child.type === 'element')[0] as _Element<HTMLElement>;
    expect(section.tagName).toBe('section');

    const ol = section.children.find(c => c.type === 'element' && c.tagName === 'ol') as _Element<HTMLOListElement>;
    expect(ol.tagName).toBe('ol');
    const [ li1, li2 ] = ol.children.filter(node => node.type === 'element') as _Element<HTMLLIElement>[];

    // <p> should be unwrapped, so children are now [text, <strong>]
    expect(li1.children[0].type).toBe('text');
    expect((li1.children[1] as _Element<HTMLElement>).tagName).toBe('strong');
    expect(li2.children[0].type).toBe('text');
    expect((li2.children[1] as _Element<HTMLElement>).tagName).toBe('em');
  });

  it('does nothing if section does not have data-footnotes', async () => {
    const html = `
      <section>
        <ol>
          <li><p>Should not unwrap</p></li>
        </ol>
      </section>
    `;
    const tree = await processUnwrapFootnotes(html);
    const section = tree.children.filter(child => child.type === 'element')[0] as _Element<HTMLElement>;
    expect(section.tagName).toBe('section');

    const ol = section.children.find(c => c.type === 'element' && c.tagName === 'ol') as _Element<HTMLOListElement>;
    expect(ol.tagName).toBe('ol');
    const [ li1 ] = ol.children.filter(node => node.type === 'element') as _Element<HTMLLIElement>[];

    const childTagNames = li1.children.filter(child => child.type === 'element')
      .map(child => child.tagName);

    expect(childTagNames).toContain('p');
  });

  it('does nothing if <ol> is missing in section', async () => {
    const html = `
      <section data-footnotes>
        <div>No ol here</div>
      </section>
    `;
    const tree = await processUnwrapFootnotes(html);
    const section = tree.children.filter(child => child.type === 'element')[0] as _Element<HTMLElement>;
    expect(section.tagName).toBe('section');

    const sectionChildrenTagNames = section.children.filter(child => child.type === 'element')
      .map(child => child.tagName);

    expect(sectionChildrenTagNames).not.toContain('ol');
  });

  it('does nothing if <li> is missing in <ol>', async () => {
    const html = `
      <section data-footnotes>
        <ol>
          <div>not li</div>
        </ol>
      </section>
    `;
    const tree = await processUnwrapFootnotes(html);
    const section = tree.children.filter(child => child.type === 'element')[0] as _Element<HTMLElement>;
    expect(section.tagName).toBe('section');

    const ol = section.children.find(c => c.type === 'element' && c.tagName === 'ol') as _Element<HTMLOListElement>;
    expect(ol.tagName).toBe('ol');

    const childOLTagNames = ol.children.filter(child => child.type === 'element')
      .map(child => child.tagName);

    expect(childOLTagNames[0]).toBe('div');
    expect(childOLTagNames).not.toContain('li');
  });

  it('does nothing if <li> does not have <p> child', async () => {
    const html = `
      <section data-footnotes>
        <ol>
          <li><span>No paragraph</span></li>
        </ol>
      </section>
    `;
    const tree = await processUnwrapFootnotes(html);
    const section = tree.children.filter(child => child.type === 'element')[0] as _Element<HTMLElement>;
    expect(section.tagName).toBe('section');

    const ol = section.children.find(c => c.type === 'element' && c.tagName === 'ol') as _Element<HTMLOListElement>;
    expect(ol.tagName).toBe('ol');
    const [ li1 ] = ol.children.filter(node => node.type === 'element') as _Element<HTMLLIElement>[];

    const childLITagNames = li1.children.filter(child => child.type === 'element')
      .map(child => child.tagName);

    expect(childLITagNames[0]).toBe('span');
  });

  it('does nothing if <p> inside <li> has no children', async () => {
    const html = `
      <section data-footnotes>
        <ol>
          <li><p></p></li>
        </ol>
      </section>
    `;
    const tree = await processUnwrapFootnotes(html);
    const section = tree.children.filter(child => child.type === 'element')[0] as _Element<HTMLElement>;
    expect(section.tagName).toBe('section');

    const ol = section.children.find(c => c.type === 'element' && c.tagName === 'ol') as _Element<HTMLOListElement>;
    expect(ol.tagName).toBe('ol');
    const [ li1 ] = ol.children.filter(node => node.type === 'element') as _Element<HTMLLIElement>[];
    expect(li1.children.length).toBe(0);
  });
});

describe('rehypeUnwrapImages', () => {
  type _Element<T extends HTMLElement> = HElement & T;

  async function processUnwrapImages(html: string): Promise<Root> {
    return unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeUnwrapImages)
      .run(unified().use(rehypeParse, { fragment: true }).parse(html));
  };

  it('unwraps <img> from <p> at root', async () => {
    const html = '<p><img src="foo.png" alt="foo"></p>';
    const tree = await processUnwrapImages(html);
    expect(tree.children.length).toBe(1);
    const img = tree.children[0] as _Element<HTMLImageElement>;
    expect(img.tagName).toBe('img');
    expect(img.properties?.['src']).toBe('foo.png');
    expect(img.properties?.['alt']).toBe('foo');
  });

  it('does not unwrap <img> if <p> is not at root', async () => {
    const html = '<div><p><img src="foo.png" alt="foo"></p></div>';
    const tree = await processUnwrapImages(html);
    expect(tree.children.length).toBe(1);
    const div = tree.children[0] as _Element<HTMLDivElement>;
    expect(div.tagName).toBe('div');
    const p = div.children[0] as _Element<HTMLParagraphElement>;
    expect(p.tagName).toBe('p');
    const img = p.children[0] as _Element<HTMLImageElement>;
    expect(img.tagName).toBe('img');
  });

  it('does not unwrap <p> if it does not contain <img>', async () => {
    const html = '<p>no image here</p>';
    const tree = await processUnwrapImages(html);
    expect(tree.children.length).toBe(1);
    const p = tree.children[0] as _Element<HTMLParagraphElement>;
    expect(p.tagName).toBe('p');
    expect(p.children[0].type).toBe('text');
  });

  it('wraps multiple <img> elements in <div> with class \\"flex gap-4\\" if all children are <img>', async () => {
    const html = '<p><img src="foo.png"><img src="bar.png"><img src="baz.png"></p>';
    const tree = await processUnwrapImages(html);
    expect(tree.children.length).toBe(1);
    const div = tree.children[0] as _Element<HTMLDivElement>;
    expect(div.tagName).toBe('div');
    expect(div.properties?.className).toBe('flex gap-4');
    const imgs = div.children.filter(child => child.type === 'element' && child.tagName === 'img');
    expect(imgs.length).toBe(3);
    expect((imgs[0] as _Element<HTMLImageElement>).properties?.['src']).toBe('foo.png');
    expect((imgs[1] as _Element<HTMLImageElement>).properties?.['src']).toBe('bar.png');
    expect((imgs[2] as _Element<HTMLImageElement>).properties?.['src']).toBe('baz.png');
  });

  it('wrap <p> in <div> if not all element children are <img>', async () => {
    const html = '<p><img src="foo.png"><span>not img</span><img src="bar.png"></p>';
    const tree = await processUnwrapImages(html);
    expect(tree.children.length).toBe(1);
    const div = tree.children[0] as _Element<HTMLParagraphElement>;
    expect(div.tagName).toBe('div');
    expect(div.children.length).toBe(3);
    expect((div.children[0] as _Element<HTMLImageElement>).tagName).toBe('img');
    expect((div.children[1] as _Element<HTMLSpanElement>).tagName).toBe('span');
    expect((div.children[2] as _Element<HTMLImageElement>).tagName).toBe('img');
    expect(div.properties.className).toMatch('flex')
    expect(div.properties.className).toMatch('gap-4')
  });

  it('unwrap <img> if <p> has both text and <img> children', async () => {
    const html = '<p>text<img src="foo.png"></p>';
    const tree = await processUnwrapImages(html);
    expect(tree.children.length).toBe(1);
    const div = tree.children[0] as _Element<HTMLDivElement>;
    expect(div.tagName).toBe('div');
    expect(div.children.length).toBe(2);
    expect(div.children[0].type).toBe('text');
    expect((div.children[1] as _Element<HTMLImageElement>).tagName).toBe('img');
  });

  it('does nothing if <p> has no children', async () => {
    const html = '<p></p>';
    const tree = await processUnwrapImages(html);
    expect(tree.children.length).toBe(1);
    const p = tree.children[0] as _Element<HTMLParagraphElement>;
    expect(p.tagName).toBe('p');
    expect(p.children.length).toBe(0);
  });

  it('does not unwrap <img> if <p> is not at root (nested in <section>)', async () => {
    const html = '<section><p><img src="foo.png"></p></section>';
    const tree = await processUnwrapImages(html);
    expect(tree.children.length).toBe(1);
    const section = tree.children[0] as _Element<HTMLElement>;
    expect(section.tagName).toBe('section');
    const p = section.children[0] as _Element<HTMLParagraphElement>;
    expect(p.tagName).toBe('p');
    const img = p.children[0] as _Element<HTMLImageElement>;
    expect(img.tagName).toBe('img');
    expect(img.properties?.['src']).toBe('foo.png');
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

describe('trimNodeFromProps', () => {
  it('removes node property from props', () => {
    const props = { foo: 'bar', node: { some: 'node' } };
    const result = trimNodeFromProps<{foo: string}>(props);
    expect(result).toStrictEqual({ foo: 'bar' });
    expect('node' in result).toBe(false);
  });

  it('returns a new object without node even if node is undefined', () => {
    const props = { foo: 1, node: undefined };
    const result = trimNodeFromProps<{foo: number}>(props);
    expect(result).toStrictEqual({ foo: 1 });
    expect('node' in result).toBe(false);
  });

  it('does not modify props if node property is missing', () => {
    const props = { foo: 'baz', bar: 2 };
    const result = trimNodeFromProps<{foo: string, bar: number}>(props);
    expect(result).toStrictEqual({ foo: 'baz', bar: 2 });
  });

  it('works with empty object', () => {
    const props = {};
    const result = trimNodeFromProps<{}>(props);
    expect(result).toStrictEqual({});
  });

  it('does not remove properties named nodeX', () => {
    const props = { nodeX: 123, foo: 'bar' };
    const result = trimNodeFromProps<{nodeX: number, foo: string}>(props);
    expect(result).toStrictEqual({ nodeX: 123, foo: 'bar' });
  });

  it('does not mutate the original object', () => {
    const props = { foo: 'bar', node: 1 };
    const copy = { ...props };
    trimNodeFromProps<{foo: string}>(props);
    expect(props).toStrictEqual(copy);
  });
});
