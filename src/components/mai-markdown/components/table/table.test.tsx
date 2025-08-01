'use strict';
import { afterEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';

import {
  table as Table,
} from './table';

describe('Table', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders table headers', () => {
    render(
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>30</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  it('renders table rows and cells', () => {
    render(
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>30</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('supports custom table props', () => {
    render(
      <Table data-testid="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>30</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(screen.getByTestId('custom-table')).toBeInTheDocument();
  });

  it('renders no rows if rows prop is empty', () => {
    render(
      <Table data-testid="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    );
    const table = screen.getByTestId('custom-table');
    expect(table).toBeInTheDocument();
    // Only header cells should be present
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    // No data cells
    expect(table.querySelector('tbody > tr')).not.toBeInTheDocument();
    expect(table.querySelector('tbody > tr > td')).not.toBeInTheDocument();
  });
});
