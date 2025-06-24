'use strict';
import { expect } from 'bun:test';
import * as matchers from '@testing-library/jest-dom/matchers';
import { GlobalRegistrator } from "@happy-dom/global-registrator";

/*
* Setting for global test
*/

// register happy-dom
GlobalRegistrator.register();

// extend expect
//  expect(received).toBeInTheDocument() etc
expect.extend(matchers);
