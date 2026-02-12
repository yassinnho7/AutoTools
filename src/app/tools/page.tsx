import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateButton } from '@/components/affiliate';
import { ExternalLink, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Tools Directory',
    description: 'Discover the best AI tools for your business. Curated directory with reviews, pricing, and comparisons.',
};

const tools = [
    {
        id: '1',
        name: 'ChatGPT',
        description: 'The most popular AI assistant for writing, coding, and general tasks.',
        logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200',
        website: 'https://chat.openai.com',
        affiliateUrl: 'https://chat.openai.com',
        category: 'AI Writing',
        pricing: 'freemium',
        startingPrice: 20,
        features: ['Natural conversations', 'Code generation', 'Document analysis', 'Image understanding'],
        rating: 4.8,
        reviewCount: 1234,
    },
    {
        id: '2',
        name: 'Claude',
        description: 'Advanced AI assistant by Anthropic with excellent reasoning capabilities.',
        logo: 'https://images.unsplash.com/photo-1684163761883-c81a1acd8d4d?w=200',
        website: 'https://claude.ai',
        affiliateUrl: 'https://claude.ai',
        category: 'AI Writing',
        pricing: 'freemium',
        startingPrice: 20,
        features: ['Long context', 'Document analysis', 'Code generation', 'Safe AI'],
        rating: 4.9,
        reviewCount: 876,
    },
    {
        id: '3',
        name: 'Midjourney',
        description: 'Create stunning AI-generated artwork with simple text prompts.',
        logo: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=200',
        website: 'https://midjourney.com',
        affiliateUrl: 'https://midjourney.com',
        category: 'AI Design',
        pricing: 'paid',
        startingPrice: 10,
        features: ['Image generation', 'Style control', 'High quality', 'Fast rendering'],
        rating: 4.7,
        reviewCount: 2341,
    },
    {
        id: '4',
        name: 'Jasper',
        description: 'AI writing assistant specialized for marketing and business content.',
        logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200',
        website: 'https://jasper.ai',
        affiliateUrl: 'https://jasper.ai',
        category: 'AI Writing',
        pricing: 'paid',
        startingPrice: 49,
        features: ['Marketing copy', 'Templates', 'Brand voice', 'Team collaboration'],
        rating: 4.6,
        reviewCount: 567,
    },
    {
        id: '5',
        name: 'Notion AI',
        description: 'AI-powered productivity suite for notes, docs, and project management.',
        logo: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=200',
        website: 'https://notion.so',
        affiliateUrl: 'https://notion.so',
        category: 'Productivity',
        pricing: 'freemium',
        startingPrice: 10,
        features: ['Note-taking', 'AI writing', 'Databases', 'Collaboration'],
        rating: 4.7,
        reviewCount: 1890,
    },
    {
        id: '6',
        name: 'Descript',
        description: 'AI-powered video and audio editing with transcription.',
        logo: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=200',
        website: 'https://descript.com',
        affiliateUrl: 'https://descript.com',
        category: 'AI Video',
        pricing: 'freemium',
        startingPrice: 12,
        features: ['Transcription', 'Video editing', 'Screen recording', 'Overdub'],
        rating: 4.5,
        reviewCount: 723,
    },
];

const categories = [
    { name: 'All Tools', slug: 'all' },
    { name: 'AI Writing', slug: 'ai-writing' },
    { name: 'AI Design', slug: 'ai-design' },
    { name: 'AI Video', slug: 'ai-video' },
    { name: 'Productivity', slug: 'productivity' },
    { name: 'SEO Tools', slug: 'seo-tools' },
];

export default function ToolsPage() {
    return (
        <>
            {/* Hero */}
            <section className="gradient-bg section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                            AI Tools Directory
                        </h1>
                        <p className="text-xl text-secondary-600">
                            Discover the best AI tools for your business. Curated and reviewed by experts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="border-b border-secondary-200 bg-white sticky top-16 md:top-20 z-40">
                <div className="container-custom">
                    <div className="flex items-center gap-4 overflow-x-auto py-4 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category.slug}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${category.slug === 'all'
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.map((tool) => (
                            <div key={tool.id} className="card group">
                                <div className="card-body">
                                    <div className="flex items-start gap-4 mb-4">
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            className="w-14 h-14 rounded-xl object-cover"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-heading font-bold text-lg text-secondary-900">
                                                    {tool.name}
                                                </h3>
                                                <span
                                                    className={`px-2 py-1 text-xs font-medium rounded-full ${tool.pricing === 'free'
                                                            ? 'bg-green-100 text-green-700'
                                                            : tool.pricing === 'freemium'
                                                                ? 'bg-blue-100 text-blue-700'
                                                                : 'bg-purple-100 text-purple-700'
                                                        }`}
                                                >
                                                    {tool.pricing === 'free' ? 'Free' : tool.pricing === 'freemium' ? 'Freemium' : 'Paid'}
                                                </span>
                                            </div>
                                            <p className="text-sm text-secondary-500">{tool.category}</p>
                                        </div>
                                    </div>

                                    <p className="text-secondary-600 mb-4">{tool.description}</p>

                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < Math.floor(tool.rating) ? 'text-yellow-400 fill-current' : 'text-secondary-200'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-secondary-600">
                                            {tool.rating} ({tool.reviewCount} reviews)
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {tool.features.slice(0, 3).map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-2 py-1 text-xs bg-secondary-100 text-secondary-600 rounded"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                                        <div>
                                            {tool.startingPrice && (
                                                <span className="text-sm text-secondary-500">
                                                    From <span className="font-bold text-secondary-900">${tool.startingPrice}/mo</span>
                                                </span>
                                            )}
                                        </div>
                                        <AffiliateButton href={tool.affiliateUrl} text="Visit" size="sm" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
