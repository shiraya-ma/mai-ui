'use strict';
import { $ } from 'bun';
import { resolve } from 'path';

const __rootDir = resolve(__dirname, '..');

$.cwd(__rootDir);

await $`bunx rimraf ./dist`;

await Promise.all([
    $`bunx tsc -p tsconfig.es.json`,
    $`bunx tsc -p tsconfig.cj.json`
]);
