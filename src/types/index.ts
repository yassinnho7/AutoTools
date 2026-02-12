// Blog Post Types
export interface Post {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    modifiedDate?: string;
    coverImage: string;
    author: Author;
    category: Category;
    tags: Tag[];
    readingTime: string;
    featured?: boolean;
    seo: SEOData;
}

export interface Author {
    name: string;
    avatar: string;
    bio?: string;
    twitter?: string;
    website?: string;
}

export interface Category {
    name: string;
    slug: string;
    description: string;
    color: string;
}

export interface Tag {
    name: string;
    slug: string;
}

// SEO Types
export interface SEOData {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
    canonical?: string;
    noIndex?: boolean;
}

export interface SiteConfig {
    name: string;
    url: string;
    description: string;
    keywords: string[];
    author: string;
    twitterHandle: string;
    locale: string;
}

// Product Types
export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    shortDescription: string;
    price: number;
    originalPrice?: number;
    currency: string;
    coverImage: string;
    images: string[];
    category: ProductCategory;
    features: string[];
    benefits: string[];
    rating: number;
    reviewCount: number;
    affiliateUrl: string;
    platform: 'gumroad' | 'lemonsqueezy' | 'digistore24';
    bonus?: ProductBonus[];
    seo: SEOData;
}

export interface ProductCategory {
    name: string;
    slug: string;
    description: string;
}

export interface ProductBonus {
    name: string;
    description: string;
    value: number;
}

// Affiliate Types
export interface AffiliateLink {
    id: string;
    slug: string;
    name: string;
    url: string;
    platform: string;
    clicks: number;
    conversions: number;
    createdAt: string;
}

export interface AffiliateProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    commission: number;
    commissionPercent: number;
    affiliateUrl: string;
    category: string;
    rating: number;
    reviewUrl?: string;
}

// Comparison Types
export interface ComparisonItem {
    name: string;
    logo: string;
    rating: number;
    pros: string[];
    cons: string[];
    features: Record<string, boolean | string>;
    price: string;
    affiliateUrl: string;
}

export interface ComparisonTable {
    title: string;
    description: string;
    items: ComparisonItem[];
    features: string[];
}

// Email Types
export interface EmailSubscriber {
    email: string;
    name?: string;
    source: string;
    tags: string[];
    createdAt: string;
}

export interface LeadMagnet {
    id: string;
    name: string;
    description: string;
    fileUrl: string;
    coverImage: string;
    tags: string[];
}

// Navigation Types
export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
    icon?: string;
}

export interface NavCategory {
    title: string;
    items: NavItem[];
}

// Analytics Types
export interface PageView {
    path: string;
    views: number;
    uniqueVisitors: number;
    avgTimeOnPage: number;
    bounceRate: number;
}

// Form Types
export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface NewsletterForm {
    email: string;
    name?: string;
    interests?: string[];
}

// API Response Types
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

// Pagination Types
export interface Pagination {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

export interface PaginatedResponse<T> {
    items: T[];
    pagination: Pagination;
}

// Schema Types for JSON-LD
export interface ArticleSchema {
    '@context': 'https://schema.org';
    '@type': 'Article';
    headline: string;
    description: string;
    image: string;
    author: {
        '@type': 'Person';
        name: string;
    };
    datePublished: string;
    dateModified: string;
    publisher: {
        '@type': 'Organization';
        name: string;
        logo: {
            '@type': 'ImageObject';
            url: string;
        };
    };
}

export interface ProductSchema {
    '@context': 'https://schema.org';
    '@type': 'Product';
    name: string;
    description: string;
    image: string;
    offers: {
        '@type': 'Offer';
        price: number;
        priceCurrency: string;
        availability: string;
    };
    aggregateRating?: {
        '@type': 'AggregateRating';
        ratingValue: number;
        reviewCount: number;
    };
}

export interface BreadcrumbSchema {
    '@context': 'https://schema.org';
    '@type': 'BreadcrumbList';
    itemListElement: Array<{
        '@type': 'ListItem';
        position: number;
        name: string;
        item?: string;
    }>;
}

export interface FAQSchema {
    '@context': 'https://schema.org';
    '@type': 'FAQPage';
    mainEntity: Array<{
        '@type': 'Question';
        name: string;
        acceptedAnswer: {
            '@type': 'Answer';
            text: string;
        };
    }>;
}

// Review Types
export interface Review {
    id: string;
    productId: string;
    productName: string;
    title: string;
    slug: string;
    summary: string;
    pros: string[];
    cons: string[];
    rating: number;
    ratingBreakdown: {
        features: number;
        easeOfUse: number;
        value: number;
        support: number;
    };
    verdict: string;
    affiliateUrl: string;
    coverImage: string;
    date: string;
    category: string;
}

// Tool Types
export interface Tool {
    id: string;
    name: string;
    slug: string;
    description: string;
    shortDescription: string;
    logo: string;
    website: string;
    affiliateUrl?: string;
    category: string;
    pricing: 'free' | 'freemium' | 'paid';
    startingPrice?: number;
    features: string[];
    rating: number;
    reviewCount: number;
    tags: string[];
}
