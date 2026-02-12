/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    experimental: {
        mdxRs: true,
    },
    env: {
        SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
        SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/go/:slug',
                destination: '/api/redirect/:slug',
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
