'use client';

import { CheckCircle, Mail, Zap, Gift, Shield } from 'lucide-react';

const benefits = [
    { icon: Zap, text: 'Weekly AI tool reviews and comparisons' },
    { icon: Gift, text: 'Exclusive deals and discounts' },
    { icon: Mail, text: 'Early access to new tools and features' },
    { icon: Shield, text: 'Tips and tutorials for growing your business' },
];

// Brevo form iframe from your account
const BREVO_IFRAME = "https://154abd02.sibforms.com/serve/MUIFAKgA2QvABqQLnxKFbQluc9q2yO8uiMp9zjdk3TtQwAzrFFzCxTRpdxRUT0Eh3GYeLOehP5YsevVKxHRiMWHO1l2LCWZ8ZiadT0cTL8rsPwK0EN6oMhxLj5q1J-9PeLrIaw5Ia7xxMQtcmBPNSZuMgFpN2Vje176NXOBQNL6GVTwZsJfjMy5yQ6i5oG1_J0fsoD7QChDd_aT9Tg==";

export default function NewsletterPage() {
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
                        <p className="text-xl text-secondary-600 mb-8">
                            Stay ahead of the curve with our curated newsletter. Expert reviews, exclusive deals, and actionable tips delivered every week.
                        </p>

                        {/* Brevo Form Iframe */}
                        <div className="bg-white rounded-2xl shadow-lg p-4 mx-auto max-w-xl">
                            <iframe
                                src={BREVO_IFRAME}
                                width="100%"
                                height="305"
                                frameBorder="0"
                                scrolling="auto"
                                allowFullScreen
                                style={{
                                    display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    maxWidth: '100%',
                                    borderRadius: '12px'
                                }}
                            />
                        </div>

                        <p className="text-sm text-secondary-500 mt-4">
                            No spam. Unsubscribe anytime. We respect your privacy.
                        </p>
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

            <section className="section-padding bg-secondary-50">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                            Why Subscribe?
                        </h2>
                        <p className="text-secondary-600 mb-6">
                            Join thousands of creators who trust us to deliver the best AI tools and insights every week. We research, test, and recommend only the tools that actually work.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-secondary-700">
                                ✓ Free weekly newsletter
                            </div>
                            <div className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-secondary-700">
                                ✓ No credit card required
                            </div>
                            <div className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-secondary-700">
                                ✓ Unsubscribe anytime
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
