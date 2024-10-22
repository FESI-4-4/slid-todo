import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;
  request.headers.set('Authorization', `Bearer ${accessToken}`);

  return NextResponse.rewrite(new URL(`${pathname}${search}`, process.env.NEXT_PUBLIC_BASE_URL), {
    request: {
      headers: request.headers,
    },
  });
}

export const config = {
  matcher: ['/4-4-dev/:path*'],
};
