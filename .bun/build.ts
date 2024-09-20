'use strict';
import Bun, { $, type BuildConfig } from 'bun';
import { resolve } from 'path';

const __rootDir = resolve(__dirname, '..');

$.cwd(__rootDir);

await $`bunx rimraf ./dist`;

await Promise.all([
    $`bunx tsc -p tsconfig.es.json --emitDeclarationOnly`,
    $`bunx tsc -p tsconfig.cj.json --emitDeclarationOnly`
]);

const entrypoints = ['./src/index.ts'];

const browserConfig: BuildConfig = {
    entrypoints,
    outdir: './dist/es',
    target: 'browser',
};

const nodeConfig: BuildConfig = {
    entrypoints,
    outdir: './dist/cj',
    target: 'node'
};

await Bun.build(browserConfig);
await Bun.build(nodeConfig);
