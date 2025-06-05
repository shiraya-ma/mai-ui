'use strict';
import { afterEach, beforeEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiH5 } from './mai-h5';

describe('MaiH5', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

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
});
