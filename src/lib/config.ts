import type { SiteConfig, NavItem, Category, Author } from '@/types';

export const siteConfig: SiteConfig = {
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'AI Tools Hub',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aitoolshub.com',
    description: 'Discover the best AI tools, software reviews, and digital products to grow your online business. Expert reviews, comparisons, and tutorials.',
    keywords: [
        'AI tools',
        'artificial intelligence',
        'software reviews',
        'digital products',
        'online business',
        'productivity tools',
        'automation',
        'ChatGPT',
        'AI writing',
        'AI marketing',
    ],
    author: 'AI Tools Hub Team',
    twitterHandle: '@aitoolshub',
    locale: 'en_US',
};

export const navigation: NavItem[] = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Blog',
        href: '/blog',
    },
    {
        label: 'Reviews',
        href: '/reviews',
    },
    {
        label: 'Comparisons',
        href: '/comparisons',
    },
    {
        label: 'Tools',
        href: '/tools',
    },
    {
        label: 'Resources',
        href: '/resources',
    },
    {
        label: 'Store',
        href: '/store',
    },
];

export const footerLinks = {
    main: [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Tools', href: '/tools' },
        { label: 'Store', href: '/store' },
    ],
    resources: [
        { label: 'Free E-Books', href: '/resources/ebooks' },
        { label: 'Templates', href: '/resources/templates' },
        { label: 'Checklists', href: '/resources/checklists' },
        { label: 'Courses', href: '/resources/courses' },
    ],
    legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Disclaimer', href: '/disclaimer' },
        { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    ],
    social: [
        { label: 'Twitter', href: 'https://twitter.com/aitoolshub', icon: 'twitter' },
        { label: 'YouTube', href: 'https://youtube.com/@aitoolshub', icon: 'youtube' },
        { label: 'Newsletter', href: '/newsletter', icon: 'mail' },
        { label: 'RSS', href: '/rss.xml', icon: 'rss' },
    ],
};

export const categories: Category[] = [
    {
        name: 'AI Writing',
        slug: 'ai-writing',
        description: 'AI-powered writing tools for content creation',
        color: 'blue',
    },
    {
        name: 'AI Marketing',
        slug: 'ai-marketing',
        description: 'Marketing automation and AI tools',
        color: 'purple',
    },
    {
        name: 'AI Design',
        slug: 'ai-design',
        description: 'AI tools for design and creativity',
        color: 'pink',
    },
    {
        name: 'AI Video',
        slug: 'ai-video',
        description: 'Video creation and editing with AI',
        color: 'red',
    },
    {
        name: 'AI Audio',
        slug: 'ai-audio',
        description: 'Audio and voice AI tools',
        color: 'green',
    },
    {
        name: 'Productivity',
        slug: 'productivity',
        description: 'Productivity and automation tools',
        color: 'orange',
    },
    {
        name: 'SEO Tools',
        slug: 'seo-tools',
        description: 'SEO and content optimization tools',
        color: 'teal',
    },
    {
        name: 'E-commerce',
        slug: 'ecommerce',
        description: 'E-commerce and selling tools',
        color: 'indigo',
    },
];

export const defaultAuthor: Author = {
    name: 'AI Tools Hub Team',
    avatar: '/images/authors/default-avatar.jpg',
    bio: 'Expert team reviewing AI tools and software to help you make informed decisions.',
    twitter: '@aitoolshub',
    website: 'https://aitoolshub.com',
};

export const socialLinks = {
    twitter: 'https://twitter.com/aitoolshub',
    youtube: 'https://youtube.com/@aitoolshub',
    linkedin: 'https://linkedin.com/company/aitoolshub',
    github: 'https://github.com/aitoolshub',
};

export const affiliateConfig = {
    digistore24: {
        enabled: true,
        prefix: 'https://www.digistore24.com/product/',
    },
    gumroad: {
        enabled: true,
        prefix: 'https://gum.co/',
    },
    lemonsqueezy: {
        enabled: true,
        prefix: 'https://aitoolshub.lemonsqueezy.com/buy/',
    },
};

export const newsletterConfig = {
    title: 'Get the Best AI Tools Weekly',
    description: 'Join 10,000+ creators getting weekly AI tool reviews, tips, and exclusive deals.',
    cta: 'Subscribe Free',
    privacy: 'We respect your privacy. Unsubscribe at any time.',
};

export const readingTimeConfig = {
    wordsPerMinute: 200,
    locale: 'en-US',
};
