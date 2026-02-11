// vite.config.compression.ts
// This configuration can be used with vite-plugin-compression for Brotli/Gzip compression
// Install with: npm install --save-dev vite-plugin-compression

import compression from 'vite-plugin-compression';

export const compressionConfig = [
    // Gzip compression
    compression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 10240, // Only compress files > 10kb
        deleteOriginFile: false,
    }),
    // Brotli compression (better compression ratio)
    compression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 10240,
        deleteOriginFile: false,
    }),
];

// To use this, add to vite.config.ts:
// import { compressionConfig } from './vite.config.compression'
// plugins: [...compressionConfig, react(), visualizer()]
