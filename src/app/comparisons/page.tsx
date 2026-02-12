import { Metadata } from 'next';
import Link from 'next/link';
import { ComparisonTable, ComparisonCard } from '@/components/affiliate';

export const metadata: Metadata = {
    title: 'AI Tool Comparisons',
    description: 'Side-by-side comparisons of popular AI tools. Find the perfect tool for your needs.',
};

const comparisons = [
    {
        title: 'ChatGPT vs Claude vs Gemini: Which AI is Best?',
        slug: 'chatgpt-vs-claude-vs-gemini',
        description: 'A comprehensive comparison of the three leading AI assistants.',
        products: ['ChatGPT', 'Claude', 'Gemini'],
        category: 'AI Writing',
    },
    {
        title: 'Midjourney vs DALL-E vs Stable Diffusion',
        slug: 'midjourney-vs-dalle-vs-stable-diffusion',
        description: 'Which AI image generator creates the best artwork?',
        products: ['Midjourney', 'DALL-E', 'Stable Diffusion'],
        category: 'AI Design',
    },
    {
        title: 'Jasper vs Copy.ai vs Writesonic',
        slug: 'jasper-vs-copyai-vs-writesonic',
        description: 'Comparing the top AI writing assistants for marketers.',
        products: ['Jasper', 'Copy.ai', 'Writesonic'],
        category: 'AI Writing',
    },
];

// Sample comparison data for the table
const chatGptComparison = {
    title: 'ChatGPT vs Claude vs Gemini',
    description: 'Compare the leading AI assistants side by side.',
    items: [
        {
            name: 'ChatGPT',
            logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200',
            rating: 4.8,
            pros: ['Most versatile', 'Huge plugin ecosystem', 'GPT-4 Turbo'],
            cons: ['Knowledge cutoff', 'Can hallucinate'],
            features: {
                'Free Tier': true,
                'API Access': true,
                'Image Generation': true,
                'Code Generation': true,
                'Document Analysis': true,
                'Web Browsing': 'partial',
            },
            price: '$20/mo',
            affiliateUrl: 'https://chat.openai.com',
        },
        {
            name: 'Claude',
            logo: 'https://images.unsplash.com/photo-1684163761883-c81a1acd8d4d?w=200',
            rating: 4.9,
            pros: ['Best reasoning', '200K context', 'Very safe'],
            cons: ['No image generation', 'Slower'],
            features: {
                'Free Tier': true,
                'API Access': true,
                'Image Generation': false,
                'Code Generation': true,
                'Document Analysis': true,
                'Web Browsing': false,
            },
            price: '$20/mo',
            affiliateUrl: 'https://claude.ai',
        },
        {
            name: 'Gemini',
            logo: 'https://images.unsplash.com/photo-1684163761883-c81a1acd8d4d?w=200',
            rating: 4.6,
            pros: ['Google integration', 'Multimodal', 'Fast'],
            cons: ['Limited availability', 'Inconsistent'],
            features: {
                'Free Tier': true,
                'API Access': true,
                'Image Generation': false,
                'Code Generation': true,
                'Document Analysis': true,
                'Web Browsing': true,
            },
            price: '$20/mo',
            affiliateUrl: 'https://gemini.google.com',
        },
    ],
    features: ['Free Tier', 'API Access', 'Image Generation', 'Code Generation', 'Document Analysis', 'Web Browsing'],
};

export default function ComparisonsPage() {
    return (
        <>
            {/* Hero */}
            <section className="gradient-bg section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                            AI Tool Comparisons
                        </h1>
                        <p className="text-xl text-secondary-600">
                            Side-by-side comparisons to help you find the perfect AI tool for your needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Comparison */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold text-secondary-900 mb-6">Featured Comparison</h2>
                    <ComparisonTable
                        title={chatGptComparison.title}
                        description={chatGptComparison.description}
                        items={chatGptComparison.items}
                        features={chatGptComparison.features}
                    />
                </div>
            </section>

            {/* All Comparisons */}
            <section className="section-padding bg-secondary-50">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold text-secondary-900 mb-6">All Comparisons</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {comparisons.map((comparison) => (
                            <Link
                                key={comparison.slug}
                                href={`/comparisons/${comparison.slug}`}
                                className="card group"
                            >
                                <div className="card-body">
                                    <span className="tag mb-3">{comparison.category}</span>
                                    <h3 className="font-heading font-bold text-lg text-secondary-900 group-hover:text-primary-600 transition-colors mb-2">
                                        {comparison.title}
                                    </h3>
                                    <p className="text-secondary-600 text-sm mb-4">{comparison.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {comparison.products.map((product) => (
                                            <span
                                                key={product}
                                                className="px-2 py-1 text-xs bg-secondary-100 text-secondary-600 rounded"
                                            >
                                                {product}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Cards */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold text-secondary-900 mb-6">Quick Compare</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {chatGptComparison.items.map((item) => (
                            <ComparisonCard
                                key={item.name}
                                name={item.name}
                                logo={item.logo}
                                rating={item.rating}
                                pros={item.pros}
                                cons={item.cons}
                                price={item.price}
                                affiliateUrl={item.affiliateUrl}
                                featured={item.name === 'Claude'}
                                badge={item.name === 'Claude' ? 'Best for Reasoning' : undefined}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
