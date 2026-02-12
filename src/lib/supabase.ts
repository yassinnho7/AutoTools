import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Supabase client for client-side operations
 */
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

/**
 * Supabase admin client for server-side operations
 */
export const supabaseAdmin = () => {
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceRoleKey) {
        throw new Error('SUPABASE_SERVICE_ROLE_KEY is not defined');
    }
    return createClient<Database>(supabaseUrl, serviceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });
};

/**
 * Types for database tables
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
 * Track affiliate link click
 */
export async function trackAffiliateClick(
    slug: string,
    url: string,
    ipAddress: string,
    userAgent: string,
    referrer: string | null
): Promise<void> {
    try {
        const admin = supabaseAdmin();
        await admin.from('affiliate_clicks').insert({
            slug,
            url,
            ip_address: ipAddress,
            user_agent: userAgent,
            referrer,
            created_at: new Date().toISOString(),
        });
    } catch (error) {
        console.error('Error tracking affiliate click:', error);
    }
}

/**
 * Get affiliate link by slug
 */
export async function getAffiliateLink(slug: string): Promise<{ url: string } | null> {
    try {
        const { data, error } = await supabase
            .from('affiliate_links')
            .select('url')
            .eq('slug', slug)
            .single();

        if (error || !data) return null;
        return data;
    } catch (error) {
        console.error('Error getting affiliate link:', error);
        return null;
    }
}

/**
 * Add subscriber
 */
export async function addSubscriber(
    email: string,
    name?: string,
    source: string = 'website',
    tags: string[] = []
): Promise<{ success: boolean; error?: string }> {
    try {
        const { error } = await supabase.from('subscribers').upsert(
            {
                email,
                name,
                source,
                tags,
                updated_at: new Date().toISOString(),
            },
            {
                onConflict: 'email',
            }
        );

        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.error('Error adding subscriber:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}

/**
 * Get subscriber count
 */
export async function getSubscriberCount(): Promise<number> {
    try {
        const { count, error } = await supabase
            .from('subscribers')
            .select('*', { count: 'exact', head: true });

        if (error) throw error;
        return count || 0;
    } catch (error) {
        console.error('Error getting subscriber count:', error);
        return 0;
    }
}

/**
 * Track page view
 */
export async function trackPageView(
    path: string,
    referrer: string | null,
    country: string | null
): Promise<void> {
    try {
        await supabase.from('page_views').insert({
            path,
            referrer,
            country,
            created_at: new Date().toISOString(),
        });
    } catch (error) {
        console.error('Error tracking page view:', error);
    }
}

/**
 * Get popular pages
 */
export async function getPopularPages(limit: number = 10): Promise<Array<{ path: string; count: number }>> {
    try {
        const { data, error } = await supabase
            .from('page_views')
            .select('path')
            .order('created_at', { ascending: false })
            .limit(1000);

        if (error || !data) return [];

        const counts: Record<string, number> = {};
        data.forEach((row) => {
            counts[row.path] = (counts[row.path] || 0) + 1;
        });

        return Object.entries(counts)
            .map(([path, count]) => ({ path, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, limit);
    } catch (error) {
        console.error('Error getting popular pages:', error);
        return [];
    }
}
