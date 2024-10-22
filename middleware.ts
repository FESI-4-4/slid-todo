import { NextRequest, NextResponse } from 'next/server';
import { fetchNewAccessToken } from './lib/api/refreshToken';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  if (!accessToken && refreshToken) {
    const newAccessToken = await fetchNewAccessToken(refreshToken, baseURL!);

    if (newAccessToken) {
      request.headers.set('Authorization', `Bearer ${newAccessToken}`);

      const response = NextResponse.rewrite(new URL(`${pathname}${search}`, baseURL), {
        request: {
          headers: request.headers,
        },
      });
      response.cookies.set('accessToken', newAccessToken);
      return response;
    } else {
      return NextResponse.redirect(`${baseURL}/login`);
    }
  }

  request.headers.set('Authorization', `Bearer ${accessToken}`);

  return NextResponse.rewrite(new URL(`${pathname}${search}`, baseURL), {
    request: {
      headers: request.headers,
    },
  });
}

export const config = {
  matcher: ['/4-4-dev/:path*'],
};
