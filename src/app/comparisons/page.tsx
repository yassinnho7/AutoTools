import { Metadata } from 'next';
import { ComparisonTable } from '@/components/affiliate';

export const metadata: Metadata = {
    title: 'AI Tool Comparisons 2026',
    description: 'Side-by-side comparisons of the best AI tools in 2026. Find the perfect tool for your needs.',
};

// Updated comparisons for 2026
const comparisons = [
    {
        title: 'GPT-5 vs Claude 4 vs Gemini 2: Complete Comparison 2026',
        slug: 'gpt5-vs-claude4-vs-gemini2',
        description: 'The ultimate showdown between the three leading AI assistants. Which one is right for you?',
        products: ['GPT-5', 'Claude 4', 'Gemini 2'],
        category: 'AI Assistants',
    },
    {
        title: 'Runway vs Pika vs Kling: Best AI Video Generator 2026',
        slug: 'runway-vs-pika-vs-kling-2026',
        description: 'Which AI video generator delivers the best results? We compare the top 3.',
        products: ['Runway Gen-3', 'Pika', 'Kling AI'],
        category: 'AI Video',
    },
    {
        title: 'ElevenLabs vs Murf AI vs WellSaid: Best Voiceover 2026',
        slug: 'elevenlabs-vs-murf-vs-wellsaid-2026',
        description: 'Compare the top AI voice generators for podcasts and videos.',
        products: ['ElevenLabs', 'Murf AI', 'WellSaid'],
        category: 'AI Voice',
    },
    {
        title: 'Midjourney vs DALL-E 3 vs Stable Diffusion 3',
        slug: 'midjourney-vs-dalle3-vs-sd3',
        description: 'Which AI image generator creates the best artwork in 2026?',
        products: ['Midjourney V7', 'DALL-E 3', 'Stable Diffusion 3'],
        category: 'AI Design',
    },
    {
        title: 'Perplexity vs ChatGPT vs Gemini: Best AI Search',
        slug: 'perplexity-vs-chatgpt-vs-gemini-search',
        description: 'Which AI search tool gives the best answers?',
        products: ['Perplexity Pro', 'ChatGPT Search', 'Gemini Advanced'],
        category: 'AI Search',
    },
    {
        title: 'Jasper vs Copy.ai vs Writesonic: Best AI Writing 2026',
        slug: 'jasper-vs-copyai-vs-writesonic-2026',
        description: 'Comparing the top AI writing assistants for marketers in 2026.',
        products: ['Jasper', 'Copy.ai', 'Writesonic'],
        category: 'AI Writing',
    },
];

// Detailed comparison data
const aiAssistantComparison = {
    title: 'GPT-5 vs Claude 4 vs Gemini 2',
    description: 'Compare the leading AI assistants side by side.',
    features: ['Free Tier', 'API Access', 'Image Gen', 'Code Gen', 'Video Gen', 'Voice Mode', 'Max Context'],
    items: [
        {
            name: 'GPT-5',
            logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200',
            rating: 4.9,
            pros: ['Advanced reasoning', 'Agent features', 'GPT-5 o1 model', 'Large ecosystem'],
            cons: ['Premium pricing', 'Can hallucinate'],
            features: {
                'Free Tier': '✓ (Limited)',
                'API Access': '✓',
                'Image Gen': '✓ (DALL-E 3)',
                'Code Gen': '✓ (Advanced)',
                'Video Gen': '✓ (Sora)',
                'Voice Mode': '✓',
                'Max Context': '200K tokens',
            },
            price: '$20/mo',
            affiliateUrl: 'https://chat.openai.com',
        },
        {
            name: 'Claude 4',
            logo: 'https://images.unsplash.com/photo-1684163761883-c81a1acd8d4d?w=200',
            rating: 4.8,
            pros: ['Superb reasoning', 'Claude Code', 'Safe by design', 'Extended context'],
            cons: ['Smaller plugin ecosystem', 'Conservative responses'],
            features: {
                'Free Tier': '✓ (Limited)',
                'API Access': '✓',
                'Image Gen': '✗',
                'Code Gen': '✓ (Claude Code)',
                'Video Gen': '✗',
                'Voice Mode': '✓',
                'Max Context': '200K tokens',
            },
            price: '$20/mo',
            affiliateUrl: 'https://claude.ai',
        },
        {
            name: 'Gemini 2',
            logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200',
            rating: 4.7,
            pros: ['Google ecosystem', 'Fast responses', 'Multimodal', 'Free tier'],
            cons: ['Less reasoning depth', 'Fewer plugins'],
            features: {
                'Free Tier': '✓ (Generous)',
                'API Access': '✓',
                'Image Gen': '✓ (Imagento)',
                'Code Gen': '✓',
                'Video Gen': '✓ (Veo 2)',
                'Voice Mode': '✓',
                'Max Context': '2M tokens',
            },
            price: '$20/mo',
            affiliateUrl: 'https://gemini.google.com',
        },
    ],
};

export default function ComparisonsPage() {
    return (
        <div className="section-padding bg-secondary-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                        AI Tool <span className="gradient-text">Comparisons</span> 2026
                    </h1>
                    <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                        Side-by-side comparisons of the best AI tools. Updated for February 2026.
                    </p>
                </div>

                {/* Main comparison table */}
                <div className="mb-16">
                    <ComparisonTable {...aiAssistantComparison} />
                </div>

                {/* More comparisons */}
                <h2 className="text-2xl font-bold text-secondary-900 mb-8">More Comparisons</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {comparisons.map((comp) => (
                        <div key={comp.slug} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <span className="text-sm text-primary-600 font-medium">{comp.category}</span>
                            <h3 className="text-lg font-bold text-secondary-900 mt-2 mb-2">{comp.title}</h3>
                            <p className="text-secondary-600 text-sm mb-4">{comp.description}</p>
                            <div className="flex gap-2 mb-4">
                                {comp.products.map((product) => (
                                    <span key={product} className="px-2 py-1 bg-secondary-100 rounded text-xs font-medium">
                                        {product}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
