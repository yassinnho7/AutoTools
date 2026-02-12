import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateButton } from '@/components/affiliate';
import { Star, ThumbsUp, ThumbsDown, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Tool Reviews',
    description: 'In-depth, honest reviews of AI tools and software. Make informed decisions with our expert analysis.',
};

const reviews = [
    {
        id: '1',
        productName: 'ChatGPT',
        productLogo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200',
        title: 'ChatGPT Review: Still the Best AI Assistant in 2024?',
        slug: 'chatgpt-review',
        summary: 'ChatGPT remains one of the most versatile AI assistants available. Excellent for general tasks, coding, and creative writing.',
        pros: ['Versatile and powerful', 'Easy to use', 'Great for coding', 'Regular updates'],
        cons: ['Can hallucinate facts', 'Knowledge cutoff', 'Rate limits on free tier'],
        rating: 4.8,
        ratingBreakdown: { features: 4.8, easeOfUse: 5.0, value: 4.5, support: 4.5 },
        affiliateUrl: 'https://chat.openai.com',
        coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        date: '2024-01-15',
        category: 'AI Writing',
    },
    {
        id: '2',
        productName: 'Claude',
        productLogo: 'https://images.unsplash.com/photo-1684163761883-c81a1acd8d4d?w=200',
        title: 'Claude Review: The Thinking Person\'s AI',
        slug: 'claude-review',
        summary: 'Claude excels at nuanced reasoning and long-form content. Its 200K context window is a game-changer.',
        pros: ['Excellent reasoning', 'Long context window', 'Safe and ethical', 'Great for analysis'],
        cons: ['Slower responses', 'Less creative', 'Fewer integrations'],
        rating: 4.9,
        ratingBreakdown: { features: 4.9, easeOfUse: 4.8, value: 4.8, support: 4.9 },
        affiliateUrl: 'https://claude.ai',
        coverImage: 'https://images.unsplash.com/photo-1684163761883-c81a1acd8d4d?w=800',
        date: '2024-01-12',
        category: 'AI Writing',
    },
    {
        id: '3',
        productName: 'Midjourney',
        productLogo: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=200',
        title: 'Midjourney Review: Create Stunning AI Art',
        slug: 'midjourney-review',
        summary: 'Midjourney produces some of the most beautiful AI-generated artwork. Perfect for designers and creators.',
        pros: ['Stunning output quality', 'Active community', 'Regular model updates', 'Style variety'],
        cons: ['Discord-only interface', 'Learning curve', 'No API access'],
        rating: 4.7,
        ratingBreakdown: { features: 4.5, easeOfUse: 4.2, value: 4.8, support: 4.5 },
        affiliateUrl: 'https://midjourney.com',
        coverImage: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=800',
        date: '2024-01-10',
        category: 'AI Design',
    },
];

export default function ReviewsPage() {
    return (
        <>
            {/* Hero */}
            <section className="gradient-bg section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                            AI Tool Reviews
                        </h1>
                        <p className="text-xl text-secondary-600">
                            In-depth, honest reviews to help you choose the right AI tools for your needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Reviews List */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="space-y-8">
                        {reviews.map((review) => (
                            <article key={review.id} className="card overflow-hidden">
                                <div className="grid md:grid-cols-3 gap-0">
                                    {/* Image */}
                                    <div className="relative aspect-video md:aspect-auto overflow-hidden">
                                        <img
                                            src={review.coverImage}
                                            alt={review.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="tag">{review.category}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="md:col-span-2 p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <img
                                                src={review.productLogo}
                                                alt={review.productName}
                                                className="w-10 h-10 rounded-lg object-cover"
                                            />
                                            <div>
                                                <h2 className="font-heading font-bold text-xl text-secondary-900">
                                                    <Link href={`/reviews/${review.slug}`} className="hover:text-primary-600">
                                                        {review.title}
                                                    </Link>
                                                </h2>
                                            </div>
                                        </div>

                                        <p className="text-secondary-600 mb-4">{review.summary}</p>

                                        {/* Rating */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-5 h-5 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-current' : 'text-secondary-200'
                                                            }`}
                                                    />
                                                ))}
                                                <span className="ml-2 font-bold text-secondary-900">{review.rating}</span>
                                            </div>
                                            <span className="text-sm text-secondary-500">
                                                {review.date}
                                            </span>
                                        </div>

                                        {/* Pros & Cons */}
                                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-green-600 flex items-center gap-1 mb-2">
                                                    <ThumbsUp className="w-4 h-4" /> Pros
                                                </h4>
                                                <ul className="space-y-1">
                                                    {review.pros.slice(0, 2).map((pro) => (
                                                        <li key={pro} className="text-sm text-secondary-600 flex items-start gap-2">
                                                            <span className="text-green-500 mt-0.5">•</span>
                                                            {pro}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-red-500 flex items-center gap-1 mb-2">
                                                    <ThumbsDown className="w-4 h-4" /> Cons
                                                </h4>
                                                <ul className="space-y-1">
                                                    {review.cons.slice(0, 2).map((con) => (
                                                        <li key={con} className="text-sm text-secondary-600 flex items-start gap-2">
                                                            <span className="text-red-400 mt-0.5">•</span>
                                                            {con}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <Link
                                                href={`/reviews/${review.slug}`}
                                                className="text-primary-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                                            >
                                                Read Full Review <ArrowRight className="w-4 h-4" />
                                            </Link>
                                            <AffiliateButton href={review.affiliateUrl} text="Try It" size="sm" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
