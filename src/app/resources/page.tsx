import { Metadata } from 'next';
import Link from 'next/link';
import { Download, BookOpen, FileText, Video, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Free Resources',
    description: 'Free AI tools resources, guides, templates, and checklists to help you grow your business.',
};

const resources = [
    {
        title: 'AI Tools Cheatsheet',
        description: 'Quick reference guide to 50+ AI tools with categories, pricing, and use cases.',
        type: 'PDF',
        icon: FileText,
        downloadUrl: '/resources/ai-tools-cheatsheet',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    },
    {
        title: 'ChatGPT Prompt Pack',
        description: '100+ tested prompts for business, marketing, and productivity.',
        type: 'PDF',
        icon: BookOpen,
        downloadUrl: '/resources/chatgpt-prompt-pack',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    },
    {
        title: 'AI Writing Checklist',
        description: 'Step-by-step checklist for creating AI-assisted content that ranks.',
        type: 'PDF',
        icon: FileText,
        downloadUrl: '/resources/ai-writing-checklist',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
    },
    {
        title: 'SEO with AI Mini-Course',
        description: '5-day email course on leveraging AI for search engine optimization.',
        type: 'Email Course',
        icon: Video,
        downloadUrl: '/resources/seo-ai-course',
        image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400',
    },
    {
        title: 'AI Tools Comparison Spreadsheet',
        description: 'Compare features and pricing of top AI tools side by side.',
        type: 'Spreadsheet',
        icon: FileText,
        downloadUrl: '/resources/ai-tools-comparison',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    },
    {
        title: 'Content Calendar Template',
        description: 'AI-powered content planning template for consistent publishing.',
        type: 'Notion Template',
        icon: BookOpen,
        downloadUrl: '/resources/content-calendar',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400',
    },
];

export default function ResourcesPage() {
    return (
        <>
            <section className="gradient-bg section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                            Free Resources
                        </h1>
                        <p className="text-xl text-secondary-600">
                            Download free guides, templates, and checklists to supercharge your AI workflow.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map((resource) => (
                            <div key={resource.title} className="card group">
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className="px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded-full">
                                            {resource.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="flex items-center gap-2 mb-3">
                                        <resource.icon className="w-5 h-5 text-primary-600" />
                                        <h3 className="font-heading font-bold text-lg text-secondary-900">
                                            {resource.title}
                                        </h3>
                                    </div>
                                    <p className="text-secondary-600 text-sm mb-4">{resource.description}</p>
                                    <Link
                                        href={resource.downloadUrl}
                                        className="btn-primary w-full inline-flex justify-center"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Free
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-accent-600">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Want More Resources?</h2>
                        <p className="text-lg opacity-90 mb-8">
                            Subscribe to our newsletter and get exclusive resources delivered to your inbox every week.
                        </p>
                        <Link href="/newsletter" className="btn bg-white text-primary-700 hover:bg-secondary-100 btn-lg">
                            Subscribe Now <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
