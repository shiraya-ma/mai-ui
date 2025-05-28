'use strict';
import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import { cleanup, render } from "@testing-library/react";
import * as matchers from '@testing-library/jest-dom/matchers';

import { Pixiv } from "./pixiv";

describe("Pixiv Component", () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    const { container } = render(<Pixiv />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies default className", () => {
    const { container } = render(<Pixiv />);
    expect(container.querySelector("svg")?.classList).toContain("mi-pixiv");
  });

  it("applies custom className", () => {
    const { container } = render(<Pixiv className="custom-class" />);
    expect(container.querySelector("svg")?.classList).toContain("custom-class");
  });

  it("applies custom classNames for parts", () => {
    const { container } = render(
      <Pixiv
        classNames={{
          base : "custom-base",
          pixiv: "custom-pixiv",
        }}
      />
    );
    expect(container.querySelector("svg")?.classList).toContain("custom-base");
    expect(container.querySelector("[data-slot='pixiv']")?.classList).toContain("custom-pixiv");
  });

  it("passes additional props to the svg element", () => {
    const { container } = render(<Pixiv data-testid="pixiv-icon" />);
    expect(container.querySelector("svg")).toHaveAttribute("data-testid", "pixiv-icon");
  });
});
