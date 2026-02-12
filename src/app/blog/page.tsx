import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, categories } from '@/lib/config';
import { BlogCard } from '@/components/blog';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Expert reviews, guides, and tutorials on AI tools and software.',
};

// Sample posts for demonstration
const allPosts = [
    {
        slug: 'best-ai-writing-tools-2024',
        title: 'Best AI Writing Tools in 2024: Complete Guide',
        excerpt: 'Discover the top AI writing tools that can help you create content faster and better.',
        date: '2024-01-15',
        coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'AI Writing', slug: 'ai-writing', description: '', color: 'blue' },
        tags: [],
        readingTime: '8 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'chatgpt-vs-claude-vs-gemini',
        title: 'ChatGPT vs Claude vs Gemini: Which AI is Best?',
        excerpt: 'A comprehensive comparison of the three leading AI assistants.',
        date: '2024-01-12',
        coverImage: 'https://images.unsplash.com/photo-1684163761883-c81a1acd8d4d?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'Comparisons', slug: 'comparisons', description: '', color: 'purple' },
        tags: [],
        readingTime: '12 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'ai-tools-for-content-creators',
        title: '50+ AI Tools Every Content Creator Needs',
        excerpt: 'From video editing to thumbnail creation, these AI tools will transform your workflow.',
        date: '2024-01-10',
        coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'Productivity', slug: 'productivity', description: '', color: 'orange' },
        tags: [],
        readingTime: '15 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'midjourney-guide-for-beginners',
        title: 'Midjourney Guide for Beginners: Create Stunning AI Art',
        excerpt: 'Learn how to use Midjourney to create professional AI-generated artwork.',
        date: '2024-01-08',
        coverImage: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'AI Design', slug: 'ai-design', description: '', color: 'pink' },
        tags: [],
        readingTime: '10 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'ai-seo-tools',
        title: 'Best AI SEO Tools to Rank Higher in 2024',
        excerpt: 'Boost your search rankings with these powerful AI-powered SEO tools.',
        date: '2024-01-05',
        coverImage: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'SEO Tools', slug: 'seo-tools', description: '', color: 'teal' },
        tags: [],
        readingTime: '9 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'ai-video-editing-tools',
        title: 'Top AI Video Editing Tools for Creators',
        excerpt: 'Create professional videos faster with these AI-powered editing tools.',
        date: '2024-01-03',
        coverImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'AI Video', slug: 'ai-video', description: '', color: 'red' },
        tags: [],
        readingTime: '7 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
];

export default function BlogPage() {
    return (
        <>
            {/* Hero */}
            <section className="gradient-bg section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                            Blog
                        </h1>
                        <p className="text-xl text-secondary-600">
                            Expert reviews, guides, and tutorials to help you leverage AI tools for growth.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <div className="flex-1">
                            <div className="grid md:grid-cols-2 gap-6">
                                {allPosts.map((post) => (
                                    <BlogCard key={post.slug} post={post} />
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-center gap-2 mt-12">
                                <button className="btn-secondary btn-sm" disabled>
                                    Previous
                                </button>
                                <span className="px-4 py-2 bg-primary-600 text-white rounded-lg">1</span>
                                <span className="px-4 py-2 text-secondary-600 hover:bg-secondary-100 rounded-lg cursor-pointer">2</span>
                                <span className="px-4 py-2 text-secondary-600 hover:bg-secondary-100 rounded-lg cursor-pointer">3</span>
                                <button className="btn-secondary btn-sm">
                                    Next
                                </button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-80">
                            {/* Categories */}
                            <div className="card p-6 mb-6">
                                <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-4">
                                    Categories
                                </h3>
                                <ul className="space-y-2">
                                    {categories.map((category) => (
                                        <li key={category.slug}>
                                            <Link
                                                href={`/blog/category/${category.slug}`}
                                                className="flex items-center justify-between text-secondary-600 hover:text-primary-600 transition-colors"
                                            >
                                                <span>{category.name}</span>
                                                <span className="text-sm text-secondary-400">12</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter */}
                            <div className="card p-6 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
                                <h3 className="font-heading font-semibold text-lg mb-2">
                                    Get Weekly AI Insights
                                </h3>
                                <p className="text-sm opacity-90 mb-4">
                                    Join 10,000+ creators getting our free newsletter.
                                </p>
                                <form action="/api/newsletter" method="POST">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your email"
                                        required
                                        className="w-full px-4 py-2 rounded-lg text-secondary-900 placeholder:text-secondary-500 mb-3"
                                    />
                                    <button type="submit" className="btn-accent w-full">
                                        Subscribe
                                    </button>
                                </form>
                            </div>

                            {/* Popular Posts */}
                            <div className="card p-6 mt-6">
                                <h3 className="font-heading font-semibold text-lg text-secondary-900 mb-4">
                                    Popular Posts
                                </h3>
                                <ul className="space-y-4">
                                    {allPosts.slice(0, 3).map((post) => (
                                        <li key={post.slug}>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="flex gap-3 group"
                                            >
                                                <img
                                                    src={post.coverImage}
                                                    alt={post.title}
                                                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                                />
                                                <div>
                                                    <h4 className="text-sm font-medium text-secondary-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                                                        {post.title}
                                                    </h4>
                                                    <span className="text-xs text-secondary-500">{post.readingTime}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
