'use strict';
import { describe, it, expect } from 'bun:test';
import { Root, RootContent } from 'hast';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';

import {
  rehypeOnlyChildAnchor,
  rehypeRemoveParagraphForCardLink,
} from './internal';

function processHtml(html: string): Promise<Root> {
  return unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeOnlyChildAnchor)
    .run(unified().use(rehypeParse, { fragment: true }).parse(html));
}

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
