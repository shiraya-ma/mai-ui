'use strict';
import { afterEach,  describe, expect, it, } from 'bun:test';
import { cleanup, render, screen } from '@testing-library/react';

import {
  MaiModal,
} from './mai-modal';

describe('MaiModal Component', () => {
  afterEach(() => {
      cleanup();
    });

  it('should render the modal with the correct content', () => {
    render(
      <MaiModal isOpen={true}>
        <div>Test Modal Content</div>
      </MaiModal>
    );

    expect(screen.getByText('Test Modal Content')).toBeInTheDocument();
  });

  it('should not render the modal when isOpen is false', () => {
    render(
      <MaiModal isOpen={false}>
        <div>Test Modal Content</div>
      </MaiModal>
    );

    expect(screen.queryByText('Test Modal Content')).not.toBeInTheDocument();
  });
});
