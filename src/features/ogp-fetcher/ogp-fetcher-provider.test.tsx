'use strict';
import { describe, it, expect, jest } from 'bun:test';
import { render } from '@testing-library/react';
import { useContext } from 'react';

import { OGPFetcherContext, type OGPFetcherFunction } from './internal';
import { OGPFetcherProvider } from './ogp-fetcher-provider';

describe('OGPFetcherProvider', () => {
  it('provides the fetcher via context', () => {
    const mockFetcher = jest.fn();

    let contextValue: OGPFetcherFunction | undefined;
    const TestComponent = () => {
      contextValue = useContext(OGPFetcherContext);
      return null;
    };

    render(
      <OGPFetcherProvider fetcher={mockFetcher}>
        <TestComponent />
      </OGPFetcherProvider>
    );

    expect(contextValue).toBe(mockFetcher);
  });

  it('renders children', () => {
    const mockFetcher = jest.fn();
    const { getByText } = render(
      <OGPFetcherProvider fetcher={mockFetcher}>
        <div>Child Element</div>
      </OGPFetcherProvider>
    );
    expect(getByText('Child Element')).toBeTruthy();
  });
});
