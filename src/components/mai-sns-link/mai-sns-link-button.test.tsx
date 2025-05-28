'use client';
import { afterEach, beforeEach, describe, expect, it, mock } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

import { MaiSNSLinkButton } from "./mai-sns-link-button";

describe("MaiSNSLinkButton", () => {  
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders a link with the correct href and target", () => {
    const url = "https://example.com";
    render(<MaiSNSLinkButton href={url} />);
    const linkElement = screen.getByRole("button");
    expect(linkElement).toHaveAttribute("href", url);
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders children inside the link", () => {
    const url = "https://example.com";
    const childText = "Click Me";
    render(<MaiSNSLinkButton href={url}>{childText}</MaiSNSLinkButton>);
    const linkElement = screen.getByRole("button");
    expect(linkElement).toHaveTextContent(childText);
  });

  it("applies the correct class name", () => {
    const url = "https://example.com";
    const customClassName = "mai-sns-link-button";
    render(<MaiSNSLinkButton href={url} className={customClassName}>Link</MaiSNSLinkButton>);
    const linkElement = screen.getByRole("button");
    expect(linkElement).toHaveClass(customClassName);
  });
  
  it('handles click events', () => {
    const handlePress = mock().mockImplementation(ev => ev.preventDefault());
    render(<MaiSNSLinkButton href="/" onClick={handlePress}>Click Me</MaiSNSLinkButton>);
    const linkElement = screen.getByRole("button");
    fireEvent.click(linkElement);
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
