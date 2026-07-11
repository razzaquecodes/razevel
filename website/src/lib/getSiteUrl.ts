/**
 * Returns the canonical site URL for auth redirects.
 *
 * Priority order:
 *  1. NEXT_PUBLIC_SITE_URL (set explicitly in .env / Vercel env vars)
 *  2. VERCEL_URL (automatically injected by Vercel on preview/production deployments)
 *  3. window.location.origin (client-side fallback for local dev only)
 *
 * WHY THIS EXISTS:
 * Using window.location.origin directly as redirectTo causes Safari/mobile failures
 * because on local dev it resolves to http://localhost:3000. When a user opens the
 * deployed app on their iPhone, Safari intercepts the OAuth redirect back to
 * "localhost" — which points to the phone itself, not the dev machine. This function
 * ensures the correct domain is always used regardless of how auth is triggered.
 */
export function getSiteUrl(): string {
  // Server-side or explicit override
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }

  // Vercel auto-injects this on preview/production deployments
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, '');
  }

  // Client-side fallback — safe for actual local dev (browser is on the same machine)
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  // SSR fallback when nothing else is available
  return 'http://localhost:3000';
}
