/* eslint-disable */
'use strict';
import Bun, { $, type BuildConfig } from 'bun';
import { resolve } from 'path';
import { existsSync, rmdirSync } from 'fs';

const rootdir = resolve(__dirname, '..');
console.log('rootdir:', rootdir);

$.cwd(rootdir);

const distdir = resolve(rootdir, 'dist');
console.log('distdir:', distdir);

if (existsSync(distdir)) {
    console.log('found dist directory. remove dist directory before build process.');

    rmdirSync(distdir, { recursive: true });
}

await Promise.all([
    $`bunx tsc -p tsconfig.es.json`,
    $`bunx tsc -p tsconfig.cj.json`
]);
