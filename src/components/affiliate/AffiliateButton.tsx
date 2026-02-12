'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

interface AffiliateButtonProps {
    href: string;
    text?: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    showIcon?: boolean;
    className?: string;
    trackingId?: string;
    onClick?: () => void;
}

export function AffiliateButton({
    href,
    text = 'Get Started',
    variant = 'primary',
    size = 'md',
    showIcon = true,
    className,
    trackingId,
    onClick,
}: AffiliateButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30',
        secondary: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 focus:ring-secondary-500',
        accent: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500 shadow-lg shadow-accent-500/25',
        outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const handleClick = () => {
        if (trackingId) {
            // Track click event
            if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
                (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'affiliate_click', {
                    event_category: 'affiliate',
                    event_label: trackingId,
                });
            }
        }
        onClick?.();
    };

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            onClick={handleClick}
        >
            <Sparkles className="w-4 h-4 mr-2" />
            {text}
            {showIcon && <ExternalLink className="w-4 h-4 ml-2" />}
        </Link>
    );
}

interface CTABoxProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    badge?: string;
    features?: string[];
    className?: string;
}

export function CTABox({
    title,
    description,
    buttonText,
    buttonHref,
    badge,
    features,
    className,
}: CTABoxProps) {
    return (
        <div className={cn('affiliate-box', className)}>
            {badge && (
                <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-600 text-white rounded-full mb-4">
                    {badge}
                </span>
            )}
            <h3 className="text-xl font-bold text-secondary-900 mb-2">{title}</h3>
            <p className="text-secondary-600 mb-4">{description}</p>
            {features && features.length > 0 && (
                <ul className="space-y-2 mb-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-secondary-700">
                            <ArrowRight className="w-4 h-4 text-primary-600 mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
            )}
            <AffiliateButton href={buttonHref} text={buttonText} />
        </div>
    );
}

interface ProductCardProps {
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    affiliateUrl: string;
    rating?: number;
    badge?: string;
    features?: string[];
}

export function ProductCard({
    name,
    description,
    price,
    originalPrice,
    image,
    affiliateUrl,
    rating,
    badge,
    features,
}: ProductCardProps) {
    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    return (
        <div className="card group">
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-sm font-medium bg-accent-600 text-white rounded-full">
                        {badge}
                    </span>
                )}
                {discount > 0 && (
                    <span className="absolute top-3 right-3 px-3 py-1 text-sm font-medium bg-green-600 text-white rounded-full">
                        -{discount}%
                    </span>
                )}
            </div>
            <div className="card-body">
                <h3 className="font-heading font-bold text-lg text-secondary-900 mb-2">
                    {name}
                </h3>
                <p className="text-secondary-600 text-sm mb-3 line-clamp-2">{description}</p>

                {rating && (
                    <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={cn(
                                    'w-4 h-4',
                                    i < Math.floor(rating) ? 'text-yellow-400' : 'text-secondary-200'
                                )}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className="text-sm text-secondary-500 ml-1">{rating.toFixed(1)}</span>
                    </div>
                )}

                {features && features.length > 0 && (
                    <ul className="space-y-1 mb-4">
                        {features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center text-xs text-secondary-600">
                                <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-secondary-100">
                    <div>
                        <span className="text-2xl font-bold text-secondary-900">${price}</span>
                        {originalPrice && (
                            <span className="text-sm text-secondary-400 line-through ml-2">
                                ${originalPrice}
                            </span>
                        )}
                    </div>
                    <AffiliateButton href={affiliateUrl} text="Buy Now" size="sm" />
                </div>
            </div>
        </div>
    );
}
