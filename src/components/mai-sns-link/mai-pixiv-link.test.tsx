'use client';
import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, render, screen } from "@testing-library/react";

import { MaiPixivLink } from "./mai-pixiv-link";

describe("MaiPixivLink", () => { 
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
