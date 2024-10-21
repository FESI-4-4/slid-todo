import { API_BASE_URL } from '@/constants/api';
import { NextRequest, NextResponse } from 'next/server';

interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

export async function POST(request: NextRequest) {
  const refreshToken = request.cookies.get('refreshToken')?.value;

  if (!refreshToken) {
    return NextResponse.json({ error: 'Refresh token not found' }, { status: 401 });
  }

  try {
    const res = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) {
      throw new Error('Token refresh failed');
    }

    const data: RefreshResponse = await res.json();

    const response = NextResponse.json(data);

    // Set new access token in HTTP-only cookie
    response.cookies.set('accessToken', data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });

    // Set new refresh token in HTTP-only cookie
    response.cookies.set('refreshToken', data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Token refresh error:', error);
    return NextResponse.json({ error: 'An error occurred during token refresh' }, { status: 500 });
  }
}
