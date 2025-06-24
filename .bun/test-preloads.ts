'use strict';
import { expect } from 'bun:test';
import * as matchers from '@testing-library/jest-dom/matchers';
import { GlobalRegistrator } from "@happy-dom/global-registrator";

/*
* Setting for global test
*/

// register happy-dom
GlobalRegistrator.register();

// expectを拡張する
//  expect(received).toBeInTheDocument()等
expect.extend(matchers);
