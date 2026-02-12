export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export interface Database {
    public: {
        Tables: {
            subscribers: {
                Row: {
                    id: string;
                    email: string;
                    name: string | null;
                    source: string;
                    tags: string[];
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    email: string;
                    name?: string | null;
                    source?: string;
                    tags?: string[];
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    email?: string;
                    name?: string | null;
                    source?: string;
                    tags?: string[];
                    created_at?: string;
                    updated_at?: string;
                };
            };
            affiliate_clicks: {
                Row: {
                    id: string;
                    slug: string;
                    url: string;
                    ip_address: string;
                    user_agent: string;
                    referrer: string | null;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    slug: string;
                    url: string;
                    ip_address?: string;
                    user_agent?: string;
                    referrer?: string | null;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    slug?: string;
                    url?: string;
                    ip_address?: string;
                    user_agent?: string;
                    referrer?: string | null;
                    created_at?: string;
                };
            };
            affiliate_links: {
                Row: {
                    id: string;
                    slug: string;
                    name: string;
                    url: string;
                    platform: string;
                    clicks: number;
                    conversions: number;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    slug: string;
                    name: string;
                    url: string;
                    platform?: string;
                    clicks?: number;
                    conversions?: number;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    slug?: string;
                    name?: string;
                    url?: string;
                    platform?: string;
                    clicks?: number;
                    conversions?: number;
                    created_at?: string;
                };
            };
            page_views: {
                Row: {
                    id: string;
                    path: string;
                    referrer: string | null;
                    country: string | null;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    path: string;
                    referrer?: string | null;
                    country?: string | null;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    path?: string;
                    referrer?: string | null;
                    country?: string | null;
                    created_at?: string;
                };
            };
        };
        Views: Record<string, never>;
        Functions: Record<string, never>;
        Enums: Record<string, never>;
    };
}
