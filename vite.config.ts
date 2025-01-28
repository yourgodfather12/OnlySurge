import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true,
      // Enable SWC minification
      swcMinify: true,
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    // Add proxy configuration if needed
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080',
    //     changeOrigin: true,
    //   },
    // },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: true,
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Add more manual chunks as needed
        },
      },
    },
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/setup.ts',
      ],
    },
  },
}); 