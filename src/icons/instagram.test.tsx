'use strict';
import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, render } from "@testing-library/react";

import { Instagram } from "./instagram";

describe("Instagram Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    const { container } = render(<Instagram />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies default className", () => {
    const { container } = render(<Instagram />);
    expect(container.querySelector("svg")?.classList).toContain("bi");
    expect(container.querySelector("svg")?.classList).toContain("bi-instagram");
  });

  it("applies custom className", () => {
    const { container } = render(<Instagram className="custom-class" />);
    expect(container.querySelector("svg")?.classList).toContain("custom-class");
  });

  it("applies custom classNames for parts", () => {
    const { container } = render(
      <Instagram
        classNames={{
          base: "custom-base",
          instagram: "custom-instagram",
        }}
      />
    );
    expect(container.querySelector("svg")?.classList).toContain("custom-base");
    expect(container.querySelector("[data-slot='instagram']")?.classList).toContain("custom-instagram");
  });

  it("passes additional props to the svg element", () => {
    const { container } = render(<Instagram data-testid="instagram-icon" />);
    expect(container.querySelector("svg")).toHaveAttribute("data-testid", "instagram-icon");
  });
});
