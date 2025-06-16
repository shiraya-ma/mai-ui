'use strict';
import { beforeEach, expect } from 'bun:test';
import * as matchers from '@testing-library/jest-dom/matchers';
import { GlobalRegistrator } from "@happy-dom/global-registrator";

GlobalRegistrator.register();

beforeEach(() => {
  expect.extend(matchers);
});
