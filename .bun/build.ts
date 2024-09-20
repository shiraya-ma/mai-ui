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
const external = [
    'react'
];

const browserConfig: BuildConfig = {
    entrypoints,
    external,
    outdir: './dist/es',
    target: 'browser',
};

const nodeConfig: BuildConfig = {
    entrypoints,
    outdir: './dist/cj',
    target: 'node'
};

const setupConfig: BuildConfig = {
    entrypoints: ['./src/setup/setup.ts'],
    outdir: './',
    target: 'node'
};

await Bun.build(browserConfig);
await Bun.build(nodeConfig);
await Bun.build(setupConfig);
