'use strict';
import Bun, { $, type BuildConfig } from 'bun';
import { resolve } from 'path';

const __rootDir = resolve(__dirname, '..');

$.cwd(__rootDir);

await $`bunx rimraf ./dist`;

await Promise.all([
    $`bunx tsc -p tsconfig.es.json`,
    $`bunx tsc -p tsconfig.cj.json`
]);

const setupConfig: BuildConfig = {
    entrypoints: ['./src/setup/setup.ts'],
    outdir: './',
    target: 'node'
};
await Bun.build(setupConfig);
