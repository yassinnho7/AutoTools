import Link from 'next/link';
import { Metadata } from 'next';
import { siteConfig, categories } from '@/lib/config';
import { BlogCard } from '@/components/blog';
import { AffiliateButton, CTABox, ProductCard } from '@/components/affiliate';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp, Users, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
};

// Sample featured posts (in production, these would come from the file system)
const featuredPosts = [
    {
        slug: 'best-ai-writing-tools-2024',
        title: 'Best AI Writing Tools in 2024: Complete Guide',
        excerpt: 'Discover the top AI writing tools that can help you create content faster and better. We tested 20+ tools to bring you the best recommendations.',
        date: '2024-01-15',
        coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg' },
        category: { name: 'AI Writing', slug: 'ai-writing', description: '', color: 'blue' },
        tags: [],
        readingTime: '8 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'chatgpt-vs-claude-vs-gemini',
        title: 'ChatGPT vs Claude vs Gemini: Which AI is Best?',
        excerpt: 'A comprehensive comparison of the three leading AI assistants. We test their capabilities, pricing, and real-world performance.',
        date: '2024-01-12',
        coverImage: 'https://images.unsplash.com/photo-1684163761883-c81a1acd8d4d?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg' },
        category: { name: 'Comparisons', slug: 'comparisons', description: '', color: 'purple' },
        tags: [],
        readingTime: '12 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'ai-tools-for-content-creators',
        title: '50+ AI Tools Every Content Creator Needs',
        excerpt: 'From video editing to thumbnail creation, these AI tools will transform your content creation workflow.',
        date: '2024-01-10',
        coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg' },
        category: { name: 'Productivity', slug: 'productivity', description: '', color: 'orange' },
        tags: [],
        readingTime: '15 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
];

// Sample products
const featuredProducts = [
    {
        id: '1',
        name: 'AI Writing Masterclass',
        slug: 'ai-writing-masterclass',
        description: 'Learn how to use AI writing tools to 10x your content production. Includes 50+ prompts and templates.',
        shortDescription: 'Master AI writing tools',
        price: 47,
        originalPrice: 97,
        currency: 'USD',
        coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
        images: [],
        category: { name: 'Courses', slug: 'courses', description: '' },
        features: ['50+ AI Prompts', 'Video Tutorials', 'Templates', 'Lifetime Access'],
        benefits: [],
        rating: 4.8,
        reviewCount: 234,
        affiliateUrl: 'https://gum.co/ai-writing-masterclass',
        platform: 'gumroad' as const,
        seo: { title: '', description: '', keywords: [] },
    },
    {
        id: '2',
        name: 'AI Tools Database',
        slug: 'ai-tools-database',
        description: 'Access our curated database of 500+ AI tools with reviews, pricing, and use cases. Updated weekly.',
        shortDescription: '500+ AI tools database',
        price: 19,
        currency: 'USD',
        coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        images: [],
        category: { name: 'Resources', slug: 'resources', description: '' },
        features: ['500+ Tools', 'Weekly Updates', 'Reviews', 'Categories'],
        benefits: [],
        rating: 4.9,
        reviewCount: 567,
        affiliateUrl: 'https://gum.co/ai-tools-database',
        platform: 'gumroad' as const,
        seo: { title: '', description: '', keywords: [] },
    },
];

