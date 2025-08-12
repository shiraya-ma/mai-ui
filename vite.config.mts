'use strict';
import { resolve } from 'path';
import { defineConfig }from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    outDir: './dist',
    sourcemap: process.env.NODE_ENV === 'development', // Enable sourcemap generation
    lib: {
      entry: {
        index: resolve(__dirname, 'src', 'index.ts'),
        components: resolve(__dirname, 'src', 'components', 'index.ts'),
        layouts: resolve(__dirname, 'src', 'layouts', 'index.ts'),
        setup: resolve(__dirname, 'src', 'setup', 'index.ts'),
      },
      fileName: (format, name) => `${name}.${format.replace(/^es$/, 'mjs')}`,
      formats: ['cjs', 'es'],
      name: 'MaiUI',
    },
    rollupOptions: {
      input: {
        index: './src/index.ts',
        components: './src/components/index.ts',
        layouts: './src/layouts/index.ts',
        setup: './src/setup/index.ts',
      },
      external: (id) => {
        const externals = [
          'deepmerge',
          'hast',
          'react',
          'react-dom',
          'react-markdown',
          'react/jsx-runtime',
          'rehype-parse',
          'rehype-raw',
          'rehype-stringify',
          'remark-gfm',
          'swr',
          'tailwindcss',
          'unified',
          'unist-util-visit',
          'unist-util-visit-parents',
        ];

        const externalNamespaces = [
          '@emotion/',
          '@heroui/',
          'react-syntax-highlighter',
        ];

        return (
          externals.some(pkg => id.startsWith(pkg)) ||
          externalNamespaces.some(ns => id.startsWith(ns))
        );
      },
      output: {
        exports: 'named',
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,  // Automatically generate a types entry file
      outDir: 'dist',  // Output directory
      copyDtsFiles: true, // Copy other type files
      exclude: [
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
        'src/**/*.stories.ts',
        'src/**/*.stories.tsx',
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
