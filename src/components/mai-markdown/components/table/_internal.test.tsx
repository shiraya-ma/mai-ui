'use strict';
import { afterEach, describe, it, expect, spyOn } from 'bun:test';

import {
  parseChildren,
  parseProps,
} from './_internal';

describe('parseChildren', () => {
  const originalConsoleError = console.error;

  afterEach(() => {
    spyOn(console, 'error').mockImplementation(originalConsoleError);
  });

  it('should return undefined when children is undefined', () => {
    const result = parseChildren(undefined);
    expect(result).toBeUndefined();
  });

  it('should throw error when children is invalid structure', () => {
    spyOn(console, 'error').mockImplementation(() => undefined);

    const children = [null, 'a', undefined, 'b'];
    
    expect(() => {
      parseChildren(children);
    }).toThrowError(new Error('Invalid structure of table children'));
  });

  it('should parse children correctly', () => {
    const result = parseChildren([
      (
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
      ),
      (
        <tbody>
          <tr>
            <td>alice</td>
            <td>20</td>
          </tr>
        </tbody>
      ),
    ]);

    expect(result).toStrictEqual({
      columns: [
        'name',
        'age',
      ],
      rows: [
        {name: 'alice', age: '20'},
      ],
    });
  });

  it('should parse children correctly multiple rows', () => {
    const result = parseChildren([
      (
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
      ),
      (
        <tbody>
          <tr>
            <td>alice</td>
            <td>20</td>
          </tr>
          <tr>
            <td>bob</td>
            <td>30</td>
          </tr>
        </tbody>
      ),
    ]);

    expect(result).toStrictEqual({
      columns: [
        'name',
        'age',
      ],
      rows: [
        {name: 'alice', age: '20'},
        {name: 'bob', age: '30'},
      ],
    });
  });

  it('should parse children correctly empty rows', () => {
    const result = parseChildren([
      (
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
      ),
      (
        <tbody></tbody>
      ),
    ]);

    expect(result).toStrictEqual({
      columns: [
        'name',
        'age',
      ],
      rows: [],
    });
  });
});

describe('parseProps', () => {
  it('should return default props when no props are provided', () => {
    const result = parseProps({});
    expect(result).toStrictEqual({
      columns: [],
      rows: [],
    });
  });

  it('should trim node from props', () => {
    const result = parseProps({
      node: 'hogehoge',
    } as any /* eslint-disable-line @typescript-eslint/no-explicit-any */);

    expect(result).toStrictEqual({
      columns: [],
      rows: [],
    });
  });

  it('should parse props correctly', () => {
    const result = parseProps({
      children: [
        (
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
        ),
        (
          <tbody>
            <tr>
              <td>1</td>
              <td>alice</td>
            </tr>
            <tr>
              <td>2</td>
              <td>bob</td>
            </tr>
          </tbody>
        ),
      ],
    });
    
    expect(result).toStrictEqual({
      columns: [
        'id',
        'name',
      ],
      rows: [
        {id: '1', name: 'alice'},
        {id: '2', name: 'bob'},
      ],
    });
  });
});
