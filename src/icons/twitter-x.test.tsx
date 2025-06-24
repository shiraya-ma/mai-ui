'use strict';
import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, render } from "@testing-library/react";

import { TwitterX } from "./twitter-x";

describe("TwitterX Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    const { container } = render(<TwitterX />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies default className", () => {
    const { container } = render(<TwitterX />);
    expect(container.querySelector("svg")?.classList).toContain("bi");
    expect(container.querySelector("svg")?.classList).toContain("bi-twitter-x");
  });

  it("applies custom className", () => {
    const { container } = render(<TwitterX className="custom-class" />);
    expect(container.querySelector("svg")?.classList).toContain("custom-class");
  });

  it("applies custom classNames for parts", () => {
    const { container } = render(
      <TwitterX
        classNames={{
          base: "custom-base",
          twitter: "custom-twitter-x",
        }}
      />
    );
    expect(container.querySelector("svg")?.classList).toContain("custom-base");
    expect(container.querySelector("[data-slot='twitter']")?.classList).toContain("custom-twitter-x");
  });

  it("passes additional props to the svg element", () => {
    const { container } = render(<TwitterX data-testid="twitter-x-icon" />);
    expect(container.querySelector("svg")).toHaveAttribute("data-testid", "twitter-x-icon");
  });
});
