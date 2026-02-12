import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

/**
 * Supabase client for client-side operations
 * For static export, we provide a simplified client
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Supabase admin client - not needed for static export
 */
export const supabaseAdmin = () => {
    throw new Error('Admin operations not supported in static export');
};

/**
 * Types for database tables (simplified for static export)
 */
export interface SubscriberRow {
    id: string;
    email: string;
    name: string | null;
    source: string;
    tags: string[];
    created_at: string;
    updated_at: string;
}

export interface AffiliateClickRow {
    id: string;
    slug: string;
    url: string;
    ip_address: string;
    user_agent: string;
    referrer: string | null;
    created_at: string;
}

export interface PageViewRow {
    id: string;
    path: string;
    referrer: string | null;
    country: string | null;
    created_at: string;
}

/**
 * Track affiliate click - simplified for static export
 * For full tracking, use webhooks or serverless functions
 */
export async function trackAffiliateClick(
    slug: string,
    url: string,
    ipAddress: string,
    userAgent: string,
    referrer: string | null
): Promise<void> {
    // Static export - log only, no database writes
    console.log('Affiliate click tracked:', { slug, url, ipAddress, userAgent, referrer });
}

/**
 * Get affiliate link by slug - returns null for static export
 * Links should be hardcoded in the frontend for static sites
 */
export async function getAffiliateLink(slug: string): Promise<{ url: string } | null> {
    // Static export - links should be configured in the frontend
    console.log('getAffiliateLink called for:', slug);
    return null;
}

/**
 * Add subscriber - simplified for static export
 * Uses Brevo API directly from client-side
 */
export async function addSubscriber(
    email: string,
    name?: string,
    source: string = 'website',
    tags: string[] = []
): Promise<{ success: boolean; error?: string }> {
    // For static export, this should be handled via client-side API call to Brevo
    console.log('Add subscriber requested:', { email, name, source, tags });
    return { success: false, error: 'Use client-side Brevo integration' };
}

/**
 * Get subscriber count - returns 0 for static export
 */
export async function getSubscriberCount(): Promise<number> {
    return 0;
}

/**
 * Track page view - simplified for static export
 * Cloudflare Analytics should be used instead
 */
export async function trackPageView(
    path: string,
    referrer: string | null,
    country: string | null
): Promise<void> {
    // Use Cloudflare Web Analytics for static sites
    console.log('Page view:', { path, referrer, country });
}

/**
 * Get popular pages - returns empty array for static export
 */
export async function getPopularPages(limit: number = 10): Promise<Array<{ path: string; count: number }>> {
    return [];
}
