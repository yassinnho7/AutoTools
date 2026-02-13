import { Metadata } from 'next';
import { Download, BookOpen, FileText, Video, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Free AI Resources 2026',
    description: 'Free AI tools resources, guides, templates, and checklists to help you grow in 2026.',
};

// Updated resources for 2026
const resources = [
    {
        title: '100 AI Tools for 2026',
        description: 'Complete list of the best AI tools with categories, pricing, and features. Updated for February 2026.',
        type: 'PDF Guide',
        icon: FileText,
        downloadUrl: '/newsletter',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    },
    {
        title: 'AI Agents Prompt Pack 2026',
        description: '100+ tested prompts for AI agents like Claude Code, GPT-5, and custom assistants.',
        type: 'PDF Guide',
        icon: BookOpen,
        downloadUrl: '/newsletter',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    },
    {
        title: 'AI Video Creation Checklist',
        description: 'Step-by-step checklist for creating professional AI videos in 2026.',
        type: 'Checklist',
        icon: FileText,
        downloadUrl: '/newsletter',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400',
    },
    {
        title: 'AI Business Automation Course',
        description: '5-day email course on using AI agents to automate your business.',
        type: 'Email Course',
        icon: Video,
        downloadUrl: '/newsletter',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
    },
    {
        title: 'AI SEO Tools Guide 2026',
        description: 'Complete guide to using AI for SEO in 2026. Rankings, content, and strategy.',
        type: 'PDF Guide',
        icon: FileText,
        downloadUrl: '/newsletter',
        image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400',
    },
    {
        title: 'Weekly AI Tools Newsletter',
        description: 'Get weekly updates on new AI tools, reviews, and tips delivered to your inbox.',
        type: 'Newsletter',
        icon: Mail,
        downloadUrl: '/newsletter',
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400',
    },
];

export default function ResourcesPage() {
    return (
        <div className="section-padding bg-secondary-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                        Free AI <span className="gradient-text">Resources</span> 2026
                    </h1>
                    <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                        Free guides, templates, and resources to help you leverage AI in 2026.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                            <div className="relative h-48">
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-secondary-900">
                                        {resource.type}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                                    {resource.title}
                                </h3>
                                <p className="text-secondary-600 mb-4">
                                    {resource.description}
                                </p>
                                <a
                                    href={resource.downloadUrl}
                                    className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
                                >
                                    Get Free Access
                                    <Download className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Want More Free Resources?
                    </h2>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Subscribe to our newsletter and get exclusive access to premium resources, prompts, and templates.
                    </p>
                    <a
                        href="/newsletter"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
                    >
                        Subscribe Free
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
