#!/usr/bin/env node

/**
 * Image Optimization Script
 * Adds lazy loading to all img tags in React components
 */

const fs = require('fs');
const path = require('path');

function addLazyLoadingToImages(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Add loading="lazy" to img tags that don't have it
    const imgRegex = /<img\s+([^>]*?)(?<!loading=["']lazy["'])\s*\/?>/gi;

    content = content.replace(imgRegex, (match, attrs) => {
        // Skip if already has loading attribute
        if (attrs.includes('loading=')) {
            return match;
        }

        // Skip logo images (we want them to load immediately)
        if (attrs.includes('logo') || attrs.includes('fav.png')) {
            return match;
        }

        modified = true;
        // Add loading="lazy" before the closing />
        return `<img ${attrs} loading="lazy" />`;
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Added lazy loading to: ${filePath}`);
        return true;
    }

    return false;
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    let count = 0;

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            count += processDirectory(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            if (addLazyLoadingToImages(filePath)) {
                count++;
            }
        }
    });

    return count;
}

// Run the script
const srcDir = path.join(__dirname, '../src');
console.log('Adding lazy loading to images...\n');
const filesModified = processDirectory(srcDir);
console.log(`\n✓ Complete! Modified ${filesModified} files.`);
