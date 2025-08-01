'use strict';
/* eslint-disable @typescript-eslint/no-require-imports */
import { afterEach, describe, expect, it, spyOn } from 'bun:test';
import { render, cleanup } from "@testing-library/react";

import {
  MaiArticleDateInfo,
} from './date-info';

import {
  DateInfoOptions,
  getDateInfoProps,
} from './_internal';

describe('MaiArticleDateInfo', () => {
  const originalGetDateInfoProps = getDateInfoProps;

  const mockDateInfoOption: DateInfoOptions = {
    createdAt: '2024-06-01',
    updatedAt: '2024-06-10',
  };

  const mockDateInfo = {
    dates: [
      { label: 'Published', date: '2024-06-01' },
      { label: 'Updated', date: '2024-06-10' },
    ],
  };

  afterEach(() => {
    cleanup();

    spyOn(require('./_internal'), 'getDateInfoProps').mockImplementation(originalGetDateInfoProps);
  });

  it('renders date labels and values', () => {
    spyOn(require('./_internal'), 'getDateInfoProps').mockImplementation(() => mockDateInfo);

    const { getByText } = render(
      <MaiArticleDateInfo dateInfo={{
        createdAt: '2024-06-01',
        updatedAt: '2024-06-10',
      }}/>
    );
    
    expect(getByText('Published')).toBeInTheDocument();
    expect(getByText('2024-06-01')).toBeInTheDocument();
    expect(getByText('Updated')).toBeInTheDocument();
    expect(getByText('2024-06-10')).toBeInTheDocument();
  });

  it('applies custom className and classNames.dateInfo', () => {
    const { container } = render(
      <MaiArticleDateInfo
        dateInfo={mockDateInfoOption}
        className="custom-class"
        classNames={{ dateInfo: 'custom-date-info' }}
      />
    );
    const div = container.querySelector('[data-slot="date-info"]');
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveClass('custom-date-info');
  });

  it('spreads extra props to the root div', () => {
    const { container } = render(
      <MaiArticleDateInfo dateInfo={mockDateInfoOption} data-testid="date-info-root" />
    );
    expect(container.querySelector('[data-testid="date-info-root"]')).toBeInTheDocument();
  });

  it('renders nothing if dates array is empty', () => {
    spyOn(require('./_internal'), 'getDateInfoProps').mockImplementation(() => ({dates: []}));

    const { container } = render(
      <MaiArticleDateInfo dateInfo={mockDateInfoOption} />
    );
    expect(container.querySelectorAll('p').length).toBe(0);
  });
});