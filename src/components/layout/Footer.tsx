import Link from 'next/link';
import { footerLinks, socialLinks, siteConfig } from '@/lib/config';
import { Twitter, Youtube, Mail, Rss, Linkedin, Github } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    twitter: Twitter,
    youtube: Youtube,
    mail: Mail,
    rss: Rss,
    linkedin: Linkedin,
    github: Github,
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary-900 text-secondary-300">
            {/* Main Footer */}
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">AI</span>
                            </div>
                            <span className="font-heading font-bold text-xl text-white">
                                Tools Hub
                            </span>
                        </Link>
                        <p className="text-secondary-400 mb-6">
                            Discover the best AI tools, software reviews, and digital products to grow your online business.
                        </p>
                        <div className="flex items-center gap-3">
                            {Object.entries(socialLinks).map(([platform, url]) => {
                                const Icon = iconMap[platform];
                                return Icon ? (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                                        aria-label={platform}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ) : null;
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-semibold text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.main.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-heading font-semibold text-white mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-heading font-semibold text-white mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-secondary-400 mb-4">
                            Get weekly AI tool reviews and tips delivered to your inbox.
                        </p>
                        <Link
                            href="/newsletter"
                            className="btn-primary w-full"
                        >
                            Subscribe Free
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-secondary-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-secondary-500 text-sm">
                            © {currentYear} {siteConfig.name}. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-secondary-500 hover:text-secondary-300 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
