/**
 * AI Content Generation Script
 * 
 * This script generates blog posts using AI (OpenAI API)
 * It reads keywords from a file and generates SEO-optimized content
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
    contentDir: path.join(process.cwd(), 'content', 'posts'),
    keywordsFile: path.join(process.cwd(), 'content', 'keywords.json'),
    templateDir: path.join(process.cwd(), 'scripts', 'templates'),
};

// Ensure content directory exists
function ensureDirectoryExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Generate frontmatter for MDX post
function generateFrontmatter(data) {
    return `---
title: "${data.title}"
excerpt: "${data.excerpt}"
date: "${data.date}"
coverImage: "${data.coverImage}"
category: "${data.category}"
tags: [${data.tags.map(tag => `"${tag}"`).join(', ')}]
featured: ${data.featured || false}
seo:
  title: "${data.seo.title}"
  description: "${data.seo.description}"
  keywords: [${data.seo.keywords.map(kw => `"${kw}"`).join(', ')}]
---

`;
}

// Generate blog post content
function generatePostContent(data) {
    const frontmatter = generateFrontmatter(data);

    const content = `${frontmatter}
# ${data.title}

${data.excerpt}

## Introduction

${data.introduction}

## Main Content

${data.mainContent}

## Key Features

${data.features.map((feature, index) => `
### ${index + 1}. ${feature.title}

${feature.description}
`).join('\n')}

## Pros and Cons

### Pros

${data.pros.map(pro => `- ✅ ${pro}`).join('\n')}

### Cons

${data.cons.map(con => `- ❌ ${con}`).join('\n')}

## Pricing

${data.pricing}

## Conclusion

${data.conclusion}

## Frequently Asked Questions

${data.faqs.map((faq, index) => `
### ${index + 1}. ${faq.question}

${faq.answer}
`).join('\n')}

---

*This article was last updated on ${data.date}.*
`;

    return content;
}

// Generate slug from title
function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

// Main function to generate content
async function generateContent() {
    console.log('🚀 Starting content generation...');

    // Ensure directories exist
    ensureDirectoryExists(CONFIG.contentDir);

    // Sample content data for demonstration
    const samplePosts = [
        {
            title: 'Best AI Writing Tools in 2024: Complete Guide',
            excerpt: 'Discover the top AI writing tools that can help you create content faster and better. We tested 20+ tools to bring you the best recommendations.',
            date: new Date().toISOString().split('T')[0],
            coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
            category: 'ai-writing',
            tags: ['AI Writing', 'Content Creation', 'Productivity'],
            featured: true,
            seo: {
                title: 'Best AI Writing Tools 2024 - Complete Comparison Guide',
                description: 'Comprehensive guide to the best AI writing tools in 2024. Compare features, pricing, and find the perfect tool for your needs.',
                keywords: ['AI writing tools', 'best AI writers', 'content generation', 'AI copywriting'],
            },
            introduction: 'AI writing tools have revolutionized content creation. Whether you\'re a blogger, marketer, or business owner, these tools can help you create high-quality content in a fraction of the time.',
            mainContent: 'In this comprehensive guide, we\'ll explore the best AI writing tools available in 2024. We\'ve tested over 20 tools to bring you honest, detailed reviews.',
            features: [
                { title: 'ChatGPT', description: 'The most versatile AI assistant for all types of writing tasks.' },
                { title: 'Claude', description: 'Excellent for long-form content and nuanced reasoning.' },
                { title: 'Jasper', description: 'Built specifically for marketing and business content.' },
            ],
            pros: ['Save hours of writing time', 'Improve content quality', 'Generate ideas quickly', 'Scale content production'],
            cons: ['May require editing', 'Can produce generic content', 'Learning curve for best results'],
            pricing: 'Most AI writing tools offer free tiers. Premium plans range from $20-100/month.',
            conclusion: 'AI writing tools are essential for modern content creators. Start with free tiers to find what works best for you.',
            faqs: [
                { question: 'Which AI writing tool is best for beginners?', answer: 'ChatGPT is the best starting point due to its versatility and free tier.' },
                { question: 'Can AI writing tools replace human writers?', answer: 'No, they\'re best used as assistants to enhance human creativity and productivity.' },
            ],
        },
    ];

    // Generate and save posts
    for (const postData of samplePosts) {
        const slug = generateSlug(postData.title);
        const content = generatePostContent(postData);
        const filePath = path.join(CONFIG.contentDir, `${slug}.mdx`);

        fs.writeFileSync(filePath, content);
        console.log(`✅ Generated: ${slug}.mdx`);
    }

    console.log('🎉 Content generation complete!');
}

// Run the script
generateContent().catch(console.error);
