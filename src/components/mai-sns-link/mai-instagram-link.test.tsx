'use client';
import { afterEach,  beforeEach, describe, expect, it } from 'bun:test';
import { cleanup, render, screen } from "@testing-library/react";
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiInstagramLink } from "./mai-instagram-link";

describe("MaiInstagramLink", () => { 
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render a link with the correct href", () => {
    render(<MaiInstagramLink instagramID='mai_ui'/>);
    const link = screen.getByRole("button");
    expect(link).toHaveAttribute("href", "https://www.instagram.com/mai_ui");
  });

  it("should render the Instagram icon", () => {
    render(<MaiInstagramLink />);
    const link = screen.getByRole("button");
    const icon = link.querySelector("svg");
    expect(icon).toHaveClass("bi-instagram");
  });
  
  it('applies custom className', () => {
    render(<MaiInstagramLink instagramID='mai_ui' className='custom-class'/>);
    const link = screen.getByRole("button");
    expect(link).toHaveClass('custom-class');
  });
});
