'use strict';
import { expect } from 'bun:test';
import * as matchers from '@testing-library/jest-dom/matchers';
import { GlobalRegistrator } from "@happy-dom/global-registrator";

/*
* Setting for global test
*/

// happy-domを登録
GlobalRegistrator.register();

// expectを拡張する
//  expect(received).toBeInTheDocument()等
expect.extend(matchers);
