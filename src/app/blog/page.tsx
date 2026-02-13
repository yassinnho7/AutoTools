import { Metadata } from 'next';
import { BlogCard } from '@/components/blog';

export const metadata: Metadata = {
    title: 'AI Blog - Latest AI Tools & Guides 2026',
    description: 'Expert insights on AI tools, software reviews, and tutorials. Stay updated with the latest AI trends in 2026.',
};

// Blog posts - Updated February 2026
const allPosts = [
    {
        slug: 'best-ai-agents-2026',
        title: 'Best AI Agents in 2026: Complete Guide to Autonomous AI',
        excerpt: 'Discover the most powerful AI agents that can automate your workflow. From coding assistants to content creators.',
        date: '2026-02-10',
        coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'AI Tools', slug: 'ai-tools', description: '', color: 'blue' },
        tags: [{ name: 'AI Agents', slug: 'ai-agents' }, { name: 'Automation', slug: 'automation' }, { name: '2026', slug: '2026' }],
        readingTime: '8 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'ai-video-generation-2026',
        title: 'AI Video Generation Tools 2026: Create Videos with AI',
        excerpt: 'Transform your ideas into stunning videos with AI. Compare the best AI video generators of 2026.',
        date: '2026-02-08',
        coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'AI Video', slug: 'ai-video', description: '', color: 'purple' },
        tags: [{ name: 'AI Video', slug: 'ai-video' }, { name: 'Content Creation', slug: 'content-creation' }, { name: '2026', slug: '2026' }],
        readingTime: '6 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'ai-voice-cloning-2026',
        title: 'AI Voice Cloning & Voiceover Tools 2026',
        excerpt: 'Create natural-sounding voiceovers and clone your voice with AI. The best tools for podcasts and videos.',
        date: '2026-02-05',
        coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'AI Audio', slug: 'ai-audio', description: '', color: 'green' },
        tags: [{ name: 'AI Voice', slug: 'ai-voice' }, { name: 'Voiceover', slug: 'voiceover' }, { name: '2026', slug: '2026' }],
        readingTime: '5 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'gpt5-vs-claude4-vs-gemini2',
        title: 'GPT-5 vs Claude 4 vs Gemini 2: Complete Comparison 2026',
        excerpt: 'The ultimate showdown between the three leading AI assistants. Which one is right for you?',
        date: '2026-02-03',
        coverImage: 'https://images.unsplash.com/photo-1684163761883-c81a1acd8d4d?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'Comparisons', slug: 'comparisons', description: '', color: 'purple' },
        tags: [{ name: 'GPT-5', slug: 'gpt5' }, { name: 'Claude', slug: 'claude' }, { name: 'Gemini', slug: 'gemini' }],
        readingTime: '12 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'ai-tools-for-business-2026',
        title: '100+ AI Tools Every Business Owner Needs in 2026',
        excerpt: 'From automation to customer service, discover the AI tools that will transform your business this year.',
        date: '2026-01-28',
        coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'Productivity', slug: 'productivity', description: '', color: 'orange' },
        tags: [{ name: 'AI Business', slug: 'ai-business' }, { name: 'Automation', slug: 'automation' }, { name: '2026', slug: '2026' }],
        readingTime: '15 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'midjourney-v7-review',
        title: 'Midjourney V7 Review: Is It the Best AI Image Generator?',
        excerpt: 'Deep dive into Midjourney V7 new features, improvements, and how it compares to DALL-E 3.',
        date: '2026-01-20',
        coverImage: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'AI Design', slug: 'ai-design', description: '', color: 'pink' },
        tags: [{ name: 'Midjourney', slug: 'midjourney' }, { name: 'AI Art', slug: 'ai-art' }, { name: 'DALL-E', slug: 'dalle' }],
        readingTime: '10 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'ai-seo-tools-2026',
        title: 'Best AI SEO Tools to Rank Higher in 2026',
        excerpt: 'Boost your search rankings with these powerful AI-powered SEO tools. Updated for 2026.',
        date: '2026-01-15',
        coverImage: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'SEO Tools', slug: 'seo-tools', description: '', color: 'teal' },
        tags: [{ name: 'AI SEO', slug: 'ai-seo' }, { name: 'Rankings', slug: 'rankings' }, { name: '2026', slug: '2026' }],
        readingTime: '9 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
    {
        slug: 'ai-video-editing-2026',
        title: 'Best AI Video Editing Tools for YouTube 2026',
        excerpt: 'Create professional YouTube videos faster with these AI-powered editing tools.',
        date: '2026-01-10',
        coverImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800',
        author: { name: 'AI Tools Hub Team', avatar: '/images/authors/default-avatar.jpg', bio: '' },
        category: { name: 'AI Video', slug: 'ai-video', description: '', color: 'red' },
        tags: [{ name: 'YouTube', slug: 'youtube' }, { name: 'Video Editing', slug: 'video-editing' }, { name: 'AI', slug: 'ai' }],
        readingTime: '8 min read',
        content: '',
        seo: { title: '', description: '', keywords: [] },
    },
];

export default function BlogPage() {
    return (
        <div className="section-padding bg-secondary-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                        Latest AI <span className="gradient-text">Insights</span>
                    </h1>
                    <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                        Expert guides, reviews, and tutorials on the latest AI tools. Updated for February 2026.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
