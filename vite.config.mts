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
        setup: resolve(__dirname, 'src', 'setup', 'index.ts'),
      },
      fileName: (format, name) => `${name}.${format.replace(/^es$/, 'mjs')}`,
      formats: ['cjs', 'es'],
      name: 'MaiUI',
    },
    rollupOptions: {
      input: {
        index: './src/index.ts',
        setup: './src/setup/index.ts',
      },
      external: [
        'react',
        'react-dom',
      ],
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
      beforeWriteFile: (filePath, content) => {
        // Output different type files for main.ts and secondary.ts
        if (filePath.includes('main')) {
          return {
            filePath: filePath.replace('main', 'dist/main.d.ts'),
            content,
          }
        } else if (filePath.includes('secondary')) {
          return {
            filePath: filePath.replace('secondary', 'dist/secondary.d.ts'),
            content,
          }
        }
        return { filePath, content }
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
