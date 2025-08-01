'use client';
import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, render, screen } from "@testing-library/react";

import { MaiTwitterLink } from "./mai-twitter-link";

describe("MaiTwitterLink", () => { 
  afterEach(() => {
    cleanup();
  });

  it("should render a link with the correct href", () => {
    render(<MaiTwitterLink twitterID='mai_ui'/>);
    const link = screen.getByRole("button");
    expect(link).toHaveAttribute("href", "https://twitter.com/mai_ui");
  });

  it("should render the Twitter icon", () => {
    render(<MaiTwitterLink />);
    const link = screen.getByRole("button");
    const icon = link.querySelector("svg");
    expect(icon).toHaveClass("bi-twitter");
  });

  it("should render the X icon", () => {
    render(<MaiTwitterLink isX/>);
    const link = screen.getByRole("button");
    const icon = link.querySelector("svg");
    expect(icon).toHaveClass("bi-twitter-x");
  });
  
  it('applies custom className', () => {
    render(<MaiTwitterLink twitterID='mai_ui' className='custom-class'/>);
    const link = screen.getByRole("button");
    expect(link).toHaveClass('custom-class');
  });
});
