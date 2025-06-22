'use strict';
import { afterEach, describe, expect, it } from 'bun:test';
import { render, cleanup } from "@testing-library/react";

import {
  MaiArticleLayout,
} from './mai-article-layout';

describe('MaiArticleLayout', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders without crashing with minimal props', () => {
    const { container } = render(<MaiArticleLayout />);
    expect(container).toBeTruthy();
  });

  it('renders the title when provided', () => {
    const { getByText } = render(<MaiArticleLayout title="Test Title" />);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('renders the body as markdown when provided', () => {
    const body = '# Hello World';
    const { getByText } = render(<MaiArticleLayout body={body} />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('renders the thumbnail when provided', () => {
    const thumbnailProps = {src: 'test.jpg', alt: 'thumbnail'};
    const { getByAltText } = render(<MaiArticleLayout thumbnail={thumbnailProps} />);
    expect(getByAltText('thumbnail')).toBeInTheDocument();
  });

  it('renders the dateInfo when provided', () => {
    const dateInfoProps = {dateInfo:{createdAt: '2024-06-01', updatedAt: '2024-06-10'}};
    const { getByText } = render(<MaiArticleLayout dateInfo={dateInfoProps} />);
    expect(getByText('2024/06/01 00:00:00')).toBeInTheDocument();
  });

  it('renders the divider', () => {
    const { container } = render(<MaiArticleLayout />);
    // Assuming divider renders an <hr> or has a test id
    expect(container.querySelector('hr') || container.querySelector('[data-testid="mai-article-divider"]')).toBeTruthy();
  });

  it('passes container props to MaiArticleContainer', () => {
    const containerProps = {'data-testid': 'mai-article-container'} as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    const { getByTestId } = render(<MaiArticleLayout container={containerProps} />);
    expect(getByTestId('mai-article-container')).toBeInTheDocument();
  });
});
