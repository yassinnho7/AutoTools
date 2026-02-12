import { NextRequest, NextResponse } from 'next/server';
import { addContactToBrevo, sendWelcomeEmail } from '@/lib/email';
import { addSubscriber } from '@/lib/supabase';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, name, source = 'website', tags = [] } = body;

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { success: false, error: 'Valid email is required' },
                { status: 400 }
            );
        }

        // Add to Brevo
        const brevoResult = await addContactToBrevo({
            email,
            name,
            source,
            tags,
        });

        if (!brevoResult.success) {
            console.error('Brevo error:', brevoResult.error);
            // Continue even if Brevo fails - we'll still add to Supabase
        }

        // Add to Supabase
        const supabaseResult = await addSubscriber(email, name, source, tags);

        if (!supabaseResult.success) {
            console.error('Supabase error:', supabaseResult.error);
        }

        // Send welcome email
        const emailResult = await sendWelcomeEmail(email, name);

        if (!emailResult.success) {
            console.error('Welcome email error:', emailResult.error);
        }

        // Trigger Make.com webhook if configured
        const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;
        if (makeWebhookUrl) {
            try {
                await fetch(makeWebhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        event: 'newsletter_signup',
                        data: {
                            email,
                            name,
                            source,
                            tags,
                            timestamp: new Date().toISOString(),
                        },
                    }),
                });
            } catch (webhookError) {
                console.error('Make.com webhook error:', webhookError);
            }
        }

        return NextResponse.json({
            success: true,
            message: 'Successfully subscribed to newsletter!',
        });
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
