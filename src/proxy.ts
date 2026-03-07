import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  console.log(
    'Middleware proxy activated for:',
    request.nextUrl.pathname,
    request.nextUrl.pathname.startsWith('/dashboard'),
  );

  if (request.nextUrl.pathname.startsWith('/dash')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dash/:path*'],
};
