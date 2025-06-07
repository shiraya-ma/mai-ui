'use strict';
import { afterEach, beforeEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiH1 } from './mai-h1';
import { MaiHeadingsStyleProvider } from './mai-headings-style-provider';

describe('MaiH1', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders with default props', () => {
    const component = <MaiH1>Test Heading</MaiH1>;
    expect(component).toBeDefined();
  });

  it('applies custom classNames', () => {
    const component = <MaiH1 classNames={{ base: 'custom-class' }}>Test Heading</MaiH1>;
    expect(component.props.classNames.base).toBe('custom-class');
  });

  it('sets color prop correctly', () => {
    const component = <MaiH1 color="primary">Test Heading</MaiH1>;
    expect(component.props.color).toBe('primary');
  });

  it('should apply id is provided', () => {
    render(<MaiH1 id="test-id" data-testid="h1">Test Heading</MaiH1>);
    const h1 = screen.getByTestId('h1');
    expect(h1).toHaveAttribute('id', 'test-id');
  });

  it('generates ID from children', () => {
    render(<MaiH1 data-testid="h1">Test Heading</MaiH1>);
    const h1 = screen.getByTestId('h1');
    expect(h1).toHaveAttribute('id', 'Test-Heading');
  });

  it('should render with provided context styles', () => {
    render(
      <MaiHeadingsStyleProvider context={{
        1: {base: 'context-base', text: 'context-text'},
      }}>
        <MaiH1 data-testid="h1" classNames={{
          base: 'custom-base',
          text: 'custom-text',
        }}>Test Heading</MaiH1>
      </MaiHeadingsStyleProvider>
    );

    const h1 = screen.getByTestId('h1');
    const text = h1.querySelector('[data-slot="text"]');
    expect(h1).toHaveClass('context-base custom-base');
    expect(text).toHaveClass('context-text custom-text');
  });
});
