import { siteConfig } from './config';
import type { ArticleSchema, ProductSchema, BreadcrumbSchema, FAQSchema } from '@/types';

/**
 * Generate meta tags for a page
 */
export function generateMetaTags({
    title,
    description,
    keywords = [],
    image,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    noIndex = false,
}: {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    noIndex?: boolean;
}) {
    const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
    const metaImage = image || `${siteConfig.url}/og-image.png`;
    const metaUrl = url || siteConfig.url;

    return {
        title: fullTitle,
        description,
        keywords: [...keywords, ...siteConfig.keywords].join(', '),
        robots: noIndex ? 'noindex, nofollow' : 'index, follow',
        openGraph: {
            title: fullTitle,
            description,
            url: metaUrl,
            siteName: siteConfig.name,
            images: [
                {
                    url: metaImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: siteConfig.locale,
            type: type === 'article' ? 'article' : 'website',
            ...(type === 'article' && {
                article: {
                    publishedTime,
                    modifiedTime,
                    authors: [author || siteConfig.author],
                },
            }),
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [metaImage],
            creator: siteConfig.twitterHandle,
        },
        alternates: {
            canonical: metaUrl,
        },
    };
}

/**
 * Generate Article JSON-LD schema
 */
export function generateArticleSchema({
    title,
    description,
    image,
    author,
    datePublished,
    dateModified,
    url,
}: {
    title: string;
    description: string;
    image: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    url: string;
}): ArticleSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image,
        author: {
            '@type': 'Person',
            name: author,
        },
        datePublished,
        dateModified: dateModified || datePublished,
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/logo.png`,
            },
        },
    };
}

/**
 * Generate Product JSON-LD schema
 */
export function generateProductSchema({
    name,
    description,
    image,
    price,
    currency = 'USD',
    rating,
    reviewCount,
}: {
    name: string;
    description: string;
    image: string;
    price: number;
    currency?: string;
    rating?: number;
    reviewCount?: number;
}): ProductSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        image,
        offers: {
            '@type': 'Offer',
            price,
            priceCurrency: currency,
            availability: 'https://schema.org/InStock',
        },
        ...(rating && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: rating,
                reviewCount: reviewCount || 1,
            },
        }),
    };
}

/**
 * Generate Breadcrumb JSON-LD schema
 */
export function generateBreadcrumbSchema(
    items: Array<{ name: string; url?: string }>
): BreadcrumbSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url ? `${siteConfig.url}${item.url}` : undefined,
        })),
    };
}

/**
 * Generate FAQ JSON-LD schema
 */
export function generateFAQSchema(
    faqs: Array<{ question: string; answer: string }>
): FAQSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

/**
 * Generate HowTo JSON-LD schema
 */
export function generateHowToSchema({
    name,
    description,
    steps,
    image,
    totalTime,
}: {
    name: string;
    description: string;
    steps: Array<{ name: string; text: string; image?: string }>;
    image?: string;
    totalTime?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        description,
        image,
        totalTime,
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text,
            image: step.image,
        })),
    };
}

/**
 * Generate SoftwareApplication JSON-LD schema
 */
export function generateSoftwareSchema({
    name,
    description,
    applicationCategory,
    operatingSystem,
    offers,
    rating,
}: {
    name: string;
    description: string;
    applicationCategory: string;
    operatingSystem?: string;
    offers: { price: number; currency: string };
    rating?: { value: number; count: number };
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name,
        description,
        applicationCategory,
        operatingSystem,
        offers: {
            '@type': 'Offer',
            price: offers.price,
            priceCurrency: offers.currency,
        },
        ...(rating && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: rating.value,
                ratingCount: rating.count,
            },
        }),
    };
}

/**
 * Generate Organization JSON-LD schema
 */
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        sameAs: [
            `https://twitter.com/${siteConfig.twitterHandle.replace('@', '')}`,
            'https://youtube.com/@aitoolshub',
            'https://linkedin.com/company/aitoolshub',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'support@aitoolshub.com',
        },
    };
}

/**
 * Generate WebSite JSON-LD schema
 */
export function generateWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

/**
 * Combine multiple JSON-LD schemas
 */
export function combineSchemas(...schemas: object[]) {
    return schemas.map(schema => JSON.stringify(schema)).join('\n');
}
