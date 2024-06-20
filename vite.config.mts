'use strict';
import { resolve } from 'node:path';
import { defineConfig }from 'vite';
import reactRefresh from "@vitejs/plugin-react-refresh";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    plugins: [
        reactRefresh(),
        vanillaExtractPlugin()
    ],
    resolve: {
        alias: {
            "@mai-ui": resolve(import.meta.dirname, 'src')
        }
    },
    server: {
        port: 3000
    }
});
