'use strict';
import { describe, it, expect } from 'bun:test';

import { generateIDFromChildren } from './generate-id-from-children';

describe('generateIDFromChildren', () => {
  it('should replace single spaces with hyphens', () => {
    expect(generateIDFromChildren('Hello World')).toBe('Hello-World');
  });

  it('should replace multiple spaces with a single hyphen', () => {
    expect(generateIDFromChildren('Hello    World')).toBe('Hello-World');
  });

  it('should handle leading and trailing spaces', () => {
    expect(generateIDFromChildren('  Hello World  ')).toBe('Hello-World');
  });

  it('should handle empty string', () => {
    expect(generateIDFromChildren('')).toBe('');
  });

  it('should handle string with only spaces', () => {
    expect(generateIDFromChildren('     ')).toBe('');
  });

  it('should handle strings with special characters', () => {
    expect(generateIDFromChildren('Hello, World!')).toBe('Hello,-World!');
  });

  it('should handle strings with tabs and newlines', () => {
    expect(generateIDFromChildren('Hello\tWorld\nTest')).toBe('Hello-World-Test');
  });

  it('should not collapse non-space whitespace', () => {
    expect(generateIDFromChildren('Hello\t\tWorld')).toBe('Hello-World');
  });
});
