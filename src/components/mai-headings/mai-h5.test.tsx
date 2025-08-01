'use strict';
import { afterEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';

import { MaiH5 } from './mai-h5';
import { MaiHeadingsStyleProvider } from './mai-headings-style-provider';

describe('MaiH5', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders with default props', () => {
    const component = <MaiH5>Test Heading</MaiH5>;
    expect(component).toBeDefined();
  });

  it('applies custom classNames', () => {
    const component = <MaiH5 classNames={{ base: 'custom-class' }}>Test Heading</MaiH5>;
    expect(component.props.classNames.base).toBe('custom-class');
  });

  it('sets color prop correctly', () => {
    const component = <MaiH5 color="primary">Test Heading</MaiH5>;
    expect(component.props.color).toBe('primary');
  });

  it('should apply id is provided', () => {
    render(<MaiH5 id="test-id" data-testid="h5">Test Heading</MaiH5>);
    const h5 = screen.getByTestId('h5');
    expect(h5).toHaveAttribute('id', 'test-id');
  });

  it('generates ID from children', () => {
    render(<MaiH5 data-testid="h5">Test Heading</MaiH5>);
    const h5 = screen.getByTestId('h5');
    expect(h5).toHaveAttribute('id', 'Test-Heading');
  });
    
  it('should render with provided context styles', () => {
    render(
      <MaiHeadingsStyleProvider context={{
        5: {base: 'context-base', text: 'context-text'},
      }}>
        <MaiH5 data-testid="h5" classNames={{
          base: 'custom-base',
          text: 'custom-text',
        }}>Test Heading</MaiH5>
      </MaiHeadingsStyleProvider>
    );

    const h5 = screen.getByTestId('h5');
    const text = h5.querySelector('[data-slot="text"]');
    expect(h5).toHaveClass('context-base custom-base');
    expect(text).toHaveClass('context-text custom-text');
  });
});
