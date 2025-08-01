'use strict';
import { afterEach, describe, expect, it } from 'bun:test';
import { render, screen, cleanup } from "@testing-library/react";

import { MaiBreadcrumbs } from './mai-breadcrumbs';
import { MaiBreadcrumbItem } from './mai-breadcrumb-item';

describe('MaiBreadcrumbs', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders breadcrumbs with children', () => {
    render(
      <MaiBreadcrumbs>
        <MaiBreadcrumbItem href="/foo">Foo</MaiBreadcrumbItem>
        <MaiBreadcrumbItem href="/bar">Bar</MaiBreadcrumbItem>
      </MaiBreadcrumbs>
    );

    expect(screen.getByText('Foo')).toBeInTheDocument();
    expect(screen.getByText('Bar')).toBeInTheDocument();
  });

  it('renders home link when homeRef is provided', () => {
    render(
      <MaiBreadcrumbs homeRef="/" showHomeIcon>
        <MaiBreadcrumbItem href="/foo">Foo</MaiBreadcrumbItem>
      </MaiBreadcrumbs>
    );

    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('Foo')).toBeInTheDocument();
  });

  it('applies the glassy variant styles', () => {
    render(
      <MaiBreadcrumbs variant="glassy" color="primary">
        <MaiBreadcrumbItem href="/foo">Foo</MaiBreadcrumbItem>
      </MaiBreadcrumbs>
    );

    const breadcrumbs = screen.getByText('Foo').closest('nav');
    expect(breadcrumbs).toHaveAttribute('data-variant', 'glassy');
    expect(breadcrumbs).toHaveAttribute('data-color', 'primary');
  });

  it('renders with custom radius', () => {
    render(
      <MaiBreadcrumbs variant="glassy" radius="full">
        <MaiBreadcrumbItem href="/foo">Foo</MaiBreadcrumbItem>
      </MaiBreadcrumbs>
    );

    const breadcrumbs = screen.getByText('Foo').closest('nav');
    expect(breadcrumbs).toHaveAttribute('data-radius', 'full');
  });

  it('does not render home link when homeRef is not provided', () => {
    render(
      <MaiBreadcrumbs>
        <MaiBreadcrumbItem href="/foo">Foo</MaiBreadcrumbItem>
      </MaiBreadcrumbs>
    );

    expect(screen.queryByText('HOME')).not.toBeInTheDocument();
  });
});
