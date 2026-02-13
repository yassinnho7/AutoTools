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
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dc1f1wcuh',
    },
};

module.exports = nextConfig;
