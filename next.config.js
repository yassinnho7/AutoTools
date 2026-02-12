/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    env: {
        SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://autotools-2k3.pages.dev',
        SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'AI Tools Hub',
    },
};

module.exports = nextConfig;
