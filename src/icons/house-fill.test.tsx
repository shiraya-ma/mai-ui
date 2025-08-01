'use strict';
import { afterEach, describe, expect, it } from 'bun:test';
import { cleanup, render } from "@testing-library/react";

import { HouseFill } from "./house-fill";

describe("HouseFill Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    const { container } = render(<HouseFill />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies default className", () => {
    const { container } = render(<HouseFill />);
    expect(container.querySelector("svg")?.classList).toContain("bi");
    expect(container.querySelector("svg")?.classList).toContain("bi-house-fill");
  });

  it("applies custom className", () => {
    const { container } = render(<HouseFill className="custom-class" />);
    expect(container.querySelector("svg")?.classList).toContain("custom-class");
  });

  it("applies custom classNames for parts", () => {
    const { container } = render(
      <HouseFill
        classNames={{
          base: "custom-base",
          roof: "custom-roof",
          house: "custom-house",
        }}
      />
    );
    expect(container.querySelector("svg")?.classList).toContain("custom-base");
    expect(container.querySelector("[data-slot='roof']")?.classList).toContain("custom-roof");
    expect(container.querySelector("[data-slot='house']")?.classList).toContain("custom-house");
  });

  it("passes additional props to the svg element", () => {
    const { container } = render(<HouseFill data-testid="house-icon" />);
    expect(container.querySelector("svg")).toHaveAttribute("data-testid", "house-icon");
  });
});
