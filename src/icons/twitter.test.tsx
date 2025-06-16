'use strict';
import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, render } from "@testing-library/react";

import { Twitter } from "./twitter";

describe("Twitter Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    const { container } = render(<Twitter />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies default className", () => {
    const { container } = render(<Twitter />);
    expect(container.querySelector("svg")?.classList).toContain("bi");
    expect(container.querySelector("svg")?.classList).toContain("bi-twitter");
  });

  it("applies custom className", () => {
    const { container } = render(<Twitter className="custom-class" />);
    expect(container.querySelector("svg")?.classList).toContain("custom-class");
  });

  it("applies custom classNames for parts", () => {
    const { container } = render(
      <Twitter
        classNames={{
          base: "custom-base",
          twitter: "custom-twitter",
        }}
      />
    );
    expect(container.querySelector("svg")?.classList).toContain("custom-base");
    expect(container.querySelector("[data-slot='twitter']")?.classList).toContain("custom-twitter");
  });

  it("passes additional props to the svg element", () => {
    const { container } = render(<Twitter data-testid="twitter-icon" />);
    expect(container.querySelector("svg")).toHaveAttribute("data-testid", "twitter-icon");
  });
});
