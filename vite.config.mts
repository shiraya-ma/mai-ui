'use strict';
import { resolve } from 'node:path';
import { defineConfig }from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from "@vitejs/plugin-react-refresh";
import dts from 'vite-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            fileName: 'index',
            formats: ['es', 'cjs'],
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
            ],
            output: {
                exports: 'named'
            }
        },
        sourcemap: true
    },
    plugins: [
        react(),
        reactRefresh(),
        dts({
            tsconfigPath: 'tsconfig.prod.json'
        }),
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
