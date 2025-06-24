'use strict';
import { afterEach, describe, expect, it } from 'bun:test';
import { render, screen, cleanup } from "@testing-library/react";

import {
  MaiArticleContainer,
} from './container';

describe('MaiArticleContainer', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders children correctly', () => {
    render(
      <MaiArticleContainer>
        <div data-testid="child">Hello</div>
      </MaiArticleContainer>
    );
    expect(screen.getByTestId('child')).toHaveTextContent('Hello');
  });

  it('applies custom className', () => {
    render(
      <MaiArticleContainer className="custom-class">
        <span>Test</span>
      </MaiArticleContainer>
    );
    const article = screen.getByRole('article');
    expect(article).toHaveClass('custom-class');
  });

  it('applies glassy styles when isGlassy is true', () => {
    render(
      <MaiArticleContainer isGlassy>
        <span>Glassy</span>
      </MaiArticleContainer>
    );
    const article = screen.getByRole('article');
    expect(article.className).toMatch(/bg-white\/30/);
    expect(article.className).toMatch(/backdrop-blur-md/);
    expect(article.className).toMatch(/lg:border/);
  });

  it('applies default styles when isGlassy is false', () => {
    render(
      <MaiArticleContainer>
        <span>Default</span>
      </MaiArticleContainer>
    );
    const article = screen.getByRole('article');
    expect(article.className).toMatch(/lg:bg-white/);
    expect(article.className).toMatch(/lg:shadow-medium/);
  });

  it('sets data-slot attribute to container', () => {
    render(
      <MaiArticleContainer>
        <span>Slot</span>
      </MaiArticleContainer>
    );
    const article = screen.getByRole('article');
    expect(article).toHaveAttribute('data-slot', 'container');
  });

  it('forwards additional props to the article element', () => {
    render(
      <MaiArticleContainer id="test-article" aria-label="main article">
        <span>Props</span>
      </MaiArticleContainer>
    );
    const article = screen.getByRole('article');
    expect(article).toHaveAttribute('id', 'test-article');
    expect(article).toHaveAttribute('aria-label', 'main article');
  });
});
