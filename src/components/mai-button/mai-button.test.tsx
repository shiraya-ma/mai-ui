'use strict';
import { afterEach,  describe, expect, it, mock } from 'bun:test';
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import * as matchers from '@testing-library/jest-dom/matchers';

import { MaiButton } from "./mai-button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
expect.extend(matchers as any);

describe("MaiButton", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the button with children", () => {
    render(<MaiButton>Click Me</MaiButton>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies additional props correctly", () => {
    render(<MaiButton color="primary" variant="shadow">Test Button</MaiButton>);
    const button = screen.getByText("Test Button");
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveClass("shadow-lg");
  });

  it("handles click events", () => {
    const handlePress = mock();
    render(<MaiButton onPress={handlePress}>Click Me</MaiButton>);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it("renders with a custom className", () => {
    render(<MaiButton className="custom-class">Custom Button</MaiButton>);
    const button = screen.getByText("Custom Button");
    expect(button).toHaveClass("custom-class");
  });

  it("is disabled when the disabled prop is passed", () => {
    render(<MaiButton disabled>Disabled Button</MaiButton>);
    const button = screen.getByText("Disabled Button");
    expect(button).toBeDisabled();
  });
});
