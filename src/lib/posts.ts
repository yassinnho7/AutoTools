import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { Post, Category, Tag, Author } from '@/types';
import { defaultAuthor } from './config';

const contentDirectory = path.join(process.cwd(), 'content');
const postsDirectory = path.join(contentDirectory, 'posts');

export interface PostFrontmatter {
    title: string;
    excerpt?: string;
    date: string;
    modifiedDate?: string;
    coverImage: string;
    author?: Partial<Author>;
    category: string;
    tags?: string[];
    featured?: boolean;
    seo?: {
        title?: string;
        description?: string;
        keywords?: string[];
    };
}

/**
 * Get all post slugs
 */
export function getAllPostSlugs(): string[] {
    try {
        if (!fs.existsSync(postsDirectory)) {
            return [];
        }
        return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx') || file.endsWith('.md'));
    } catch {
        return [];
    }
}

/**
 * Get post by slug
 */
export function getPostBySlug(slug: string): Post | null {
    try {
        const realSlug = slug.replace(/\.mdx?$/, '');
        const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

        if (!fs.existsSync(fullPath)) {
            const mdPath = path.join(postsDirectory, `${realSlug}.md`);
            if (!fs.existsSync(mdPath)) {
                return null;
            }
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const frontmatter = data as PostFrontmatter;

        const stats = readingTime(content);
        const category = getCategoryBySlug(frontmatter.category);
        const tags = (frontmatter.tags || []).map(tag => ({
            name: tag,
            slug: tag.toLowerCase().replace(/\s+/g, '-'),
        }));

        return {
            slug: realSlug,
            title: frontmatter.title,
            excerpt: frontmatter.excerpt || generateExcerpt(content),
            content,
            date: frontmatter.date,
            modifiedDate: frontmatter.modifiedDate,
            coverImage: frontmatter.coverImage,
            author: {
                ...defaultAuthor,
                ...frontmatter.author,
            },
            category,
            tags,
            readingTime: stats.text,
            featured: frontmatter.featured || false,
            seo: {
                title: frontmatter.seo?.title || frontmatter.title,
                description: frontmatter.seo?.description || frontmatter.excerpt || generateExcerpt(content),
                keywords: frontmatter.seo?.keywords || frontmatter.tags || [],
            },
        };
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return null;
    }
}

/**
 * Get all posts
 */
export function getAllPosts(): Post[] {
    const slugs = getAllPostSlugs();
    const posts = slugs
        .map(slug => getPostBySlug(slug.replace(/\.mdx?$/, '')))
        .filter((post): post is Post => post !== null)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(): Post[] {
    return getAllPosts().filter(post => post.featured);
}

/**
 * Get posts by category
 */
export function getPostsByCategory(categorySlug: string): Post[] {
    return getAllPosts().filter(post => post.category.slug === categorySlug);
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tagSlug: string): Post[] {
    return getAllPosts().filter(post =>
        post.tags.some(tag => tag.slug === tagSlug)
    );
}

/**
 * Get related posts
 */
export function getRelatedPosts(currentPost: Post, limit = 3): Post[] {
    const allPosts = getAllPosts();

    return allPosts
        .filter(post => post.slug !== currentPost.slug)
        .map(post => {
            let score = 0;

            // Same category
            if (post.category.slug === currentPost.category.slug) {
                score += 3;
            }

            // Shared tags
            const sharedTags = post.tags.filter(tag =>
                currentPost.tags.some(t => t.slug === tag.slug)
            );
            score += sharedTags.length * 2;

            return { post, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.post);
}

/**
 * Get all categories
 */
export function getAllCategories(): Category[] {
    const posts = getAllPosts();
    const categoryMap = new Map<string, Category>();

    posts.forEach(post => {
        if (!categoryMap.has(post.category.slug)) {
            categoryMap.set(post.category.slug, post.category);
        }
    });

    return Array.from(categoryMap.values());
}

/**
 * Get all tags
 */
export function getAllTags(): Tag[] {
    const posts = getAllPosts();
    const tagMap = new Map<string, Tag>();

    posts.forEach(post => {
        post.tags.forEach(tag => {
            if (!tagMap.has(tag.slug)) {
                tagMap.set(tag.slug, tag);
            }
        });
    });

    return Array.from(tagMap.values());
}

/**
 * Get category by slug
 */
function getCategoryBySlug(slug: string): Category {
    const categories: Record<string, Category> = {
        'ai-writing': {
            name: 'AI Writing',
            slug: 'ai-writing',
            description: 'AI-powered writing tools for content creation',
            color: 'blue',
        },
        'ai-marketing': {
            name: 'AI Marketing',
            slug: 'ai-marketing',
            description: 'Marketing automation and AI tools',
            color: 'purple',
        },
        'ai-design': {
            name: 'AI Design',
            slug: 'ai-design',
            description: 'AI tools for design and creativity',
            color: 'pink',
        },
        'ai-video': {
            name: 'AI Video',
            slug: 'ai-video',
            description: 'Video creation and editing with AI',
            color: 'red',
        },
        'ai-audio': {
            name: 'AI Audio',
            slug: 'ai-audio',
            description: 'Audio and voice AI tools',
            color: 'green',
        },
        'productivity': {
            name: 'Productivity',
            slug: 'productivity',
            description: 'Productivity and automation tools',
            color: 'orange',
        },
        'seo-tools': {
            name: 'SEO Tools',
            slug: 'seo-tools',
            description: 'SEO and content optimization tools',
            color: 'teal',
        },
        'ecommerce': {
            name: 'E-commerce',
            slug: 'ecommerce',
            description: 'E-commerce and selling tools',
            color: 'indigo',
        },
    };

    return categories[slug] || {
        name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        slug,
        description: '',
        color: 'gray',
    };
}

/**
 * Generate excerpt from content
 */
function generateExcerpt(content: string, length = 160): string {
    const plainText = content
        .replace(/#{1,6}\s?/g, '')
        .replace(/\*\*/g, '')
        .replace(/\n/g, ' ')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

    if (plainText.length <= length) return plainText;
    return plainText.slice(0, length).trim() + '...';
}

/**
 * Get paginated posts
 */
export function getPaginatedPosts(page: number, perPage = 10): {
    posts: Post[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
    };
} {
    const allPosts = getAllPosts();
    const totalItems = allPosts.length;
    const totalPages = Math.ceil(totalItems / perPage);
    const offset = (page - 1) * perPage;
    const posts = allPosts.slice(offset, offset + perPage);

    return {
        posts,
        pagination: {
            currentPage: page,
            totalPages,
            totalItems,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
        },
    };
}

/**
 * Search posts
 */
export function searchPosts(query: string): Post[] {
    const allPosts = getAllPosts();
    const searchTerms = query.toLowerCase().split(' ');

    return allPosts.filter(post => {
        const searchableText = `${post.title} ${post.excerpt} ${post.category.name} ${post.tags.map(t => t.name).join(' ')}`.toLowerCase();
        return searchTerms.every(term => searchableText.includes(term));
    });
}
