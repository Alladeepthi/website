// optimize-images.js
// Run with: node optimize-images.js

import { optimize } from 'svgo';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const config = {
    multipass: true,
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false,
                    cleanupIds: false,
                },
            },
        },
        'removeDimensions',
        'removeScriptElement',
        'removeStyleElement',
    ],
};

function optimizeSVG(filePath) {
    try {
        const data = readFileSync(filePath, 'utf8');
        const originalSize = Buffer.byteLength(data);

        // Skip if already small (< 50KB)
        if (originalSize < 50000) {
            console.log(`⏭️  Skipping ${filePath} (already small: ${(originalSize / 1024).toFixed(2)} KB)`);
            return;
        }

        const result = optimize(data, { ...config, path: filePath });
        const optimizedSize = Buffer.byteLength(result.data);
        const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(2);

        if (optimizedSize < originalSize) {
            writeFileSync(filePath, result.data);
            console.log(`✅ ${filePath}`);
            console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(optimizedSize / 1024 / 1024).toFixed(2)} MB (${savings}% smaller)`);
        } else {
            console.log(`⏭️  ${filePath} (no improvement)`);
        }
    } catch (error) {
        console.error(`❌ Error optimizing ${filePath}:`, error.message);
    }
}

function processDirectory(dir) {
    const files = readdirSync(dir);

    for (const file of files) {
        const filePath = join(dir, file);
        const stat = statSync(filePath);

        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (extname(file).toLowerCase() === '.svg') {
            optimizeSVG(filePath);
        }
    }
}

console.log('🚀 Starting SVG optimization...\n');
processDirectory('public/assets/images');
console.log('\n✨ Optimization complete!');
