/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/pietrocappelletti-blog' : '',
    output: 'export',
    // Optional: Change the output directory `out` -> `dist`
    distDir: 'dist',
    images: {
        unoptimized: true
    }
}
   
module.exports = nextConfig