'use client';
import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, render, screen } from "@testing-library/react";

import {
  MaiMarkdown
} from './mai-markdown';

describe('MaiMarkdown', () => {
  afterEach(() => cleanup());

  it('renders markdown content as HTML', () => {
    render(<MaiMarkdown children="# Hello, Markdown!" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello, Markdown!');
  });

  it('renders GFM features like tables', () => {
    render(<MaiMarkdown children={`| A | B |\n|---|---|\n| 1 | 2 |`} />);
    expect(screen.getByRole('grid')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders inline code and code blocks', () => {
    render(<MaiMarkdown children={'Here is `inline code`.\n\n```\nblock code\n```'} />);
    expect(screen.getByText('inline code')).toBeInTheDocument();
    expect(screen.getByText('block code')).toBeInTheDocument();
  });

  it('renders blockquotes', () => {
    render(<MaiMarkdown children={'> This is a quote'} />);
    expect(screen.getByText('This is a quote')).toBeInTheDocument();
  });

  it('renders checkboxes', () => {
    render(<MaiMarkdown children={'- [x] checked\n- [ ] not checked'} />);
    expect(screen.getByLabelText('checked')).toBeChecked();
    expect(screen.getByLabelText('not checked')).not.toBeChecked();
  });

  it('renders images', () => {
    render(<MaiMarkdown children={'![alt text](image.png)'} />);
    expect(screen.getByAltText('alt text')).toBeInTheDocument();
  });

  it('renders links', () => {
    render(<MaiMarkdown children={'[Google](https://google.com)'} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://google.com');
  });

  it('renders raw HTML', () => {
    render(<MaiMarkdown children={'<span data-testid="raw-html">raw</span>'} />);
    expect(screen.getByTestId('raw-html')).toHaveTextContent('raw');
  });
});
