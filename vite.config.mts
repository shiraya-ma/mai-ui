'use strict';
import { resolve } from 'node:path';
import { defineConfig }from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from "@vitejs/plugin-react-refresh";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            fileName: 'index',
            name: 'MaiUI',
        },
        outDir: './dist',
        rollupOptions: {
            external: [
                'next',
                'react',
                'react-dom',
                '@nextui-org/react',
                'framer-motion',
                'highlight.js',
                'react-highlight'
            ]
        },
        sourcemap: true
    },
    plugins: [
        react(),
        reactRefresh(),
        // sassPlugin(),
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
