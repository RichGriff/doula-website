import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Check Cookie
  const cookie = cookies().get('Auth')
  if(!cookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Validate it
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  const jwt = cookie.value

  try {
    const { payload } = await jose.jwtVerify(jwt, secret, {})
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
}