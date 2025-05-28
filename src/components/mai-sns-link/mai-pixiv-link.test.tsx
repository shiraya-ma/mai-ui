'use client';
import { afterEach,  beforeEach, describe, expect, it } from 'bun:test';
import { cleanup, render, screen } from "@testing-library/react";
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiPixivLink } from "./mai-pixiv-link";

describe("MaiPixivLink", () => { 
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render a link with the correct href", () => {
    render(<MaiPixivLink pixivID='mai_ui'/>);
    const link = screen.getByRole("button");
    expect(link).toHaveAttribute("href", "https://www.pixiv.net/users/mai_ui");
  });

  it("should render the Pixiv icon", () => {
    render(<MaiPixivLink />);
    const link = screen.getByRole("button");
    const icon = link.querySelector("svg");
    expect(icon).toHaveClass("mi-pixiv");
  });
  
  it('applies custom className', () => {
    render(<MaiPixivLink pixivID='mai_ui' className='custom-class'/>);
    const link = screen.getByRole("button");
    expect(link).toHaveClass('custom-class');
  });
});
