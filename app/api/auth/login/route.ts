import { API_BASE_URL } from '@/constants/api';
import setAuthCookies from '@/lib/utils/setAuthCookies';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ message: data.message }, { status: res.status });
    }

    if (data.accessToken && data.refreshToken) {
      const response = NextResponse.json({ user: data.user });
      setAuthCookies(response, data.accessToken, data.refreshToken);
      return response;
    }

    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'An error occurred during login' }, { status: 500 });
  }
}
