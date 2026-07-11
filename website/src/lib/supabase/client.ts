import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  console.log('[Supabase Client] Initializing with URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('[Supabase Client] Initializing with Key:', process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ? 'EXISTS' : 'MISSING');
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  )
}
