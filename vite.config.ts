import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// Optimized rollupOptions to improve performance and caching.
// This was implemented mostly to handle the large bundle sizes of MUI and Emotion
// by splitting them into separate vendor chunks.

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Generates a visual bundle analysis after the build process
    visualizer({ open: true }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'vendor-mui';
            }
            if (id.includes('react')) {
              return 'vendor-react';
            }
            return 'vendor-others';
          }
        },
      },
    },
  },
  base: '/Matslumparen',
});
