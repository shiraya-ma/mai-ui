'use strict';
import { afterEach, beforeEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiH2 } from './mai-h2';

describe('MaiH2', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders with default props', () => {
    const component = <MaiH2>Test Heading</MaiH2>;
    expect(component).toBeDefined();
  });

  it('applies custom classNames', () => {
    const component = <MaiH2 classNames={{ base: 'custom-class' }}>Test Heading</MaiH2>;
    expect(component.props.classNames.base).toBe('custom-class');
  });

  it('sets color prop correctly', () => {
    const component = <MaiH2 color="primary">Test Heading</MaiH2>;
    expect(component.props.color).toBe('primary');
  });

  it('should apply id is provided', () => {
    render(<MaiH2 id="test-id" data-testid="h2">Test Heading</MaiH2>);
    const h2 = screen.getByTestId('h2');
    expect(h2).toHaveAttribute('id', 'test-id');
  });

  it('generates ID from children', () => {
    render(<MaiH2 data-testid="h2">Test Heading</MaiH2>);
    const h2 = screen.getByTestId('h2');
    expect(h2).toHaveAttribute('id', 'Test-Heading');
  });
});
