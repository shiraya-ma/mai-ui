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
          'react',
          'react-dom',
          'react/jsx-runtime',
          'react-syntax-highlighter',
        ];

        const externalNamespaces = [
          '@heroui/',
        ];

        return externals.includes(id) || externalNamespaces.some(ns => id.startsWith(ns));
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
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
