'use strict';
import { describe, it, expect } from 'bun:test';

import {
  _parseDateInfo,
} from './_internal';

describe('_parseDateInfo', () => {
  it('should return formatted date info for a valid date string', () => {
    const result = _parseDateInfo('Created at', '2024-06-01T12:34:56Z');
    expect(result).toEqual({
      label: 'Created at',
      date: expect.stringMatching(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/),
    });
  });

  it('should return formatted date info for a valid Date object', () => {
    const date = new Date(2024, 5, 1, 12, 34, 56); // June is month 5 (0-based)
    const result = _parseDateInfo('Updated at', date);
    expect(result).toEqual({
      label: 'Updated at',
      date: '2024/06/01 12:34:56',
    });
  });

  it('should return formatted date info for a valid timestamp', () => {
    const date = new Date('2024-06-01T12:34:56Z');
    const result = _parseDateInfo('Created at', date.getTime());
    expect(result).toEqual({
      label: 'Created at',
      date: expect.any(String),
    });
  });

  it('should return undefined if date is undefined', () => {
    const result = _parseDateInfo('Created at', undefined);
    expect(result).toBeUndefined();
  });

  it('should throw an error for an invalid date string', () => {
    expect(() => _parseDateInfo('Created at', 'invalid-date')).toThrow('date is invalid');
  });
});
