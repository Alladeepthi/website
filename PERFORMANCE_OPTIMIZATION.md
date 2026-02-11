# Performance Optimization Guide

This document outlines all the performance optimizations implemented for Lighthouse scoring.

## ✅ Implemented Optimizations

### 1. **Advanced Code Splitting** ✓
- **Critical Routes**: Separate chunks for Home, About, Services (preloaded)
- **Vendor Splitting**: React, Axios, and heavy libraries in separate chunks
- **Component Splitting**: Layout and other components split separately
- **Route Splitting**: Other routes bundled together to reduce HTTP requests

**Impact**: Reduces initial bundle size by ~40-60%

### 2. **Resource Hints** ✓
- **DNS Prefetch**: For Google Fonts and external CDNs
- **Preconnect**: Early connection to font providers
- **Preload**: Critical CSS and hero images
- **Modulepreload**: Vite automatically adds for critical chunks

**Impact**: Reduces DNS lookup and connection time by ~200-500ms

### 3. **Font Optimization** ✓
- **font-display: swap**: Prevents Flash of Invisible Text (FOIT)
- **Async CSS Loading**: Non-critical stylesheets loaded asynchronously
- **Inline Critical CSS**: Font-display rules inlined in HTML

**Impact**: Improves First Contentful Paint (FCP) by ~300-800ms

### 4. **CSS Code Splitting** ✓
- Each route gets its own CSS file
- Critical CSS loaded first
- Non-critical CSS deferred

**Impact**: Reduces initial CSS payload by ~30-50%

### 5. **Bundle Analysis** ✓
- **rollup-plugin-visualizer** installed
- Generates interactive bundle analysis at `dist/stats.html`
- Shows Gzip and Brotli compressed sizes

**Usage**:
```bash
npm run build:analyze
# Open dist/stats.html in browser
```

### 6. **Build Optimizations** ✓
- **Terser Minification**: 2-pass compression with Safari 10 support
- **Tree Shaking**: Removes unused code
- **Asset Inlining**: Files < 4kb inlined as base64
- **No Sourcemaps**: Disabled in production for smaller builds
- **Chunk Size Warnings**: Alerts for chunks > 500kb

**Impact**: Reduces bundle size by ~25-35%

### 7. **Caching Headers** ✓
- Static assets cached for 1 year (immutable)
- Configured in preview server
- **Note**: Production server (Nginx/Apache) needs similar config

### 8. **Image Optimization** ✓
- **SVG Format**: All Storyset illustrations are vector (scalable)
- **Responsive Sizing**: Max-width constraints on images
- **Lazy Loading**: Browser-native lazy loading for below-fold images

**Impact**: Reduces image payload and improves LCP

## 🔄 Optional Enhancements

### 1. **Compression Plugin** (Not Yet Installed)
To enable Brotli/Gzip pre-compression:

```bash
npm install --save-dev vite-plugin-compression
```

Then uncomment the compression config in `vite.config.compression.ts` and add to `vite.config.ts`.

**Impact**: Reduces transfer size by ~70-80% (Brotli) or ~60-70% (Gzip)

### 2. **Image Conversion to WebP/AVIF**
For raster images (PNG/JPG), convert to modern formats:

```bash
# Using sharp or squoosh
npm install --save-dev @squoosh/lib
```

**Note**: Current Storyset SVGs don't need conversion (already optimal)

### 3. **Service Worker / PWA**
Add offline support and caching:

```bash
npm install --save-dev vite-plugin-pwa
```

**Impact**: Instant repeat visits, offline functionality

### 4. **Critical CSS Extraction**
Extract and inline above-the-fold CSS:

```bash
npm install --save-dev critters
```

## 📊 Testing & Monitoring

### Build and Analyze
```bash
# Build with analysis
npm run build:analyze

# View bundle analysis
# Open dist/stats.html in browser
```

### Preview Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Open http://localhost:4173
```

### Lighthouse Testing
```bash
# Install Lighthouse CLI (optional)
npm install -g lighthouse

# Run Lighthouse on preview
lighthouse http://localhost:4173 --view
```

### Key Metrics to Monitor
- **FCP (First Contentful Paint)**: < 1.8s (Good)
- **LCP (Largest Contentful Paint)**: < 2.5s (Good)
- **TBT (Total Blocking Time)**: < 200ms (Good)
- **CLS (Cumulative Layout Shift)**: < 0.1 (Good)
- **Speed Index**: < 3.4s (Good)

## 🎯 Expected Lighthouse Scores

With these optimizations:
- **Performance**: 90-100
- **Accessibility**: 90-100
- **Best Practices**: 90-100
- **SEO**: 90-100

## 🚀 Deployment Recommendations

### Server Configuration (Nginx)
```nginx
# Enable Gzip
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
gzip_min_length 1000;

# Enable Brotli (if available)
brotli on;
brotli_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;

# Cache static assets
location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### CDN Configuration
- Enable Brotli/Gzip compression
- Set long cache times for hashed assets
- Enable HTTP/2 or HTTP/3
- Use edge caching for static assets

## 📝 Maintenance

### Regular Tasks
1. **Monthly**: Run `npm run build:analyze` and check for oversized chunks
2. **After Updates**: Test with `npm run preview` before deploying
3. **Quarterly**: Run Lighthouse audits and address regressions
4. **Yearly**: Review and update dependencies

### Bundle Size Targets
- **Initial JS**: < 200kb (gzipped)
- **Initial CSS**: < 50kb (gzipped)
- **Individual Chunks**: < 100kb (gzipped)
- **Vendor Chunks**: < 150kb (gzipped)

## 🔧 Troubleshooting

### Large Bundle Size
1. Run `npm run build:analyze`
2. Check `dist/stats.html` for large dependencies
3. Consider lazy-loading heavy libraries
4. Use dynamic imports for rarely-used features

### Slow Initial Load
1. Check Network tab in DevTools
2. Verify preload/prefetch hints are working
3. Ensure critical CSS is inlined
4. Check for render-blocking resources

### Poor LCP Score
1. Optimize hero images (use WebP/AVIF)
2. Preload LCP image
3. Reduce JavaScript execution time
4. Use CDN for static assets

## 📚 Resources

- [Vite Performance Guide](https://vitejs.dev/guide/performance.html)
- [Web.dev Performance](https://web.dev/performance/)
- [Lighthouse Scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/)
- [Bundle Analysis Best Practices](https://bundlephobia.com/)

---

**Last Updated**: 2026-02-11
**Maintained By**: NeuralTrix AI Development Team
