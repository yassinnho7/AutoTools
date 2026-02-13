'use client';

import { useState, useEffect } from 'react';
import { X, Mail, Sparkles, CheckCircle, Loader2 } from 'lucide-react';

interface EmailPopupProps {
    title?: string;
    description?: string;
    delay?: number;
}

export function EmailPopup({
    title = "Join the AI Tools Community",
    description = "Stay tuned for the latest AI tools, trends, and innovations. Get curated updates straight to your inbox.",
    delay = 30000
}: EmailPopupProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return;

        setIsLoading(true);
        setError('');

        try {
            // Store locally for demo purposes
            const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');

            // Check if already subscribed
            const exists = subscribers.find((s: { email: string }) => s.email === email);
            if (exists) {
                setError('This email is already subscribed!');
                setIsLoading(false);
                return;
            }

            subscribers.push({ email, date: new Date().toISOString() });
            localStorage.setItem('subscribers', JSON.stringify(subscribers));
            localStorage.setItem('userSubscribed', 'true');

            // Try to send to Brevo API (will work if API key is configured)
            try {
                const brevoApiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;

                if (brevoApiKey) {
                    const response = await fetch('https://api.brevo.com/v3/contacts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Api-Key': brevoApiKey
                        },
                        body: JSON.stringify({
                            email: email,
                            listIds: [2], // Default list ID
                            updateEnabled: true
                        })
                    });

                    if (!response.ok) {
                        console.log('Brevo API error - email saved locally');
                    }
                }
            } catch (apiError) {
                console.log('Email saved locally (API not configured)');
            }

            setIsSubmitted(true);

        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
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
            <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
                    type="button"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="p-8">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    {/* Text */}
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        {description}
                    </p>

                    {isSubmitted ? (
                        <div className="text-center py-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <p className="text-green-600 font-semibold text-lg">You're in! 🎉</p>
                            <p className="text-gray-500 text-sm mt-2">Check your inbox for a welcome email.</p>
                            <button
                                onClick={handleClose}
                                className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                                Close this window
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Subscribing...
                                        </>
                                    ) : (
                                        'Subscribe'
                                    )}
                                </button>
                            </div>

                            {error && (
                                <p className="text-red-500 text-sm text-center">{error}</p>
                            )}

                            <p className="text-xs text-gray-500 text-center">
                                No spam, unsubscribe anytime. Privacy guaranteed.
                            </p>
                        </form>
                    )}
                </div>

                {/* Decorative bottom bar */}
                <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            </div>
        </div>
    );
}
