'use client';

import { useState } from 'react';
import { CheckCircle, Mail, Zap, Gift, Shield } from 'lucide-react';

const benefits = [
    { icon: Zap, text: 'Weekly AI tool reviews and comparisons' },
    { icon: Gift, text: 'Exclusive deals and discounts' },
    { icon: Mail, text: 'Early access to new tools and features' },
    { icon: Shield, text: 'Tips and tutorials for growing your business' },
];

export default function NewsletterPage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // For static export, we'll use Make.com webhook or direct form
        // You can set up a Make.com scenario to handle form submissions
        // Or use Tally.so / Cloudflare Forms as alternative

        // Simulate success for demo - in production connect to Make.com webhook
        setTimeout(() => {
            setStatus('success');
            setMessage('Thank you for subscribing! Check your inbox for a welcome email.');
            setEmail('');
            setName('');
        }, 1000);

        /* 
        // Production: Use Make.com webhook
        try {
          const makeWebhookUrl = 'YOUR_MAKE_WEBHOOK_URL';
          const response = await fetch(makeWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name, source: 'newsletter' }),
          });
          
          if (response.ok) {
            setStatus('success');
            setMessage('Thank you for subscribing!');
            setEmail('');
            setName('');
          } else {
            throw new Error('Failed to subscribe');
          }
        } catch (err) {
          setStatus('error');
          setMessage('Something went wrong. Please try again.');
        }
        */
    };

    return (
        <>
            <section className="gradient-bg section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                            <Mail className="w-4 h-4" />
                            Join 10,000+ creators
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                            Get the Best AI Tools{' '}
                            <span className="gradient-text">Weekly</span>
                        </h1>
                        <p className="text-xl text-secondary-600 mb-10">
                            Stay ahead of the curve with our curated newsletter. Expert reviews, exclusive deals, and actionable tips delivered every week.
                        </p>

                        {status === 'success' ? (
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 max-w-lg mx-auto">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-green-800 mb-2">You're In!</h2>
                                <p className="text-green-700">{message}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your first name"
                                        className="w-full px-6 py-4 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-lg"
                                    />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                        required
                                        className="w-full px-6 py-4 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-lg"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="btn-primary btn-lg w-full disabled:opacity-50"
                                    >
                                        {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
                                    </button>
                                </div>
                                {status === 'error' && (
                                    <p className="text-red-500 mt-4 text-sm">{message}</p>
                                )}
                                <p className="text-sm text-secondary-500 mt-4">
                                    No spam. Unsubscribe anytime. We respect your privacy.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-secondary-900 text-center mb-8">
                            What You'll Get
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {benefits.map((benefit) => (
                                <div key={benefit.text} className="flex items-start gap-4 p-4 rounded-xl bg-secondary-50">
                                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <benefit.icon className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <p className="text-secondary-700 font-medium">{benefit.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
