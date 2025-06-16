'use strict';
import { afterEach, beforeEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiH4 } from './mai-h4';

describe('MaiH4', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders with default props', () => {
    const component = <MaiH4>Test Heading</MaiH4>;
    expect(component).toBeDefined();
  });

  it('applies custom classNames', () => {
    const component = <MaiH4 classNames={{ base: 'custom-class' }}>Test Heading</MaiH4>;
    expect(component.props.classNames.base).toBe('custom-class');
  });

  it('sets color prop correctly', () => {
    const component = <MaiH4 color="primary">Test Heading</MaiH4>;
    expect(component.props.color).toBe('primary');
  });

  it('should apply id is provided', () => {
    render(<MaiH4 id="test-id" data-testid="h4">Test Heading</MaiH4>);
    const h4 = screen.getByTestId('h4');
    expect(h4).toHaveAttribute('id', 'test-id');
  });

  it('generates ID from children', () => {
    render(<MaiH4 data-testid="h4">Test Heading</MaiH4>);
    const h4 = screen.getByTestId('h4');
    expect(h4).toHaveAttribute('id', 'Test-Heading');
  });
});
