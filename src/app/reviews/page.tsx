import { Metadata } from 'next';
import { AffiliateButton } from '@/components/affiliate';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Tool Reviews 2026',
    description: 'In-depth, honest reviews of the latest AI tools in 2026. Make informed decisions with our expert analysis.',
};

// Updated reviews for February 2026
const reviews = [
    {
        id: '1',
        productName: 'GPT-5',
        productLogo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200',
        title: 'GPT-5 Review: Is It the Best AI in 2026?',
        slug: 'gpt5-review-2026',
        summary: 'OpenAI\'s GPT-5 sets new benchmarks with improved reasoning, multimodal capabilities, and agent-like features. The new o1 model integration makes it exceptional for complex tasks.',
        pros: ['Advanced reasoning', 'Multimodal excellence', 'Agent features', 'Great API'],
        cons: ['Premium pricing', 'Rate limits', 'Can still hallucinate'],
        rating: 4.9,
        ratingBreakdown: { features: 4.9, easeOfUse: 4.8, value: 4.7, support: 4.8 },
        affiliateUrl: 'https://chat.openai.com',
        coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        date: '2026-02-10',
        category: 'AI Assistants',
    },
    {
        id: '2',
        productName: 'Claude 4',
        productLogo: 'https://images.unsplash.com/photo-1684163761883-c81a1acd8d4d?w=200',
        title: 'Claude 4 Review: The Thinking AI Champion',
        slug: 'claude-4-review-2026',
        summary: 'Claude 4 continues Anthropic\'s focus on safe, helpful AI. The new Claude Code agent makes it exceptional for developers.',
        pros: ['Superb reasoning', 'Claude Code agent', 'Extended context', 'Safe by design'],
        cons: ['Smaller community', 'Fewer plugins', 'Can be conservative'],
        rating: 4.8,
        ratingBreakdown: { features: 4.8, easeOfUse: 4.9, value: 4.7, support: 4.8 },
        affiliateUrl: 'https://claude.ai',
        coverImage: 'https://images.unsplash.com/photo-1684163761883-c81a1acd8d4d?w=800',
        date: '2026-02-08',
        category: 'AI Assistants',
    },
    {
        id: '3',
        productName: 'Runway Gen-3',
        productLogo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200',
        title: 'Runway Gen-3 Review: AI Video Revolution',
        slug: 'runway-gen3-review-2026',
        summary: 'Runway Gen-3 Alpha delivers photorealistic video generation with unprecedented control. A game-changer for content creators.',
        pros: ['Photorealistic output', 'Advanced controls', 'Regular updates', 'Team features'],
        cons: ['Credit-based pricing', 'Processing time', 'Learning curve'],
        rating: 4.7,
        ratingBreakdown: { features: 4.9, easeOfUse: 4.5, value: 4.5, support: 4.6 },
        affiliateUrl: 'https://runwayml.com',
        coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
        date: '2026-02-05',
        category: 'AI Video',
    },
    {
        id: '4',
        productName: 'ElevenLabs',
        productLogo: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=200',
        title: 'ElevenLabs Review: Best AI Voice in 2026?',
        slug: 'elevenlabs-review-2026',
        summary: 'ElevenLabs remains the leader in AI voice generation with voice cloning, multilingual support, and emotional expression.',
        pros: ['Voice cloning', 'Multilingual', 'Emotional range', 'API access'],
        cons: ['Credit limits', 'Can be misused', 'Pricing changes'],
        rating: 4.8,
        ratingBreakdown: { features: 4.9, easeOfUse: 4.8, value: 4.6, support: 4.7 },
        affiliateUrl: 'https://elevenlabs.io',
        coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800',
        date: '2026-02-01',
        category: 'AI Voice',
    },
    {
        id: '5',
        productName: 'Midjourney V7',
        productLogo: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=200',
        title: 'Midjourney V7 Review: AI Art Evolution',
        slug: 'midjourney-v7-review-2026',
        summary: 'Midjourney V7 brings dramatic improvements in image quality, consistency, and new features like Style Tuner.',
        pros: ['Stunning quality', 'Style Tuner', 'Consistency', 'Active community'],
        cons: ['Discord-only', 'Credit system', 'Learning curve'],
        rating: 4.7,
        ratingBreakdown: { features: 4.8, easeOfUse: 4.3, value: 4.6, support: 4.5 },
        affiliateUrl: 'https://midjourney.com',
        coverImage: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=800',
        date: '2026-01-25',
        category: 'AI Design',
    },
    {
        id: '6',
        productName: 'Perplexity AI',
        productLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200',
        title: 'Perplexity AI Review: The New Search Engine',
        slug: 'perplexity-review-2026',
        summary: 'Perplexity challenges Google with AI-powered search that provides direct answers with sources. Essential for researchers.',
        pros: ['Direct answers', 'Source citations', 'Pro search', 'Fast results'],
        cons: ['Limited free tier', 'Not perfect', 'Can miss nuance'],
        rating: 4.6,
        ratingBreakdown: { features: 4.7, easeOfUse: 4.9, value: 4.4, support: 4.5 },
        affiliateUrl: 'https://perplexity.ai',
        coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        date: '2026-01-20',
        category: 'AI Search',
    },
];

export default function ReviewsPage() {
    return (
        <div className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                        AI Tool <span className="gradient-text">Reviews</span> 2026
                    </h1>
                    <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                        In-depth, honest reviews of the latest AI tools. Updated for February 2026.
                    </p>
                </div>

                <div className="space-y-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-secondary-50 rounded-2xl overflow-hidden">
                            <div className="grid md:grid-cols-3 gap-0">
                                <div className="relative h-64 md:h-auto">
                                    <img
                                        src={review.coverImage}
                                        alt={review.productName}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                                <div className="md:col-span-2 p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                                            {review.category}
                                        </span>
                                        <span className="text-secondary-500 text-sm">
                                            {review.date}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-secondary-900 mb-3">
                                        {review.title}
                                    </h2>

                                    <p className="text-secondary-600 mb-6">
                                        {review.summary}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                                            <ul className="space-y-1">
                                                {review.pros.map((pro, i) => (
                                                    <li key={i} className="text-sm text-secondary-600 flex items-center gap-2">
                                                        <span className="text-green-500">✓</span> {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                                            <ul className="space-y-1">
                                                {review.cons.map((con, i) => (
                                                    <li key={i} className="text-sm text-secondary-600 flex items-center gap-2">
                                                        <span className="text-red-500">✗</span> {con}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-5 h-5 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="font-bold text-secondary-900">{review.rating}</span>
                                        </div>
                                        <AffiliateButton
                                            href={review.affiliateUrl}
                                            text="Visit Website"
                                            variant="primary"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
