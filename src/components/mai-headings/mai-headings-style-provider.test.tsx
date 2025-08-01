'use strict';
import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';
import React, { type PropsWithChildren } from 'react';

import { MaiHeadingsStyleContext, type MaiHeadingsStyleContextProps } from './_internal';
import { MaiHeadingsStyleProvider } from './mai-headings-style-provider';
import { MaiH1 } from './mai-h1';

describe('MaiHeadingsStyleProvider', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders children', () => {
    const { getByText } = render(
      <MaiHeadingsStyleProvider>
        <span>Test Child</span>
      </MaiHeadingsStyleProvider>
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('provides context value when context prop is given', () => {
    let received: MaiHeadingsStyleContextProps | undefined;
    const TestConsumer = () => {
      received = React.useContext(MaiHeadingsStyleContext);
      return null;
    };
    render(
      <MaiHeadingsStyleProvider context={{
        1: {base: 'custom-base', text: 'custom-text'},
      }}>
        <TestConsumer />
      </MaiHeadingsStyleProvider>
    );
    expect(received?.[1]).toStrictEqual({
      base: 'custom-base',
      text: 'custom-text',
      link: '',
      icon: {
        anchor: '',
        base  : '',
      },
    });
  });

  it('provides initial object as context value when context prop is not given', () => {
    let received: MaiHeadingsStyleContextProps | undefined;
    const TestConsumer = () => {
      received = React.useContext(MaiHeadingsStyleContext);
      return null;
    };
    render(
      <MaiHeadingsStyleProvider>
        <TestConsumer />
      </MaiHeadingsStyleProvider>
    );
    expect(received?.[1]).toStrictEqual({
      base: '',
      text: '',
      link: '',
      icon: {
        anchor: '',
        base  : '',
      },
    });
  });

  it('should apply context styles to children components', () => {
    const wrapper = ({children}: PropsWithChildren) => (
      <MaiHeadingsStyleProvider context={{1: {base: 'custom-base', text: 'custom-text'}}}>
        {children}
      </MaiHeadingsStyleProvider>
    );

    render((
      <MaiH1 data-testid='test-h1'>Test Headings</MaiH1>
    ), {wrapper});

    const maiH1 = screen.getByTestId('test-h1');
    const text = maiH1.querySelector('span[data-slot="text"]');

    expect(maiH1.classList).toContain('custom-base');
    expect(text?.classList).toContain('custom-text');
  });
});
