import { NextResponse } from 'next/server'
import { createClient } from '@/src/lib/supabase/server'
import { getSiteUrl } from '@/src/lib/getSiteUrl'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/profile'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // Use getSiteUrl() which reads NEXT_PUBLIC_SITE_URL or VERCEL_URL.
      // This prevents the redirect going to localhost on mobile browsers.
      const siteUrl = getSiteUrl()
      return NextResponse.redirect(`${siteUrl}${next}`)
    } else {
      console.error('[Auth Callback] exchangeCodeForSession error:', error.message)
      return new NextResponse(`Authentication failed: ${error.message}`, { status: 400 })
    }
  } else {
    const errorDesc = searchParams.get('error_description') || searchParams.get('error') || 'Unknown error'
    return new NextResponse(`Authentication failed: No code provided. Details: ${errorDesc}`, { status: 400 })
  }
}
