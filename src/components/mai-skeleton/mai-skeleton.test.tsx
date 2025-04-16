'use strict';
import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import { render, cleanup } from "@testing-library/react";
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiSkeleton } from "./mai-skeleton";

describe("MaiSkeleton", () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect.extend(matchers as any);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render without crashing", () => {
    const { container } = render(<MaiSkeleton />);
    expect(container).toBeInTheDocument();
  });

  it("should pass props to the Skeleton component", () => {
    const { getByTestId } = render(
      <MaiSkeleton data-testid="skeleton" className="w-[100px] h-[20px]" />
    );
    const skeleton = getByTestId("skeleton");
    expect(skeleton).toHaveClass('w-[100px]', 'h-[20px]');
  });

  it("should render children when provided", () => {
    const { getByText } = render(
      <MaiSkeleton>
        <span>Loading...</span>
      </MaiSkeleton>
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("should apply additional class names", () => {
    const { container } = render(
      <MaiSkeleton className="custom-class" />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("should handle custom styles", () => {
    const { container } = render(
      <MaiSkeleton style={{ backgroundColor: "red" }} />
    );
    expect(container.firstChild).toHaveStyle({ backgroundColor: "red" });
  });
});
