import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions
import { createClient } from '@/src/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  console.log('[Auth Callback] Incoming URL:', request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/profile'
  
  console.log('[Auth Callback] Authorization Code:', code ? 'Exists' : 'Missing')

  if (code) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    
    console.log('[Auth Callback] exchangeCodeForSession error:', error ? error.message : 'None')
    console.log('[Auth Callback] Returned Session:', data?.session ? 'Valid' : 'Invalid')
    console.log('[Auth Callback] Returned User:', data?.user ? data.user.id : 'No User')
    
    if (!error) {
      console.log('[Auth Callback] Successful authentication, redirecting to:', next)
      const forwardedHost = request.headers.get('x-forwarded-host') 
      const isLocalEnv = process.env.NODE_ENV === 'development'
      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}${next}`)
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      } else {
        return NextResponse.redirect(`${origin}${next}`)
      }
    } else {
      console.error('[Auth Callback] Error Details:', error)
      return new NextResponse(`Authentication failed: ${error.message}`, { status: 400 })
    }
  } else {
    console.warn('[Auth Callback] No code provided in URL.')
    const errorDesc = searchParams.get('error_description') || searchParams.get('error') || 'Unknown error';
    return new NextResponse(`Authentication failed: No code provided. Details: ${errorDesc}`, { status: 400 })
  }
}
