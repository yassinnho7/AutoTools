import { Metadata } from 'next';
import { AffiliateButton } from '@/components/affiliate';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Tools Directory 2026',
    description: 'Discover the best AI tools for your business. Curated directory with 2026\'s top AI tools.',
};

// Updated tools for 2026
const tools = [
    // AI Assistants
    {
        id: '1',
        name: 'GPT-5',
        description: 'OpenAI\'s most advanced AI model with agent features and multimodal capabilities.',
        logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200',
        website: 'https://chat.openai.com',
        affiliateUrl: 'https://chat.openai.com',
        category: 'AI Assistants',
        pricing: 'freemium',
        startingPrice: 20,
        features: ['Agent features', 'Sora video', 'GPT-5 o1 model', 'Advanced reasoning'],
        rating: 4.9,
        reviewCount: 2500,
    },
    {
        id: '2',
        name: 'Claude 4',
        description: 'Anthropic\'s latest AI with exceptional reasoning and Claude Code agent.',
        logo: 'https://images.unsplash.com/photo-1684163761883-c81a1acd8d4d?w=200',
        website: 'https://claude.ai',
        affiliateUrl: 'https://claude.ai',
        category: 'AI Assistants',
        pricing: 'freemium',
        startingPrice: 20,
        features: ['Claude Code', '200K context', 'Safe AI', 'Extended thinking'],
        rating: 4.8,
        reviewCount: 1800,
    },
    {
        id: '3',
        name: 'Gemini 2',
        description: 'Google\'s most capable AI with 2M token context and native multimodal.',
        logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200',
        website: 'https://gemini.google.com',
        affiliateUrl: 'https://gemini.google.com',
        category: 'AI Assistants',
        pricing: 'freemium',
        startingPrice: 20,
        features: ['2M tokens', 'Veo 2 video', 'Google ecosystem', 'Fast processing'],
        rating: 4.7,
        reviewCount: 1500,
    },
    // AI Video
    {
        id: '4',
        name: 'Runway Gen-3',
        description: 'Professional AI video generation with photorealistic results.',
        logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200',
        website: 'https://runwayml.com',
        affiliateUrl: 'https://runwayml.com',
        category: 'AI Video',
        pricing: 'paid',
        startingPrice: 15,
        features: ['Video generation', 'Advanced controls', 'Consistency', 'Team features'],
        rating: 4.7,
        reviewCount: 890,
    },
    {
        id: '5',
        name: 'Pika',
        description: 'Fast and easy AI video generator for creators.',
        logo: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=200',
        website: 'https://pika.art',
        affiliateUrl: 'https://pika.art',
        category: 'AI Video',
        pricing: 'freemium',
        startingPrice: 10,
        features: ['Quick generation', 'Easy interface', 'Social media ready', 'Free tier'],
        rating: 4.5,
        reviewCount: 650,
    },
    {
        id: '6',
        name: 'Kling AI',
        description: 'Powerful AI video tool from China with impressive results.',
        logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200',
        website: 'https://klingai.com',
        affiliateUrl: 'https://klingai.com',
        category: 'AI Video',
        pricing: 'freemium',
        startingPrice: 0,
        features: ['Long videos', 'High quality', 'Free tier', 'Fast processing'],
        rating: 4.6,
        reviewCount: 420,
    },
    // AI Voice
    {
        id: '7',
        name: 'ElevenLabs',
        description: 'Industry-leading AI voice generator with voice cloning.',
        logo: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=200',
        website: 'https://elevenlabs.io',
        affiliateUrl: 'https://elevenlabs.io',
        category: 'AI Voice',
        pricing: 'freemium',
        startingPrice: 5,
        features: ['Voice cloning', 'Multilingual', 'Emotional voice', 'API access'],
        rating: 4.8,
        reviewCount: 1100,
    },
    {
        id: '8',
        name: 'Murf AI',
        description: 'Professional voiceover studio with 120+ AI voices.',
        logo: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=200',
        website: 'https://murf.ai',
        affiliateUrl: 'https://murf.ai',
        category: 'AI Voice',
        pricing: 'paid',
        startingPrice: 19,
        features: ['120+ voices', 'Studio quality', 'Custom voices', 'Collaboration'],
        rating: 4.6,
        reviewCount: 780,
    },
    // AI Image
    {
        id: '9',
        name: 'Midjourney V7',
        description: 'The most beautiful AI art generator with Style Tuner.',
        logo: 'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=200',
        website: 'https://midjourney.com',
        affiliateUrl: 'https://midjourney.com',
        category: 'AI Design',
        pricing: 'paid',
        startingPrice: 10,
        features: ['Style Tuner', 'Consistency', 'High quality', 'Active community'],
        rating: 4.7,
        reviewCount: 2000,
    },
    {
        id: '10',
        name: 'DALL-E 3',
        description: 'OpenAI\'s image generator integrated with ChatGPT.',
        logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200',
        website: 'https://openai.com/dall-e-3',
        affiliateUrl: 'https://openai.com/dall-e-3',
        category: 'AI Design',
        pricing: 'paid',
        startingPrice: 10,
        features: ['ChatGPT integration', 'Text accuracy', 'Safety filters', 'API access'],
        rating: 4.6,
        reviewCount: 1600,
    },
    // AI Search
    {
        id: '11',
        name: 'Perplexity AI',
        description: 'AI-powered search engine with direct answers and sources.',
        logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200',
        website: 'https://perplexity.ai',
        affiliateUrl: 'https://perplexity.ai',
        category: 'AI Search',
        pricing: 'freemium',
        startingPrice: 20,
        features: ['Source citations', 'Pro search', 'Focus modes', 'Threads'],
        rating: 4.6,
        reviewCount: 950,
    },
    // AI Coding
    {
        id: '12',
        name: 'GitHub Copilot',
        description: 'AI pair programmer integrated into VS Code and GitHub.',
        logo: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=200',
        website: 'https://github.com/features/copilot',
        affiliateUrl: 'https://github.com/features/copilot',
        category: 'AI Coding',
        pricing: 'paid',
        startingPrice: 10,
        features: ['Code completion', 'Multi-language', 'IDE integration', 'Chat feature'],
        rating: 4.7,
        reviewCount: 2200,
    },
];

