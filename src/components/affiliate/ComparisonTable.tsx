import { cn } from '@/lib/utils';
import { Check, X, Minus } from 'lucide-react';
import type { ComparisonItem } from '@/types';

interface ComparisonTableProps {
    title: string;
    description?: string;
    items: ComparisonItem[];
    features: string[];
    className?: string;
}

export function ComparisonTable({
    title,
    description,
    items,
    features,
    className,
}: ComparisonTableProps) {
    return (
        <div className={cn('overflow-x-auto', className)}>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-secondary-900">{title}</h2>
                {description && (
                    <p className="text-secondary-600 mt-2">{description}</p>
                )}
            </div>

            <table className="w-full border-collapse min-w-[600px]">
                <thead>
                    <tr>
                        <th className="text-left p-4 bg-secondary-50 border-b-2 border-secondary-200 font-semibold">
                            Feature
                        </th>
                        {items.map((item) => (
                            <th
                                key={item.name}
                                className="text-center p-4 bg-secondary-50 border-b-2 border-secondary-200"
                            >
                                <div className="flex flex-col items-center gap-2">
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-lg object-cover"
                                    />
                                    <span className="font-semibold text-secondary-900">{item.name}</span>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={cn(
                                                    'w-3 h-3',
                                                    i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-secondary-200'
                                                )}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, index) => (
                        <tr
                            key={feature}
                            className={cn(
                                index % 2 === 0 ? 'bg-white' : 'bg-secondary-50/50',
                                'hover:bg-primary-50/50 transition-colors'
                            )}
                        >
                            <td className="p-4 border-b border-secondary-100 font-medium text-secondary-700">
                                {feature}
                            </td>
                            {items.map((item) => {
                                const value = item.features[feature];
                                return (
                                    <td
                                        key={`${item.name}-${feature}`}
                                        className="text-center p-4 border-b border-secondary-100"
                                    >
                                        {typeof value === 'boolean' ? (
                                            value ? (
                                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                                            ) : (
                                                <X className="w-5 h-5 text-red-400 mx-auto" />
                                            )
                                        ) : value === 'partial' ? (
                                            <Minus className="w-5 h-5 text-yellow-500 mx-auto" />
                                        ) : (
                                            <span className="text-sm text-secondary-600">{value}</span>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="bg-secondary-50">
                        <td className="p-4 font-semibold text-secondary-900">Price</td>
                        {items.map((item) => (
                            <td key={`${item.name}-price`} className="text-center p-4">
                                <span className="font-bold text-lg text-secondary-900">{item.price}</span>
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="p-4"></td>
                        {items.map((item) => (
                            <td key={`${item.name}-cta`} className="text-center p-4">
                                <a
                                    href={item.affiliateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer sponsored"
                                    className="btn-primary btn-sm inline-flex"
                                >
                                    Try {item.name}
                                </a>
                            </td>
                        ))}
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

interface ComparisonCardProps {
    name: string;
    logo: string;
    rating: number;
    pros: string[];
    cons: string[];
    price: string;
    affiliateUrl: string;
    badge?: string;
    featured?: boolean;
}

export function ComparisonCard({
    name,
    logo,
    rating,
    pros,
    cons,
    price,
    affiliateUrl,
    badge,
    featured,
}: ComparisonCardProps) {
    return (
        <div
            className={cn(
                'card h-full flex flex-col',
                featured && 'ring-2 ring-primary-500 ring-offset-2'
            )}
        >
            {badge && (
                <div className="bg-primary-600 text-white text-center py-2 text-sm font-medium">
                    {badge}
                </div>
            )}
            <div className="card-body flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src={logo}
                        alt={name}
                        className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                        <h3 className="font-heading font-bold text-lg text-secondary-900">
                            {name}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
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
                    </div>
                </div>

                <div className="flex-1">
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-green-600 mb-2 flex items-center gap-1">
                            <Check className="w-4 h-4" /> Pros
                        </h4>
                        <ul className="space-y-1">
                            {pros.map((pro, index) => (
                                <li key={index} className="text-sm text-secondary-600 flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    {pro}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-red-500 mb-2 flex items-center gap-1">
                            <X className="w-4 h-4" /> Cons
                        </h4>
                        <ul className="space-y-1">
                            {cons.map((con, index) => (
                                <li key={index} className="text-sm text-secondary-600 flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    {con}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-secondary-100">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-secondary-500">Starting at</span>
                        <span className="text-xl font-bold text-secondary-900">{price}</span>
                    </div>
                    <a
                        href={affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="btn-primary w-full inline-flex justify-center"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
}
