'use strict';
import { describe, expect, it } from 'bun:test';
import { _isExternalHref } from './internal';

describe('_isExternalHref', () => {
  it('should return true for external URLs with http', () => {
    expect(_isExternalHref('http://example.com')).toBe(true);
  });

  it('should return true for external URLs with https', () => {
    expect(_isExternalHref('https://example.com')).toBe(true);
  });

  it('should return false for relative URLs', () => {
    expect(_isExternalHref('/about')).toBe(false);
  });

  it('should return false for anchor links', () => {
    expect(_isExternalHref('#section')).toBe(false);
  });

  it('should return false for empty strings', () => {
    expect(_isExternalHref('')).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(_isExternalHref(undefined as unknown as string)).toBe(false);
  });

  it('should return false for null', () => {
    expect(_isExternalHref(null as unknown as string)).toBe(false);
  });
});
