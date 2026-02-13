'use client';

import { useState, useEffect } from 'react';
import { X, Mail, Sparkles, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface EmailPopupProps {
    title?: string;
    description?: string;
    delay?: number;
}

export function EmailPopup({
    title = "Join the AI Tools Community",
    description = "Get weekly AI tool reviews, exclusive deals, and expert tips delivered to your inbox.",
    delay = 30000
}: EmailPopupProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Check if already dismissed
        const dismissed = localStorage.getItem('emailPopupDismissed');
        if (dismissed) {
            setIsDismissed(true);
            return;
        }

        // Check if already subscribed
        const subscribed = localStorage.getItem('userSubscribed');
        if (subscribed) {
            setIsDismissed(true);
            return;
        }

        // Show popup after delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    const handleClose = () => {
        setIsVisible(false);
        setIsDismissed(true);
        localStorage.setItem('emailPopupDismissed', 'true');
    };

    if (!isVisible || isDismissed) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Popup */}
            <div w-full max-w className="relative-lg mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
                    type="button"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="p-8 text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <Sparkles className="w-10 h-10 text-white" />
                        </div>
                    </div>

                    {/* Text */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                        {description}
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/newsletter"
                        onClick={() => {
                            localStorage.setItem('emailPopupDismissed', 'true');
                        }}
                        className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/25"
                    >
                        <Mail className="w-5 h-5" />
                        Subscribe Free
                        <ExternalLink className="w-4 h-4" />
                    </Link>

                    <p className="text-xs text-gray-500 mt-4">
                        Join 10,000+ creators • No spam, ever
                    </p>

                    <button
                        onClick={handleClose}
                        className="mt-3 text-sm text-gray-400 hover:text-gray-600"
                    >
                        Maybe later
                    </button>
                </div>

                {/* Decorative bottom bar */}
                <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            </div>
        </div>
    );
}
