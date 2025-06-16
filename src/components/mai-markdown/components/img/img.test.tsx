'use strict';
import { afterEach, describe, it, expect } from 'bun:test';
import { cleanup, render, screen} from '@testing-library/react';

import {
  img as Img,
} from './img';

describe('Img', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders an image with given src and alt', () => {
    render(<Img src="test.jpg" alt="test image" />);
    const image = screen.getByAltText('test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test.jpg');
  });

  // can not simulate onError event

  it.todo('renders fallbackSrc when image fails to load');

  it.todo('applies fallbackStyle when fallback is shown');

  it.todo('calls handleError when image fails to load');
});



