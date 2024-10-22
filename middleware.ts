import { NextRequest, NextResponse } from 'next/server';
import { fetchNewAccessToken } from './lib/api/refreshToken';
import { API_BASE_URL } from './constants/api';
import setAuthCookies from './lib/utils/setAuthCookies';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // 이미 로그인한 사용자가 접근하면 안 되는 페이지 목록
  const guestOnlyPages = ['/login', '/signup'];
  // 이미 로그인한 사용자만 접근할 수 있는 페이지 목록
  const userOnlyPages = ['/dashboard', '/todos'];

  // 이미 로그인한 사용자가 로그인/회원가입 페이지에 접근하는 경우
  if (guestOnlyPages.some((page) => pathname.startsWith(page))) {
    if (accessToken) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  // 로그인하지 않은 사용자가 접근하면 안 되는 페이지 목록
  if (userOnlyPages.some((page) => pathname.startsWith(page))) {
    if (!accessToken && !refreshToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (pathname.startsWith('/4-4-dev')) {
    if (!accessToken && refreshToken) {
      const data = await fetchNewAccessToken(refreshToken, API_BASE_URL!);
      if (data) {
        request.headers.set('Authorization', `Bearer ${data.accessToken}`);

        const response = NextResponse.rewrite(new URL(`${pathname}${search}`, API_BASE_URL), {
          request: {
            headers: request.headers,
          },
        });
        setAuthCookies(response, data.accessToken, data.refreshToken);
        return response;
      }
    }

    request.headers.set('Authorization', `Bearer ${accessToken}`);

    return NextResponse.rewrite(new URL(`${pathname}${search}`, API_BASE_URL), {
      request: {
        headers: request.headers,
      },
    });
  }
}

export const config = {
  matcher: ['/4-4-dev/:path*', '/login', '/signup', '/dashboard', '/todos'],
};
