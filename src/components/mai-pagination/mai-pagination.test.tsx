'use strict';
import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import { render, screen, cleanup } from "@testing-library/react";
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiPagination } from './mai-pagination';

describe('MaiPagination', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders correctly with default props', () => {
    render(<MaiPagination total={10} initialPage={1} variant="flat" />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('applies the glassy variant styles', () => {
    render(<MaiPagination total={10} initialPage={1} variant="glassy" />);
    const items = screen.getAllByRole('button');
    items.forEach((item) => {
      expect(item).toHaveClass('border border-white bg-white/25 backdrop-blur-sm');
    });
  });

  it('applies compact styles when isCompact is true', () => {
    render(<MaiPagination total={10} initialPage={1} variant="glassy" isCompact />);
    const items = screen.getAllByRole('button');
    items.forEach((item) => {
      expect(item).toHaveClass('bg-transparent border-0 backdrop-blur-none');
    });
  });

  it('renders the correct number of pages', () => {
    render(<MaiPagination total={5} initialPage={1} variant="flat" />);
    const items = screen.getAllByRole('button');
    expect(items).toHaveLength(5);
  });

  it('renders next and previous buttons', () => {
    render(<MaiPagination total={10} initialPage={1} variant="flat" showControls/>);
    const items = screen.getAllByRole('button');
    
    expect(items.find(item => (item.getAttribute('data-slot') === 'prev'))).toBeInTheDocument()
    expect(items.find(item => (item.getAttribute('data-slot') === 'next'))).toBeInTheDocument();
  });

  it('applies custom classNames', () => {
    render(
      <MaiPagination
        total={10}
        initialPage={1}
        variant="flat"
        classNames={{ item: 'custom-item-class', wrapper: 'custom-wrapper-class' }}
      />
    );

    expect(screen.getByRole('navigation').children[0]).toHaveClass('custom-wrapper-class');
    const items = screen.getAllByRole('button');
    items.forEach((item) => {
      expect(item).toHaveClass('custom-item-class');
    });
  });
});