const features = [
    {
        icon: Zap,
        title: 'Expert Reviews',
        description: 'In-depth, unbiased reviews of AI tools and software to help you make informed decisions.',
    },
    {
        icon: Target,
        title: 'Detailed Comparisons',
        description: 'Side-by-side comparisons to find the perfect tool for your specific needs.',
    },
    {
        icon: TrendingUp,
        title: 'Growth Strategies',
        description: 'Proven strategies to leverage AI tools for business growth and productivity.',
    },
    {
        icon: Users,
        title: 'Community Insights',
        description: 'Join 10,000+ creators sharing their experiences and recommendations.',
    },
];

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden gradient-bg">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="container-custom section-padding relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            Trusted by 10,000+ creators
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 text-balance">
                            Find the Best{' '}
                            <span className="gradient-text">AI Tools</span>{' '}
                            for Your Business
                        </h1>
                        <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
                            Expert reviews, detailed comparisons, and actionable guides to help you leverage AI for growth.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/blog" className="btn-primary btn-lg">
                                Explore Articles
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link href="/tools" className="btn-outline btn-lg">
                                Browse Tools
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="text-center p-6">
                                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-7 h-7 text-primary-600" />
                                </div>
                                <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-secondary-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="section-padding bg-secondary-50">
                <div className="container-custom">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary-900">Latest Articles</h2>
                            <p className="text-secondary-600 mt-2">Expert insights and guides on AI tools</p>
                        </div>
                        <Link
                            href="/blog"
                            className="hidden md:flex items-center text-primary-600 font-medium hover:text-primary-700"
                        >
                            View All <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredPosts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                    <div className="mt-8 text-center md:hidden">
                        <Link href="/blog" className="btn-primary">
                            View All Articles
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-secondary-900">Browse by Category</h2>
                        <p className="text-secondary-600 mt-2">Find tools and guides for your specific needs</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/blog/category/${category.slug}`}
                                className="card p-6 text-center hover:border-primary-200"
                            >
                                <h3 className="font-heading font-semibold text-secondary-900">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-secondary-500 mt-1">{category.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-accent-600">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Get Weekly AI Tool Insights
                        </h2>
                        <p className="text-lg opacity-90 mb-8">
                            Join 10,000+ creators getting our free newsletter with the latest AI tools, reviews, and growth strategies.
                        </p>
                        <form
                            action="/api/newsletter"
                            method="POST"
                            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                        >
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="flex-1 px-6 py-4 rounded-lg text-secondary-900 placeholder:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button type="submit" className="btn-accent btn-lg whitespace-nowrap">
                                Subscribe Free
                            </button>
                        </form>
                        <p className="text-sm opacity-75 mt-4">
                            No spam. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </section>

            {/* Digital Products */}
            <section className="section-padding bg-secondary-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-secondary-900">Digital Products</h2>
                        <p className="text-secondary-600 mt-2">Resources to accelerate your AI journey</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                originalPrice={product.originalPrice}
                                image={product.coverImage}
                                affiliateUrl={product.affiliateUrl}
                                rating={product.rating}
                                features={product.features}
                            />
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="/store" className="btn-outline">
                            View All Products <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Box Example */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <CTABox
                            title="Ready to Transform Your Workflow?"
                            description="Get started with our top-rated AI tools and resources. Join thousands of creators already using AI to grow their business."
                            buttonText="Explore Top Tools"
                            buttonHref="/tools"
                            badge="Recommended"
                            features={[
                                'Save 10+ hours per week',
                                'Increase productivity by 3x',
                                'Access exclusive deals',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="section-padding bg-secondary-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-secondary-900">Trusted by Creators</h2>
                        <p className="text-secondary-600 mt-2">Join our community of successful creators</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "AI Tools Hub helped me find the perfect writing assistant. My productivity has doubled!",
                                author: "Sarah Chen",
                                role: "Content Creator",
                                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
                            },
                            {
                                quote: "The comparison guides saved me hours of research. Highly recommended for anyone starting with AI.",
                                author: "Mike Johnson",
                                role: "Digital Marketer",
                                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
                            },
                            {
                                quote: "Best resource for AI tools. The newsletter alone is worth subscribing for.",
                                author: "Emily Davis",
                                role: "Entrepreneur",
                                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
                            },
                        ].map((testimonial, index) => (
                            <div key={index} className="card p-6">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-secondary-700 mb-4">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-medium text-secondary-900">{testimonial.author}</p>
                                        <p className="text-sm text-secondary-500">{testimonial.role}</p>
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
