'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigation } from '@/lib/config';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm'
                    : 'bg-transparent'
            )}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">AI</span>
                        </div>
                        <span className="font-heading font-bold text-xl text-secondary-900">
                            Tools Hub
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                                    pathname === item.href
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2">
                        {/* Search Button */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 rounded-lg transition-colors"
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Newsletter CTA */}
                        <Link
                            href="/newsletter"
                            className="hidden md:inline-flex btn-primary btn-sm"
                        >
                            Subscribe
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-secondary-100 shadow-lg animate-slide-down">
                        <div className="container-custom py-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                                        pathname === item.href
                                            ? 'text-primary-600 bg-primary-50'
                                            : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/newsletter"
                                className="block mt-4 btn-primary text-center"
                            >
                                Subscribe to Newsletter
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Search Modal */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
                    <div className="container-custom pt-20">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl mx-auto">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold">Search Articles</h2>
                                <button
                                    onClick={() => setIsSearchOpen(false)}
                                    className="p-2 hover:bg-secondary-100 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <form action="/search" method="GET">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                                    <input
                                        type="text"
                                        name="q"
                                        placeholder="Search for AI tools, reviews, tutorials..."
                                        className="w-full pl-12 pr-4 py-4 text-lg border border-secondary-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                        autoFocus
                                    />
                                </div>
                            </form>
                            <div className="mt-4 text-sm text-secondary-500">
                                <p>Popular searches: ChatGPT, AI Writing, Image Generation, SEO Tools</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
