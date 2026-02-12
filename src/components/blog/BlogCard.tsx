import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';
import type { Post } from '@/types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
    post: Post;
    variant?: 'default' | 'featured' | 'compact';
    className?: string;
}

export function BlogCard({ post, variant = 'default', className }: BlogCardProps) {
    if (variant === 'featured') {
        return (
            <article className={cn('card group overflow-hidden', className)}>
                <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-video md:aspect-auto overflow-hidden">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                            <Link
                                href={`/blog/category/${post.category.slug}`}
                                className="tag hover:bg-primary-200 transition-colors"
                            >
                                {post.category.name}
                            </Link>
                        </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-sm text-secondary-500 mb-4">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {formatDate(post.date)}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readingTime}
                            </span>
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className="text-secondary-600 mb-6 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span className="text-sm font-medium text-secondary-700">
                                    {post.author.name}
                                </span>
                            </div>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="text-primary-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                            >
                                Read More <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    if (variant === 'compact') {
        return (
            <article className={cn('flex gap-4 group', className)}>
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <Link
                        href={`/blog/category/${post.category.slug}`}
                        className="text-xs font-medium text-primary-600 hover:text-primary-700"
                    >
                        {post.category.name}
                    </Link>
                    <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors line-clamp-2 mt-1">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-secondary-500 mt-1">{formatDate(post.date)}</p>
                </div>
            </article>
        );
    }

    return (
        <article className={cn('card group', className)}>
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                    <Link
                        href={`/blog/category/${post.category.slug}`}
                        className="tag hover:bg-primary-200 transition-colors"
                    >
                        {post.category.name}
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <div className="flex items-center gap-4 text-sm text-secondary-500 mb-3">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readingTime}
                    </span>
                </div>
                <h2 className="font-heading text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-secondary-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-secondary-100">
                    <div className="flex items-center gap-2">
                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm font-medium text-secondary-700">
                            {post.author.name}
                        </span>
                    </div>
                    <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary-600 font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm"
                    >
                        Read <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </article>
    );
}

interface BlogListProps {
    posts: Post[];
    columns?: 1 | 2 | 3;
    className?: string;
}

export function BlogList({ posts, columns = 3, className }: BlogListProps) {
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    };

    return (
        <div className={cn('grid gap-6', gridCols[columns], className)}>
            {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
            ))}
        </div>
    );
}

interface CategoryBadgeProps {
    name: string;
    slug: string;
    color?: string;
    className?: string;
}

export function CategoryBadge({ name, slug, className }: CategoryBadgeProps) {
    return (
        <Link
            href={`/blog/category/${slug}`}
            className={cn('tag hover:bg-primary-200 transition-colors', className)}
        >
            {name}
        </Link>
    );
}

interface TagListProps {
    tags: Array<{ name: string; slug: string }>;
    className?: string;
}

export function TagList({ tags, className }: TagListProps) {
    return (
        <div className={cn('flex flex-wrap gap-2', className)}>
            {tags.map((tag) => (
                <Link
                    key={tag.slug}
                    href={`/blog/tag/${tag.slug}`}
                    className="px-3 py-1 text-sm bg-secondary-100 text-secondary-600 rounded-full hover:bg-secondary-200 transition-colors"
                >
                    #{tag.name}
                </Link>
            ))}
        </div>
    );
}
