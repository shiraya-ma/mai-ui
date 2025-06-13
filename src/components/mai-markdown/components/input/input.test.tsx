'use strict';
import { afterEach, beforeEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

import { input as Input } from './input';

describe('Input', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders a checkbox when type is checkbox', () => {
    render(<Input type="checkbox" checked={true} data-label="Check me" data-testid='test-checkbox'/>);
    const checkbox = screen.getByTestId('test-checkbox');
    expect(checkbox).toBeInTheDocument();

    const label = screen.getByText('Check me');
    expect(label).toBeInTheDocument();
    expect(label.classList).toContain('before:content-[\'\']');
  });

  it('renders an input when type is not checkbox', () => {
    render(<Input type="text" value="hello" data-label="Label" data-testid='test-input'/>);
    const input = screen.getByTestId('test-input');
    expect(input).toBeInTheDocument();

    expect(input.querySelector('input')?.getAttribute('type')).not.toBe('checkbox');
  });

  it('renders checkbox unchecked when checked is false', () => {
    render(<Input type="checkbox" checked={false} data-label="Unchecked" data-testid='test-checkbox'/>);
    const checkbox = screen.getByTestId('test-checkbox');
    expect(checkbox).toBeInTheDocument();

    const input = checkbox.querySelector('input[type="checkbox"]') as HTMLInputElement | undefined;
    expect(input).toBeInTheDocument();
    expect(input?.checked).not.toBe(true);
  });

  it('renders input with undefined value as empty text', () => {
    render(<Input type="text" data-label="No value" data-testid='test-input'/>);
    const input = screen.getByTestId('test-input') as HTMLInputElement | undefined;
    expect(input).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toBe('');
  });

  it('renders input with number value', () => {
    render(<Input type="number" value={123} data-label="Number" data-testid='test-input'/>);
    const input = screen.getByTestId('test-input') as HTMLInputElement | undefined;
    expect(input).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toBe('123');
  });
});
