'use strict';
import { afterEach, beforeEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiH3 } from './mai-h3';

describe('MaiH3', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

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
});
