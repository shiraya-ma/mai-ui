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
            entry: resolve(import.meta.dirname, 'src', 'index.ts'),
            fileName: (format) => `index.${format}.js`,
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
                'react-highlight',
                'react-syntax-highlighter'
            ],
            output: {
                exports: 'named',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        },
        sourcemap: true
    },
    optimizeDeps: {
        include: [
            'react',
            'react-dom'
        ]
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
