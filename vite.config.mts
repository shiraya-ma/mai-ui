'use strict';
import { defineConfig }from 'vite';
import reactRefresh from "@vitejs/plugin-react-refresh";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    plugins: [
        reactRefresh(),
        vanillaExtractPlugin()
    ],
    server: {
        port: 3000
    }
});
