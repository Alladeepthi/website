import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'axios'],
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('axios')) {
              return 'vendor-axios';
            }
            // Heavy libraries - lazy load these
            if (id.includes('swiper') || id.includes('wow')) {
              return 'vendor-heavy';
            }
            return 'vendor-other';
          }

          // Critical route chunks - preload these
          if (id.includes('/pages/Home')) {
            return 'route-home';
          }
          if (id.includes('/pages/About')) {
            return 'route-about';
          }
          if (id.includes('/pages/Services') || id.includes('/pages/ServiceDetails')) {
            return 'route-services';
          }

          // Other routes
          if (id.includes('/pages/')) {
            return 'routes-other';
          }

          // Components
          if (id.includes('/components/layout')) {
            return 'components-layout';
          }
          if (id.includes('/components/')) {
            return 'components-other';
          }
        },
        // Optimize chunk names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.');
          const ext = info?.[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|webp|avif|ico)$/i.test(assetInfo.name || '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          if (ext === 'css') {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    chunkSizeWarningLimit: 500, // Warn for chunks > 500kb
    cssCodeSplit: true,
    sourcemap: false, // Disable sourcemaps in production for smaller builds
    reportCompressedSize: true,
    // Enable compression
    assetsInlineLimit: 4096, // Inline assets < 4kb as base64
  },
  server: {
    hmr: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
    headers: {
      // Cache static assets
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})
