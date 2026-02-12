import { Metadata } from 'next';
import Link from 'next/link';
import { ProductCard } from '@/components/affiliate';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Digital Products Store',
    description: 'Premium digital products to accelerate your AI journey. Courses, templates, and resources.',
};

const products = [
    {
        id: '1',
        name: 'AI Writing Masterclass',
        description: 'Learn how to use AI writing tools to 10x your content production. Includes 50+ prompts and templates.',
        price: 47,
        originalPrice: 97,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
        affiliateUrl: 'https://gum.co/ai-writing-masterclass',
        rating: 4.8,
        features: ['50+ AI Prompts', 'Video Tutorials', 'Templates', 'Lifetime Access'],
    },
    {
        id: '2',
        name: 'AI Tools Database',
        description: 'Access our curated database of 500+ AI tools with reviews, pricing, and use cases.',
        price: 19,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        affiliateUrl: 'https://gum.co/ai-tools-database',
        rating: 4.9,
        features: ['500+ Tools', 'Weekly Updates', 'Reviews', 'Categories'],
    },
    {
        id: '3',
        name: 'Prompt Engineering Guide',
        description: 'Master the art of prompt engineering with this comprehensive guide. 100+ tested prompts included.',
        price: 29,
        originalPrice: 49,
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        affiliateUrl: 'https://gum.co/prompt-engineering-guide',
        rating: 4.7,
        features: ['100+ Prompts', 'Best Practices', 'Case Studies', 'Updates'],
    },
    {
        id: '4',
        name: 'AI Marketing Playbook',
        description: 'Complete guide to using AI for marketing. From content creation to automation.',
        price: 67,
        originalPrice: 127,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        affiliateUrl: 'https://gum.co/ai-marketing-playbook',
        rating: 4.9,
        features: ['Strategies', 'Templates', 'Tools List', 'Case Studies'],
    },
    {
        id: '5',
        name: 'Content Calendar Templates',
        description: 'AI-powered content calendar templates for consistent content creation.',
        price: 17,
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800',
        affiliateUrl: 'https://gum.co/content-calendar',
        rating: 4.6,
        features: ['12 Templates', 'AI Prompts', 'Notion Ready', 'Tutorials'],
    },
    {
        id: '6',
        name: 'AI Business Starter Kit',
        description: 'Everything you need to start an AI-powered business. Tools, templates, and strategies.',
        price: 97,
        originalPrice: 197,
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
        affiliateUrl: 'https://gum.co/ai-business-kit',
        rating: 4.8,
        features: ['Business Ideas', 'Tools Guide', 'Templates', 'Community'],
    },
];

const categories = [
    { name: 'All Products', slug: 'all', count: 6 },
    { name: 'Courses', slug: 'courses', count: 2 },
    { name: 'Templates', slug: 'templates', count: 2 },
    { name: 'Guides', slug: 'guides', count: 2 },
];

export default function StorePage() {
    return (
        <>
            {/* Hero */}
            <section className="gradient-bg section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                            Digital Products
                        </h1>
                        <p className="text-xl text-secondary-600">
                            Premium resources to accelerate your AI journey. Courses, templates, and guides.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <aside className="lg:w-64 flex-shrink-0">
                            <div className="card p-6 sticky top-24">
                                <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-4">
                                    Categories
                                </h3>
                                <ul className="space-y-2">
                                    {categories.map((category) => (
                                        <li key={category.slug}>
                                            <Link
                                                href={`/store?category=${category.slug}`}
                                                className="flex items-center justify-between text-secondary-600 hover:text-primary-600 transition-colors"
                                            >
                                                <span>{category.name}</span>
                                                <span className="text-sm text-secondary-400">{category.count}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <hr className="my-6 border-secondary-200" />

                                <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-4">
                                    Price Range
                                </h3>
                                <ul className="space-y-2">
                                    <li>
                                        <label className="flex items-center gap-2 text-secondary-600 cursor-pointer">
                                            <input type="checkbox" className="rounded border-secondary-300" />
                                            <span>Under $25</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center gap-2 text-secondary-600 cursor-pointer">
                                            <input type="checkbox" className="rounded border-secondary-300" />
                                            <span>$25 - $50</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center gap-2 text-secondary-600 cursor-pointer">
                                            <input type="checkbox" className="rounded border-secondary-300" />
                                            <span>$50 - $100</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="flex items-center gap-2 text-secondary-600 cursor-pointer">
                                            <input type="checkbox" className="rounded border-secondary-300" />
                                            <span>$100+</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                        {/* Products Grid */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-secondary-600">Showing {products.length} products</p>
                                <select className="px-4 py-2 border border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none">
                                    <option>Sort by: Featured</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest First</option>
                                    <option>Best Rated</option>
                                </select>
                            </div>

                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        name={product.name}
                                        description={product.description}
                                        price={product.price}
                                        originalPrice={product.originalPrice}
                                        image={product.image}
                                        affiliateUrl={product.affiliateUrl}
                                        rating={product.rating}
                                        features={product.features}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantee */}
            <section className="section-padding bg-secondary-50">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                            30-Day Money-Back Guarantee
                        </h2>
                        <p className="text-secondary-600 mb-6">
                            Not satisfied with your purchase? Get a full refund within 30 days, no questions asked.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            <div className="flex items-center gap-2 text-secondary-700">
                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Secure Payment
                            </div>
                            <div className="flex items-center gap-2 text-secondary-700">
                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Instant Access
                            </div>
                            <div className="flex items-center gap-2 text-secondary-700">
                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Lifetime Updates
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
