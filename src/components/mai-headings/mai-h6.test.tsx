'use strict';
import { afterEach, beforeEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiH6 } from './mai-h6';

describe('MaiH6', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

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
});
