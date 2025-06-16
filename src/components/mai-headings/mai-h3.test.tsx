'use strict';
import { afterEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';

import { MaiH3 } from './mai-h3';
import { MaiHeadingsStyleProvider } from './mai-headings-style-provider';

describe('MaiH3', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders with default props', () => {
    const component = <MaiH3>Test Heading</MaiH3>;
    expect(component).toBeDefined();
  });

  it('applies custom classNames', () => {
    const component = <MaiH3 classNames={{ base: 'custom-class' }}>Test Heading</MaiH3>;
    expect(component.props.classNames.base).toBe('custom-class');
  });

  it('sets color prop correctly', () => {
    const component = <MaiH3 color="primary">Test Heading</MaiH3>;
    expect(component.props.color).toBe('primary');
  });

  it('should apply id is provided', () => {
    render(<MaiH3 id="test-id" data-testid="h3">Test Heading</MaiH3>);
    const h3 = screen.getByTestId('h3');
    expect(h3).toHaveAttribute('id', 'test-id');
  });

  it('generates ID from children', () => {
    render(<MaiH3 data-testid="h3">Test Heading</MaiH3>);
    const h3 = screen.getByTestId('h3');
    expect(h3).toHaveAttribute('id', 'Test-Heading');
  });
    
  it('should render with provided context styles', () => {
    render(
      <MaiHeadingsStyleProvider context={{
        3: {base: 'context-base', text: 'context-text'},
      }}>
        <MaiH3 data-testid="h3" classNames={{
          base: 'custom-base',
          text: 'custom-text',
        }}>Test Heading</MaiH3>
      </MaiHeadingsStyleProvider>
    );

    const h3 = screen.getByTestId('h3');
    const text = h3.querySelector('[data-slot="text"]');
    expect(h3).toHaveClass('context-base custom-base');
    expect(text).toHaveClass('context-text custom-text');
  });
});
