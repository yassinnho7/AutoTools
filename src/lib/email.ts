import type { EmailSubscriber, LeadMagnet } from '@/types';

const BREVO_API_URL = 'https://api.brevo.com/v3';
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID;

interface BrevoContact {
    email: string;
    attributes?: {
        FIRSTNAME?: string;
        LASTNAME?: string;
        SOURCE?: string;
        INTERESTS?: string;
    };
    listIds?: number[];
    updateEnabled?: boolean;
}

interface BrevoEmail {
    sender: {
        name: string;
        email: string;
    };
    to: Array<{
        email: string;
        name?: string;
    }>;
    subject: string;
    htmlContent: string;
    textContent?: string;
    tags?: string[];
}

/**
 * Add contact to Brevo list
 */
export async function addContactToBrevo(
    subscriber: EmailSubscriber
): Promise<{ success: boolean; id?: string; error?: string }> {
    if (!BREVO_API_KEY || !BREVO_LIST_ID) {
        console.error('Brevo API key or List ID not configured');
        return { success: false, error: 'Email service not configured' };
    }

    try {
        const contact: BrevoContact = {
            email: subscriber.email,
            attributes: {
                FIRSTNAME: subscriber.name?.split(' ')[0],
                LASTNAME: subscriber.name?.split(' ').slice(1).join(' '),
                SOURCE: subscriber.source,
                INTERESTS: subscriber.tags.join(','),
            },
            listIds: [parseInt(BREVO_LIST_ID, 10)],
            updateEnabled: true,
        };

        const response = await fetch(`${BREVO_API_URL}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': BREVO_API_KEY,
            },
            body: JSON.stringify(contact),
        });

        if (!response.ok) {
            const error = await response.json();
            // Contact already exists is not an error
            if (error.code === 'duplicate_parameter') {
                return { success: true, id: 'existing' };
            }
            throw new Error(error.message || 'Failed to add contact');
        }

        const data = await response.json();
        return { success: true, id: data.id };
    } catch (error) {
        console.error('Error adding contact to Brevo:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}

/**
 * Send transactional email via Brevo
 */
export async function sendEmail(
    to: string,
    subject: string,
    htmlContent: string,
    textContent?: string,
    tags?: string[]
): Promise<{ success: boolean; messageId?: string; error?: string }> {
    if (!BREVO_API_KEY) {
        console.error('Brevo API key not configured');
        return { success: false, error: 'Email service not configured' };
    }

    try {
        const email: BrevoEmail = {
            sender: {
                name: process.env.NEXT_PUBLIC_SITE_NAME || 'AI Tools Hub',
                email: 'noreply@aitoolshub.com',
            },
            to: [{ email: to }],
            subject,
            htmlContent,
            textContent,
            tags,
        };

        const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': BREVO_API_KEY,
            },
            body: JSON.stringify(email),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to send email');
        }

        const data = await response.json();
        return { success: true, messageId: data.messageId };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}

/**
 * Send welcome email to new subscriber
 */
export async function sendWelcomeEmail(
    email: string,
    name?: string
): Promise<{ success: boolean; error?: string }> {
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to AI Tools Hub!</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0;">Welcome to AI Tools Hub!</h1>
      </div>
      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
        <p style="font-size: 18px;">Hi ${name || 'there'},</p>
        <p>Thanks for subscribing to AI Tools Hub! You're now part of a community of 10,000+ creators and entrepreneurs.</p>
        
        <h2 style="color: #3b82f6;">What You'll Get:</h2>
        <ul>
          <li>Weekly AI tool reviews and comparisons</li>
          <li>Exclusive deals and discounts</li>
          <li>Early access to new tools</li>
          <li>Tips and tutorials for growing your business</li>
        </ul>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}/blog" style="background: #3b82f6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">Explore Our Latest Articles</a>
        </div>
        
        <p>Here are some popular articles to get you started:</p>
        <ul>
          <li><a href="${process.env.NEXT_PUBLIC_SITE_URL}/blog/best-ai-writing-tools">Best AI Writing Tools in 2024</a></li>
          <li><a href="${process.env.NEXT_PUBLIC_SITE_URL}/blog/chatgpt-alternatives">Top ChatGPT Alternatives</a></li>
          <li><a href="${process.env.NEXT_PUBLIC_SITE_URL}/blog/ai-tools-for-content-creators">AI Tools for Content Creators</a></li>
        </ul>
        
        <p style="margin-top: 30px;">If you have any questions, just reply to this email. I'm here to help!</p>
        
        <p>Best regards,<br>The AI Tools Hub Team</p>
      </div>
      <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
        <p>© ${new Date().getFullYear()} AI Tools Hub. All rights reserved.</p>
        <p>
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}/privacy">Privacy Policy</a> | 
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe">Unsubscribe</a>
        </p>
      </div>
    </body>
    </html>
  `;

    const textContent = `
Welcome to AI Tools Hub!

Hi ${name || 'there'},

Thanks for subscribing to AI Tools Hub! You're now part of a community of 10,000+ creators and entrepreneurs.

What You'll Get:
- Weekly AI tool reviews and comparisons
- Exclusive deals and discounts
- Early access to new tools
- Tips and tutorials for growing your business

Explore our latest articles: ${process.env.NEXT_PUBLIC_SITE_URL}/blog

Best regards,
The AI Tools Hub Team
  `;

    const result = await sendEmail(
        email,
        'Welcome to AI Tools Hub! 🎉',
        htmlContent,
        textContent,
        ['welcome', 'transactional']
    );

    return { success: result.success, error: result.error };
}

/**
 * Send lead magnet delivery email
 */
export async function sendLeadMagnetEmail(
    email: string,
    leadMagnet: LeadMagnet,
    name?: string
): Promise<{ success: boolean; error?: string }> {
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Free ${leadMagnet.name}</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0;">Here's Your Free ${leadMagnet.name}!</h1>
      </div>
      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
        <p style="font-size: 18px;">Hi ${name || 'there'},</p>
        <p>Thanks for downloading our ${leadMagnet.name}!</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${leadMagnet.fileUrl}" style="background: #10b981; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; display: inline-block; font-size: 18px;">Download Now</a>
        </div>
        
        <p>${leadMagnet.description}</p>
        
        <p style="margin-top: 30px;">Enjoy!</p>
        <p>The AI Tools Hub Team</p>
      </div>
    </body>
    </html>
  `;

    const result = await sendEmail(
        email,
        `Your Free ${leadMagnet.name} is Ready! 📥`,
        htmlContent,
        undefined,
        ['lead-magnet', 'download']
    );

    return { success: result.success, error: result.error };
}

/**
 * Get email templates
 */
export function getEmailTemplates() {
    return {
        welcome: {
            subject: 'Welcome to AI Tools Hub! 🎉',
            type: 'welcome',
        },
        newsletter: {
            subject: 'Your Weekly AI Tools Update',
            type: 'newsletter',
        },
        leadMagnet: {
            subject: 'Your Free Download is Ready! 📥',
            type: 'lead-magnet',
        },
        productLaunch: {
            subject: '🚀 New Product Alert!',
            type: 'product-launch',
        },
    };
}
