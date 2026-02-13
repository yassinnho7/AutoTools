import { Metadata } from 'next';
import { ProductCard } from '@/components/affiliate';

export const metadata: Metadata = {
    title: 'AI Digital Products Store 2026',
    description: 'Premium digital products to accelerate your AI journey in 2026. Courses, templates, and resources.',
};

// Updated products for 2026
const products = [
    {
        id: '1',
        name: 'AI Agents Masterclass 2026',
        description: 'Learn to build and use AI agents for business automation. Includes Claude Code, GPT agents, and custom workflows.',
        price: 97,
        originalPrice: 197,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
        affiliateUrl: '#',
        rating: 4.9,
        features: ['10+ Agent Templates', 'Video Tutorials', 'Workflows', 'Lifetime Updates'],
    },
    {
        id: '2',
        name: '500+ AI Tools Database 2026',
        description: 'Access our curated database of 500+ AI tools with reviews, pricing, and use cases. Updated weekly.',
        price: 49,
        originalPrice: 99,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        affiliateUrl: '#',
        rating: 4.8,
        features: ['500+ Tools', 'Weekly Updates', 'Reviews', 'Categories'],
    },
    {
        id: '3',
        name: 'AI Video Creation Course',
        description: 'Master AI video creation with Runway, Pika, and Kling. Create professional videos in minutes.',
        price: 77,
        originalPrice: 147,
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
        affiliateUrl: '#',
        rating: 4.7,
        features: ['5 Hours Video', '5 AI Tools', 'Templates', 'Project Files'],
    },
    {
        id: '4',
        name: 'AI Voiceover Pro',
        description: 'Complete guide to AI voiceovers. ElevenLabs, Murf AI, and more. For podcasts, videos, and content.',
        price: 67,
        originalPrice: 127,
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800',
        affiliateUrl: '#',
        rating: 4.8,
        features: ['Voice Scripts', '3 AI Tools', 'Tips & Tricks', 'Commercial Rights'],
    },
    {
        id: '5',
        name: 'Prompt Engineering Pro 2026',
        description: 'Master prompt engineering for GPT-5, Claude 4, and Gemini 2. 200+ tested prompts included.',
        price: 47,
        originalPrice: 97,
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        affiliateUrl: '#',
        rating: 4.9,
        features: ['200+ Prompts', 'Advanced Techniques', 'Use Cases', 'Updates'],
    },
    {
        id: '6',
        name: 'AI Business Automation',
        description: 'Complete system to automate your business with AI agents. Save 10+ hours per week.',
        price: 147,
        originalPrice: 297,
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
        affiliateUrl: '#',
        rating: 4.8,
        features: ['Automation System', 'AI Agents', 'Integrations', 'Support'],
    },
];

export default function StorePage() {
    return (
        <div className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                        AI Digital <span className="gradient-text">Products</span>
                    </h1>
                    <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                        Premium digital products to accelerate your AI journey in 2026.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-secondary-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="relative h-48">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                {product.originalPrice && (
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white font-bold rounded-full text-sm">
                                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-secondary-600 mb-4">
                                    {product.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {product.features.slice(0, 3).map((feature) => (
                                        <span key={feature} className="px-2 py-1 bg-white rounded text-xs font-medium text-secondary-600">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-secondary-900">${product.price}</span>
                                        {product.originalPrice && (
                                            <span className="ml-2 text-sm text-secondary-400 line-through">
                                                ${product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <a
                                    href={product.affiliateUrl}
                                    className="mt-4 block w-full py-3 bg-primary-600 text-white text-center font-bold rounded-lg hover:bg-primary-700 transition-colors"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Want to Sell Your Own AI Products?
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Join our affiliate program and earn commissions by promoting these products.
                    </p>
                    <a
                        href="/newsletter"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
}
