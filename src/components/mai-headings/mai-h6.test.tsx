'use strict';
import { afterEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';

import { MaiH6 } from './mai-h6';
import { MaiHeadingsStyleProvider } from './mai-headings-style-provider';

describe('MaiH6', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders with default props', () => {
    const component = <MaiH6>Test Heading</MaiH6>;
    expect(component).toBeDefined();
  });

  it('applies custom classNames', () => {
    const component = <MaiH6 classNames={{ base: 'custom-class' }}>Test Heading</MaiH6>;
    expect(component.props.classNames.base).toBe('custom-class');
  });

  it('sets color prop correctly', () => {
    const component = <MaiH6 color="primary">Test Heading</MaiH6>;
    expect(component.props.color).toBe('primary');
  });

  it('should apply id is provided', () => {
    render(<MaiH6 id="test-id" data-testid="h6">Test Heading</MaiH6>);
    const h6 = screen.getByTestId('h6');
    expect(h6).toHaveAttribute('id', 'test-id');
  });

  it('generates ID from children', () => {
    render(<MaiH6 data-testid="h6">Test Heading</MaiH6>);
    const h6 = screen.getByTestId('h6');
    expect(h6).toHaveAttribute('id', 'Test-Heading');
  });
    
  it('should render with provided context styles', () => {
    render(
      <MaiHeadingsStyleProvider context={{
        6: {base: 'context-base', text: 'context-text'},
      }}>
        <MaiH6 data-testid="h6" classNames={{
          base: 'custom-base',
          text: 'custom-text',
        }}>Test Heading</MaiH6>
      </MaiHeadingsStyleProvider>
    );

    const h6 = screen.getByTestId('h6');
    const text = h6.querySelector('[data-slot="text"]');
    expect(h6).toHaveClass('context-base custom-base');
    expect(text).toHaveClass('context-text custom-text');
  });
});
