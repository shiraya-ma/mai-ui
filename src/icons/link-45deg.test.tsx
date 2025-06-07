'use strict';
import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import { cleanup, render } from "@testing-library/react";
import * as matchers from '@testing-library/jest-dom/matchers';

import { Link45deg } from "./link-45deg";

describe("Link45deg Component", () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    const { container } = render(<Link45deg />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies default className", () => {
    const { container } = render(<Link45deg />);
    expect(container.querySelector("svg")?.classList).toContain("bi");
    expect(container.querySelector("svg")?.classList).toContain("bi-link-45deg");
  });

  it("applies custom className", () => {
    const { container } = render(<Link45deg className="custom-class" />);
    expect(container.querySelector("svg")?.classList).toContain("custom-class");
  });

  it("applies custom classNames for parts", () => {
    const { container } = render(
      <Link45deg
        classNames={{
          base  : "custom-base",
          anchor: "custom-anchor",
        }}
      />
    );
    expect(container.querySelector("svg")?.classList).toContain("custom-base");
    expect(container.querySelector("[data-slot='anchor']")?.classList).toContain("custom-anchor");
  });

  it("passes additional props to the svg element", () => {
    const { container } = render(<Link45deg data-testid="anchor-icon" />);
    expect(container.querySelector("svg")).toHaveAttribute("data-testid", "anchor-icon");
  });
});