const categories = ['All', 'AI Assistants', 'AI Video', 'AI Voice', 'AI Design', 'AI Search', 'AI Coding'];

export default function ToolsPage() {
    return (
        <div className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                        AI Tools <span className="gradient-text">Directory</span> 2026
                    </h1>
                    <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                        Curated list of the best AI tools. Updated for February 2026.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {tools.map((tool) => (
                        <div key={tool.id} className="bg-secondary-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                    <img src={tool.logo} alt={tool.name} className="w-10 h-10 object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary-900">{tool.name}</h3>
                                    <span className="text-xs text-secondary-500">{tool.category}</span>
                                </div>
                            </div>

                            <p className="text-sm text-secondary-600 mb-4">{tool.description}</p>

                            <div className="flex flex-wrap gap-1 mb-4">
                                {tool.features.slice(0, 3).map((feature) => (
                                    <span key={feature} className="px-2 py-1 bg-white rounded text-xs text-secondary-600">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="font-medium text-secondary-900">{tool.rating}</span>
                                    <span className="text-secondary-400 text-sm">({tool.reviewCount})</span>
                                </div>
                                <span className={`text-sm font-medium ${tool.pricing === 'free' ? 'text-green-600' : tool.pricing === 'freemium' ? 'text-blue-600' : 'text-secondary-600'}`}>
                                    {tool.pricing === 'free' ? 'Free' : tool.pricing === 'freemium' ? 'From $' + tool.startingPrice : 'From $' + tool.startingPrice}
                                </span>
                            </div>

                            <AffiliateButton
                                href={tool.affiliateUrl}
                                text="Visit"
                                variant="outline"
                                size="sm"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
